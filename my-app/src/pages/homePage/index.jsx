import React from "react";
import {
  PreNavbar,
  Navbar,
  Slider,
  Experience,
  About,
  Services,
  Team,
  Gallery,
  Rooms,
  ContactUs,
  VisitorExpression,
  Footer,
} from "../../components";

const HomePage = () => {
  return (
    <>
      <PreNavbar />
      <Navbar />
      <Slider />
      <Experience />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Rooms />
      <VisitorExpression />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
