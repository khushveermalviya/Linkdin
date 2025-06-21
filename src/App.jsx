import Header from "./Components/Header"
import { useState,useEffect 
} from "react";
import { ClipLoader } from "react-spinners";
import { AboutSection } from "./Components/AboutSection";
import { ActivitySection } from "./Components/ActivitySection";
import { CertificateSection } from "./Components/CertificateSection";
import { EducationSection } from "./Components/EducationSection"
import { FeaturedSection } from "./Components/FeaturedSection."
import { ServicesSection } from "./Components/ServiceSection"
import { ExperienceSection } from "./Components/Experience";

// import {  AboutSection,
//   ServicesSection,
//   FeaturedSection,
//   ExperienceSection,
//   EducationSection,
//   CertificateSection,} from "./Components/Experience.jsx"
  export default function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <img
            src="/link.png"
            alt="LinkedIn Logo"
            className="h-16 w-16 mb-4"
          />
          <ClipLoader color="#3498db" size={40} />
        </div>
      );
    }
  
  
    return (<>
    <Header/>
   
      <div className="max-w-3xl mx-auto px-4 py-6">
        <AboutSection />
        <ServicesSection />
        <FeaturedSection />
        <ActivitySection />
        <ExperienceSection />
        <EducationSection/>
        <CertificateSection />
      </div>
      </>
    );
  }

