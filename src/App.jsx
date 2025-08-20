import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOneLayout from "./components/HomeOneLayout";
import HomeTwoLayout from "./components/HomeTwoLayout";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SoftwareDevelopmentPage from "./pages/SoftwareDevelopmentPage";
import AiMlImplementation from "./pages/AiMlImplementationPage";
import BusinessAutomation from "./pages/BusinessAutomationPage";
import DataAnalytics from "./pages/DataAnalyticsPage";
import Cybersecurity from "./pages/CybersecurityPage";
import DigitalTransformation from "./pages/DigitalTransformationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import HomeTwo from "./pages/HomeTwo";
import ScrollToTop from "./components/ScrollToTop";
import Error404 from "./pages/Error404";

const BodyClassHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const homePages = ["/", "/home-two"];

    if (homePages.includes(location.pathname)) {
      document.body.classList.add("section-bg");
    } else {
      document.body.classList.remove("section-bg");
    }

    return () => {
      document.body.classList.remove("section-bg");
    };
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BodyClassHandler />
      <Routes>
        {/* Home One */}
        <Route path="/" element={<HomeOneLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="ai-ml-implimentation" element={<AiMlImplementation />} />
          <Route path="business-automation" element={<BusinessAutomation />} />
          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="cybersecurity-advisory" element={<Cybersecurity />} />
          <Route path="digital-transformation" element={<DigitalTransformation />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="project-details" element={<ProjectDetailsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/* Home Two */}
        {/* <Route path="home-two" element={<HomeTwoLayout />}>
          <Route index element={<HomeTwo />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="service-details" element={<ServiceDetailsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="project-details" element={<ProjectDetailsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Error404 />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
