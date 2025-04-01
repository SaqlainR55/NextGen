import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RedBanner } from "@/components/layout/RedBanner";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";
import ServiceDetail from '@/pages/ServiceDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <RedBanner />
      <Footer />
      <Toaster />
    </div>
    </BrowserRouter>
  );
}

export default App;