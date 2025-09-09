import {
  useState,
  useEffect,
  useRef,
  type FC,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { Phone } from "lucide-react";
import { useAnalytics } from "../../hooks/useAnalytics";
import "./HeroStripes.css";

const ContactForm: FC = () => {
  const { trackFormView, trackFormInteraction, trackFormSubmission } =
    useAnalytics();
  const [formStartTime] = useState(() => Date.now());
  const hasTrackedView = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Track form view on component mount
  useEffect(() => {
    if (!hasTrackedView.current) {
      trackFormView("contact_form", {
        page: "home",
        section: "contact",
      });
      hasTrackedView.current = true;
    }
  }, [trackFormView]);

  const getCompletedFields = () => {
    return Object.entries(formData)
      .filter(([, value]) => value.trim() !== "")
      .map(([key]) => key);
  };

  const getFormCompletionPercentage = () => {
    const totalFields = Object.keys(formData).length;
    const completedFields = getCompletedFields().length;
    return Math.round((completedFields / totalFields) * 100);
  };

  const handleFieldFocus = (fieldName: string) => {
    trackFormInteraction("contact_form", fieldName, "focus", {
      page: "home",
      section: "contact",
      form_completion_percentage: getFormCompletionPercentage(),
    });
  };

  const handleFieldBlur = (fieldName: string) => {
    trackFormInteraction("contact_form", fieldName, "blur", {
      page: "home",
      section: "contact",
      form_completion_percentage: getFormCompletionPercentage(),
    });
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    trackFormInteraction("contact_form", fieldName, "change", {
      page: "home",
      section: "contact",
      field_value_length: value.length,
      form_completion_percentage: getFormCompletionPercentage(),
    });
  };

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.name.trim()) errors.push("name");
    if (!formData.email.trim()) errors.push("email");
    if (!formData.phone.trim()) errors.push("phone");
    if (!formData.message.trim()) errors.push("message");

    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    const completedFields = getCompletedFields();
    const timeToComplete = Date.now() - formStartTime;

    if (validationErrors.length > 0) {
      trackFormSubmission(
        "contact_form",
        "validation_error",
        completedFields,
        4,
        {
          page: "home",
          section: "contact",
          time_to_complete: timeToComplete,
          validation_errors: validationErrors,
        }
      );
      return;
    }

    try {
      // Simulate form submission (replace with actual API call)
      console.log("Form submitted", formData);

      trackFormSubmission("contact_form", "success", completedFields, 4, {
        page: "home",
        section: "contact",
        time_to_complete: timeToComplete,
      });

      // Reset form on success
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      trackFormSubmission("contact_form", "error", completedFields, 4, {
        page: "home",
        section: "contact",
        time_to_complete: timeToComplete,
        error_message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  // State to track image load
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="w-full flex justify-center items-center py-8 sm:py-12 md:py-16 relative overflow-hidden"
      // style={{
      //   background:
      //     "linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 50%, #F0F0F0 100%)",
      // }}
    >
      {/* Animated Vertical Stripes - Left Side */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[120px] sm:w-[140px] md:w-[180px] overflow-hidden z-0 hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full vl-fade"
            style={{
              left: `${i * 17}px`,
              width: "8px",
              background: `linear-gradient(to bottom,
                var(--stripe-top) 0%,
                var(--stripe-mid) 50%,
                var(--stripe-bottom) 80%,
                transparent 100%)`,
              animationDuration: `${3 + i * 0.2}s`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Vertical Stripes - Right Side */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[120px] sm:w-[140px] md:w-[180px] overflow-hidden z-0 hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full vl-fade"
            style={{
              right: `${i * 17}px`,
              width: "8px",
              background: `linear-gradient(to bottom,
                var(--stripe-top) 0%,
                var(--stripe-mid) 50%,
                var(--stripe-bottom) 80%,
                transparent 100%)`,
              animationDuration: `${3 + i * 0.2}s`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      <div
        className="bg-hero rounded-lg sm:rounded-xl shadow-xl flex flex-col-reverse md:flex-row w-[95%] sm:w-[90%] max-w-5xl overflow-hidden relative z-10"
        style={{
          // background: "linear-gradient(135deg, rgba(255, 247, 232, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)",
          border: "2px solid rgba(255, 165, 0, 0.2)",
          boxShadow: "0 20px 40px rgba(255, 165, 0, 0.15)",
        }}
      >
        {/* Left: Form */}
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
            How can we help you?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            Get in touch with us. We'd love to hear from you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <input
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleFieldChange("name", e.target.value)
              }
              onFocus={() => handleFieldFocus("name")}
              onBlur={() => handleFieldBlur("name")}
              className="bg-white/50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 text-sm sm:text-base transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleFieldChange("email", e.target.value)
              }
              onFocus={() => handleFieldFocus("email")}
              onBlur={() => handleFieldBlur("email")}
              className="bg-white/50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 text-sm sm:text-base transition-all duration-300"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleFieldChange("phone", e.target.value)
              }
              onFocus={() => handleFieldFocus("phone")}
              onBlur={() => handleFieldBlur("phone")}
              className="bg-white/50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 text-sm sm:text-base transition-all duration-300"
              required
            />
            <textarea
              placeholder="Message*"
              value={formData.message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleFieldChange("message", e.target.value)
              }
              onFocus={() => handleFieldFocus("message")}
              onBlur={() => handleFieldBlur("message")}
              className="bg-white/50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 resize-none transition-all duration-300"
              rows={2}
              required
            />

            <div className="mt-2 sm:mt-4">
              <button
                className="text-white border-2 border-transparent px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 w-full sm:w-auto min-h-[44px] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #4ECCEF 0%, #4ECCEF 100%)",
                  boxShadow: "0 4px 15px rgba(255, 165, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #4ECCEF 0%, #4ECCEF 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(255, 165, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #4ECCEF 0%, #4ECCEF 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(255, 165, 0, 0.3)";
                }}
              >
                Book a Call
              </button>
            </div>
          </form>
        </div>

        {/* Right: Person Info */}
        <div
          className="w-full md:w-[280px] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center relative"
          style={{
            background: "linear-gradient(135deg, #FFA500 0%, #FFA500 100%)",
          }}
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-6 left-4 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
              {!imageLoaded || imageError ? (
                <div className="w-full h-full rounded-full bg-gray-300 animate-pulse" />
              ) : null}

              <img
                src="https://via.placeholder.com/80"
                alt="Chetan G"
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white absolute transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </div>
            <h3 className="font-semibold text-base sm:text-lg text-white">
              Chetan G
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-2">
              Creating a tech product roadmap and building scalable apps for
              your organization.
            </p>

            {/* <div className="mt-3 sm:mt-4 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-white">
            <Phone size={14} className="sm:w-4 sm:h-4" />
            <span>CALL US NOW</span>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
