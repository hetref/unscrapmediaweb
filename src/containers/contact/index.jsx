import React from "react";

import ContactForm from "../../components/contact-form";
import ContactInfo from "../../components/contact-info";
import ContactData from "../../data/contact.json";
import SectionTitle from "../../components/section-title";

const ContactContainer = () => {
    return (
        <section className="contact-section pb-6">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-6 col-lg-6 mb-7">
                        <div className="contact-title-section">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="CONTACT US"
                            />
                            <h3 className="title">Get in touch</h3>
                            <p>
                                Top rated construction packages we pleasure
                                rationally encounter
                                <br className="d-none d-xl-block" />
                                consequences interesting who loves or pursue or
                                desires
                            </p>
                        </div>

                        <ContactForm />
                    </div>

                    <div className="col-xl-5 col-lg-6 mb-7 offset-xl-1">
                        <div className="contact-address text-center">
                            {ContactData &&
                                ContactData.map((single, key) => {
                                    return (
                                        <ContactInfo key={key} data={single} />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;
