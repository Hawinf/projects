import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import Footer from "../../homepage/footer/footer";
import { useNavigate } from "react-router-dom";


import './contact.css';

import AOS from 'aos';
import 'aos/dist/aos.css'


const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [submit, setSubmit] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_c4unx63', 'template_hi2cweh', form.current, 'O6kW2CQ05u5yU26Om')
          .then((result) => {
            alert('Thank you for your inquiry, our team will reach you out shortly')
            //   console.log(result.text);
              navigate('/')
          }, (error) => {
              console.log(error.text);
          });
          
      };

    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <>
      
        <div className="wrapper-contact" data-aos='fade-down'>
            <div className="container">
                <div className="contact-judul">
                    <h6 className="contact-judul1">Have a question about our products or opportunities to work with Landsnature? Let us know and someone from our team will get back to you promptly.</h6>
                    <h1 className="contact-judul2">We Are Here For You</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-5">
                        <div className="contact-info" data-aos='fade-right'>
                            <h6 className="info-judul">Email</h6>
                            <p className="info-content">info@landsnature.com</p>
                            <h6 className="info-judul">Phone</h6>
                            <p className="info-content">+62 82 145 145 656</p>
                            <h6 className="info-judul">Address</h6>
                            <p className="info-content">Batang, Central Java Indonesia</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <form ref={form} onSubmit={onSubmit} className="contact-form" data-aos='fade-left'>
                            <h5 className="form-judul">Please complete this form to connect with us.</h5>
                            <div>
                                <input placeholder="*Full Name" type="text" name="user_name" required/>
                            </div>
                            <div>
                                <input placeholder="*Email" type="email" name="user_email" required/>
                            </div>
                            <div>
                                <input placeholder="*Company" type="text" name="user_company" required/>
                            </div>
                            <div>
                                <input placeholder="*Website" type="text" name="user_website" required/>
                            </div>
                            <div>
                                <input placeholder="*subject" type="text" name="subject" required />
                            </div>
                            <div>
                                <textarea className="message" type="text" placeholder="*Message" name="message" required/>
                            </div>
                            <button onClick={onSubmit} className="btn btn-success link">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Contact;