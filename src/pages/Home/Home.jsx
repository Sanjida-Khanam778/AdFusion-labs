import React from 'react';
import Hero from '../../components/Hero/Hero';
import Team from '../../components/Team/Team';
import Gallery from '../../components/Gallery/Gallery';
import WhyUse from '../../components/WhyUse/WhyUse';
import HowWork from '../../components/HowWork/HowWork';
import About from '../../components/About/About';

const Home = () => {
    return (
        <div>
          
            <Hero />
            <Team />
            <Gallery />
            <WhyUse />
            <HowWork />
            <About />
        </div>
    );
};

export default Home;