import React, { useState } from "react";
import Footer from "../../homepage/footer/footer";
import './contact.css';

const Contact = () => {
    const [submit, setSubmit] = useState('')

    const onSubmit = () => {
        alert('Unable to send website under maintainance')
    }
    return (
        <>
        <div className="wrapper-contact">
            <div className="container">
                <div className="contact-judul">
                    <h6 className="contact-judul1">Have a question about our products or opportunities to work with Landsnature? Let us know and someone from our team will get back to you promptly.</h6>
                    <h1 className="contact-judul2">We Are Here For You</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-5">
                        <div className="contact-info">
                            <h6 className="info-judul">Email</h6>
                            <p className="info-content">info@landsnature.com</p>
                            <h6 className="info-judul">Phone</h6>
                            <p className="info-content">+62 82 145 145 656</p>
                            <h6 className="info-judul">Address</h6>
                            <p className="info-content">Batang, Central Java Indonesia</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <h5 className="form-judul">Please complete this form to connect with us.</h5>
                            <div>
                                <input placeholder="*Full Name" />
                            </div>
                            <div>
                                <input placeholder="*Email" />
                            </div>
                            <div>
                                <input placeholder="*Company" />
                            </div>
                            <div>
                                <input placeholder="*Website" />
                            </div>
                            <div>
                                <input className="message" placeholder="*Message" />
                            </div>
                            <button onClick={onSubmit} className="btn btn-success link">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Contact;