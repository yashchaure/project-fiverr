import React from "react";
import 'remixicon/fonts/remixicon.css'
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import GigsList from "./pages/GigsList";
import Footer from "./components/Footer";
import GigPage from "./pages/GigPage";
import Orders from "./pages/Orders"
import Message from "./pages/Message"
import Messages from "./pages/Messages"
import AddGig from "./pages/AddGig"
import MyGigs from "./pages/MyGigs"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/gigs" Component={GigsList} />
        <Route path="/gig/:id" Component={GigPage} />
        <Route path="/orders" Component={Orders} />
        <Route path="/mygigs" Component={MyGigs} />
        <Route path="/add" Component={AddGig} />
        <Route path="/messages" Component={Messages} />
        <Route path="/message/:id" Component={Message} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;
