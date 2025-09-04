import { useEffect } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import Services from '../components/sections/Services';
import ServicesGrid from '../components/sections/ServicesGrid';

const ServicesPage = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('Services - SoftronicLabs Portfolio', {
      page: 'services',
      section: 'main'
    });
  }, [trackPageView]);

  return (
    <>
      {/* Services Grid - Purple background with service offerings */}
      <div className="bg-hero">
        <ServicesGrid />
      </div>
      
      {/* Microsoft Partnership Services */}
      <Services />
    </>
  );
};

export default ServicesPage;