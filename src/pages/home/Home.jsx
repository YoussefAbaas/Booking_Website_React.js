import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperites from "../../components/featuredProperites/FeaturedProperites";
import EmailList from "../../components/emailList/EmailList";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperites />
        <EmailList />
        <Footer />
      </div>
    </div>
  );
}
