import React from 'react';
import aboutImg from '../assets/images/about-me-svg.svg';

const AboutMe = () => {
    return (
        <div className="row container m-auto my-5 p-3 d-flex align-items-center justify-content-between">
            <div className="about col-sm-12 col-lg-6 d-flex justify-content-center ">
                <img src={aboutImg} className="img-fluid shadow-lg" />
            </div>
            <div className="about-text col-sm-12 col-lg-6 p-4">
                <h1>About Me</h1>
                <p className="py-6 text-2xl">Welcome to my profile.I am a juniour web developer.Have a look at some of my works below.If you are interedted you can contact me.See my resume from below button.Thanks in advance!</p>
                <button className="button">
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1hr5usEjS_7DVl54IVJ4a90ZVSK9X78Hv/view">Download Resume</a>
                </button>
            </div>
        </div>
    );
};

export default AboutMe;