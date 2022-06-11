import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import email from '../assets/images/email.svg';

const Contact = () => {

    const form = useRef
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rwhpi3h', 'template_869pcb9', form.current, 'oB6TR9Ja4cOOivdio')
            .then((result) => {
                console.log(result.text);
                console.log("Email sent!");

            }, (error) => {
                console.log(error.text);
            });
    };
    const alart = () => {
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
    }

    return (
        <div className="row container m-auto my-5 p-3 d-flex align-items-center justify-content-between">
            <div className="contact col-sm-12 col-lg-6 order-lg-last d-flex justify-content-center ">
                <img src={email} className=" contact-img img-fluid shadow-lg" />
            </div>
            <div className="contact-text col-sm-12 order-lg-first col-lg-6 p-4">
                <h1>Send Me Email</h1>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="email" class="form-control" id="name" placeholder="name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nury@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={alart() } className='button' type="submit">Send Email</button>
            </div>
        </div>
    );
};

export default Contact;