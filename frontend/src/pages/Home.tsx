import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import FeaturedStories from "../components/sections/FeaturedStories"
// import Industries from '../components/sections/Industries';
import CaseStudies from '../components/sections/CaseStudies';
import Testimonials from '../components/sections/Testimonials';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/layout/Footer';
// import Partners from '../components/sections/Partners';

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials /> 
      <CaseStudies />
      <Services />
      <FeaturedStories />
      <ContactForm />
      <Footer/>
      {/* <Industries /> */}
      {/* <Partners /> */}
    </>
  );
};

export default Home;