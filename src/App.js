import React from "react";
import Header from "./components/common/Header";
import Intro from "./components/intro/Intro";
import Marketplace from "./components/Marketplace/Marketplace";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Steps from "./components/steps/Steps";
import Journey from "./components/Journey/Journey";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Faq from "./components/faq/Faq";
import Footer from "./components/common/Footer";
import CallToAction from "./components/CallToAction.js/CallToAction";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Marketplace />
      <HowItWorks />
      <Steps />
      <Journey />
      <WhyChooseUs />
      <Faq />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
