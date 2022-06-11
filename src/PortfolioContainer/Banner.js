import React from 'react';
import heroImg from '../assets/images/nury.png';
import Github from '../assets/images/github.png';
import Instagram from '../assets/images/instagram.png';
import Linkedin from '../assets/images/linkedin.png';

const Banner = () => {
    return (
        <div className="row container m-auto my-5 p-3 d-flex align-items-center justify-content-between">
            <div className="hero-images col-sm-12 col-lg-6 order-lg-last d-flex justify-content-center align-items-center ">
                <img src={heroImg} className="img-fluid" />
            </div>
            <div className="hero-text col-sm-12 col-lg-6 order-lg-first p-4">
                <span>Hey! I am</span> <br />
                <span>Jannat Nury</span>
                <p className="py-6 text-2xl">Welcome to my profile.I am a juniour web developer having high level of exerience in web designing and development, producting the quality work.If you are interested click below...</p>
                <button className="button">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jannat-nury-6aa671141/">Contact</a>
                </button>
                <div className='hero-icons'>
                    <img src={Github} alt="github" />
                    <img src={Instagram} alt="github" />
                    <img src={Linkedin} alt="github" />
                </div>
            </div>
        </div>
    );
};

export default Banner;