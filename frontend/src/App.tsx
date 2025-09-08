import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudiesWithPagination from "./pages/CaseStudiesWithPagination";
import NotFound from "./pages/NotFound";
import ContactForm from "./components/sections/ContactForm";
import mixpanelService from "./services/mixpanel";
import SoftronicsHero from "./pages/SoftronicsHero";
import ProductStrategy from "./pages/ProductStrategy";
import QualityEngineering from "./pages/QualityEngineering";
import DataEngenieering from "./pages/DataEngenieering";
import Ai_Ml from "./pages/Ai_Ml";
import FinancialServices from "./pages/FinancialServices";
import InsuranceTech from "./pages/InsuranceTech";
import FintechInnovations from "./pages/FintechInnovations";
import EcommercePlatforms from "./pages/EcommercePlatforms";
import SupplyChainManagement from "./pages/SupplyChainManagement";
import Industry40 from "./pages/Industry40";
import MswDevelopment from "./pages/MswDevelopment";
import DigitalExpericnce from "./pages/DigitalExprenice";

function App() {
  useEffect(() => {
    mixpanelService.init();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudiesWithPagination />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-softroniclabs" element={<SoftronicsHero />} />
        <Route path="/product-strategy" element={<ProductStrategy />} />
        <Route path="/quality-engineering" element={<QualityEngineering />} />
        <Route path="/data-engg" element={<DataEngenieering />} />
        <Route path="/ai-ml" element={<Ai_Ml />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/insurance-tech" element={<InsuranceTech />} />
        <Route path="/fintech-innovations" element={<FintechInnovations />} />
        <Route path="/e-commerce-platforms" element={<EcommercePlatforms />} />
        <Route path="/supply-chain-management" element={<SupplyChainManagement />} />
        <Route path="/industry-4-0" element={<Industry40 />} />
        <Route path="/msw-dev" element={<MswDevelopment />} />
        <Route path="/digi-exp" element={<DigitalExpericnce />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
