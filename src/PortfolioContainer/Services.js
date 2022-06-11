import React from 'react';
import image from '../assets/images/reactjs.jpg';
import image2 from '../assets/images/node.jpg';
import image3 from '../assets/images/javascript.jpg';

const Services = () => {
    return (
        <div className='row container m-auto mt-4'>
        <h1 className='text-center my-3'>My Skills</h1>
        <div className="col-12 col-lg-4 mb-3">
            <div className='skills text-white d-flex align-items-center justify-content-center p-3 pb-4'>
                <img src={image} alt="customer-img" />
                <div className='ms-3'>
                    <h4>React</h4>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-4 mb-3">
            <div className='skills text-white d-flex align-items-center justify-content-center p-3 pb-4'>
                <img src={image2} alt="customer-img" />
                <div className='ms-3'>
                    <h4>Node Js</h4>
                    <p>Node.js is an event-driven JavaScript runtime. Node has myriad potential uses for JavaScript development including being a great environment for building efficient network applications.Know more.</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-4 mb-3">
            <div className='skills text-white d-flex align-items-center justify-content-center  p-3'>
                <img src={image3} alt="customer-img" />
                <div className='ms-3 pb-2'>
                    <h4>JavaScript</h4>
                    <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.JavaScript becomes so popular nowadays.</p>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Services;