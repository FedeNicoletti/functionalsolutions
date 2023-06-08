import React from "react";
import "./App.css";
import { Footer, Features, AboutUs, Header } from "./containers";
import { CTA, Navbar } from "./components";
export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <AboutUs />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
