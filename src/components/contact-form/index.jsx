import React, { Fragment, useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { CursorContext } from "../../context/CursorContext";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [, setCursor] = useContext(CursorContext);

    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    });

    const notify = (message, icon) =>
        toast.success(message, {
            duration: 4000,
            position: "bottom-right",
            style: {},
            className: "",
            icon,
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (
            name === "" ||
            name.length === 0 ||
            email === "" ||
            email.length === 0
        ) {
            notify("Please enter all the required fields", "🙏");
            setLoading(false);
        } else {
            emailjs
                .send(
                    "service_0zyslu8",
                    "template_cadhcun",
                    {
                        from_name: name,
                        to_name: "Aryan Shinde",
                        from_email: email,
                        to_email: "aryan.unscrapmedia@gmail.com",
                        message:
                            message === "" || message.length === 0
                                ? "No Message"
                                : message,
                    },
                    "_lFuPk3VscEw-5oGu"
                )
                .then(
                    () => {
                        setLoading(false);
                        notify(
                            "Thank you! We'll get back to you at the earliest",
                            "😊"
                        );
                    },
                    (error) => {
                        setLoading(false);
                        console.error(error);
                        notify(
                            "Ahh, something went wrong. Please try again.",
                            "😅"
                        );
                    }
                );
        }
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
                        // ref={register({
                        //     required: "Message is required",
                        // })}
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
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
