import React, { useState, useEffect } from "react";
import "./App.css";
import PerpetualLogo from "./components/PerpetualLogo";

import GeneralInformation from "./components/GeneralInformation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Waitlist from "./components/Waitlist";
import ForStudents from "./components/ForStudents";
import ForTeachers from "./components/ForTeachers";
import { Divider } from "@chakra-ui/react";
import LatestUpdates from "./components/LatestUpdates";

function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleAnimationComplete = () => {
    setShowWaitlist(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div class="landing-page-grid">
      <div className="main-page">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <Header />
        </header>
        <div className="left-page-content">
          <div className="product-demo">Product Demo</div>
        </div>
        <div className="right-page-content">
          <div className={`perpetual-logo ${showWaitlist ? "shift-up" : ""}`}>
            <PerpetualLogo onAnimationComplete={handleAnimationComplete} />
          </div>
          <div className={`waitlist ${showWaitlist ? "show" : ""}`}>
            <Waitlist />
          </div>
        </div>
      </div>
      <div className="landing-page-content">
        <div className="general-information">
          <GeneralInformation />
        </div>
        <div className="user-information">
          <ForStudents />
          <Divider orientation="vertical" />
          <ForTeachers />
        </div>
        <div className="latest-updates">
          <LatestUpdates />
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
