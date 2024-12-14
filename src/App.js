import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import FeaturedBy from "./components/FeaturedBy";
import PremiumStones from "./components/PremiumStones";
import Exclusive from "./components/Exclusive";
import BestSelling from "./components/BestSelling";
import CategorySelector from "./components/CategorySelector";
import WhyStonepedia from "./components/WhyStonepedia";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";
import './styles/App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Products />
            <Testimonials />
            <Clients />
            <FeaturedBy />
            <PremiumStones />
            <Exclusive />
            <BestSelling /> 
            <CategorySelector />
          <WhyStonepedia />
          <LatestNews/>
            <Footer />
        </div>

      
       
    );
};

export default App;
