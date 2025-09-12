import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
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
import CoEngineering from "./pages/CoEngineering";
import InnovationLab from "./pages/InnovationLab";
import TalentOps from "./pages/TalentOps";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DDPPlatform from "./pages/DDPPlatform";
import AnalyticsSolutions from "./pages/AnalyticsSolutions";
import IoTSolutions from "./pages/IoTSolutions";
import GamificationPage from "./pages/GamificationPage";
import Leadership from "./pages/Leadership";

function App() {
  useEffect(() => {
    mixpanelService.init();
  }, []);

  return (
    <Layout>
      <ScrollToTop />
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
        <Route path="/co-engineering" element={<CoEngineering />} />
        <Route path="/innovation-lab" element={<InnovationLab />} />
        <Route path="/talent-ops" element={<TalentOps />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/ddp-platform" element={<DDPPlatform />} />
        <Route path="/analytics-solutions" element={<AnalyticsSolutions />} />
        <Route path="/iot-solutions" element={<IoTSolutions />} />
        <Route path="/gamification-in-pedagogy" element={<GamificationPage />} />
        <Route path="/leader-ship" element={<Leadership />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
