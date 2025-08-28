import { useState, type FC, type FormEvent } from "react";
import { Phone } from "lucide-react";

const ContactForm: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submit here
    console.log("Form submitted");
  };

  // State to track image load
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full flex justify-center items-center bg-[#f3eafd] py-16">
      <div className="bg-[#6740BA] text-white rounded-md shadow-xl flex flex-col md:flex-row w-[90%] max-w-5xl overflow-hidden">
        {/* Left: Form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
          <p className="text-sm text-gray-200 mb-6">
            Get in touch with us. We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white placeholder-gray-200 pb-2"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white placeholder-gray-200 pb-2"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white placeholder-gray-200 pb-2"
              required
            />
            <textarea
              placeholder="Message*"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white placeholder-gray-200 pb-2 resize-none"
              rows={2}
              required
            />

            <div className="hidden md:block">
              <button className="bg-[#DF4B68] hover:bg-white text-white hover:text-[#DF4B68] border-2 border-transparent hover:border-[#DF4B68] px-6 py-2 rounded-md text-sm font-medium transition-all duration-300">
                Book a Call
              </button>
            </div>
          </form>
        </div>

        {/* Right: Person Info */}
        <div className="w-full md:w-[280px] bg-[#6740BA] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 mb-4">
            {!imageLoaded || imageError ? (
              <div className="w-full h-full rounded-full bg-gray-300 animate-pulse" />
            ) : null}

            <img
              src="https://via.placeholder.com/80"
              alt="Hiren Dhaduk"
              className={`w-20 h-20 rounded-full border-2 border-white absolute transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
          <h3 className="font-semibold text-lg">Hiren Dhaduk</h3>
          <p className="text-sm text-gray-200 mt-2">
            Creating a tech product roadmap and building scalable apps for your
            organization.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
            <Phone size={16} />
            <span>CALL US NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
