import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;