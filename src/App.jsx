// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Testimonials from "./components/Testimonials";
// import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <HeroSection />
//       <Services />
//       <WhyChooseUs />
//       <Testimonials />
//       <ContactForm />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Properties from "./components/Properties";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />

      <Hero />
      <Properties />
      <Footer />
    </div>
  );
};

export default App;
