import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        setLoading(true);
        emailjs
            .send(
                "service_0zyslu8",
                "template_cadhcun",
                {
                    from_name: name,
                    to_name: "Aryan Shinde",
                    from_email: email,
                    to_email: "aryan.unscrapmedia@gmail.com",
                    message: message,
                },
                "_lFuPk3VscEw-5oGu"
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        "Thank you. I will get back to you as soon as possible."
                    );
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <Fragment>
            <form
                id="contactForm"
                className="row"
                // action="https://getform.io/f/307eda9d-280b-4045-808b-61674b3b908f"
                // method="POST"
            >
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="col-12 mb-9">
                    <textarea
                        className="form-control massage-control"
                        name="message"
                        id="massage"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ref={register({
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Well Done!"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
