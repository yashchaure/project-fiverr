import React from "react";
import HeroBanner from "../components/HeroBanner";
import Categorie from "../components/Categorie";
import PopularServices from "../components/PopularServices";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroBanner />
        <Categorie />
        <PopularServices />
        <Info />
      </Layout>
    </div>
  );
};

export default Home;
