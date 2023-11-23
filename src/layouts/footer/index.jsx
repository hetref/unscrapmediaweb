import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import SocialIcon from "../../components/social-icon";

const Footer = () => {
    const [year, setYear] = useState(0);
    useEffect(() => {
        const today = new Date();
        setYear(today.getFullYear());
    }, []);

    return (
        <footer className="footer-section">
            <div className="footer-top position-relative">
                <img
                    className="footer-shape"
                    src={process.env.PUBLIC_URL + "/images/footer/1.png"}
                    alt="shape"
                />
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-lg-4 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <Logo
                                    classOption="footer-logo mb-9"
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo-black.png`}
                                />
                                <p>
                                    Pleasure rationally encounter consequences
                                    that extremely painful. Nor again is there
                                </p>
                                <ul className="footer-social-links">
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.facebook.com/"
                                            icon="icofont-facebook"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.instagram.com/"
                                            icon="icofont-instagram"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://twitter.com/"
                                            icon="icofont-twitter"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.whatsapp.com/"
                                            icon="icofont-whatsapp"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-sm-6 mb-7 offset-xl-1">
                            <div className="footer-widget">
                                <h4 className="title">Quick Link</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/about"
                                            }
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/service"
                                            }
                                        >
                                            Pricing Plan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/about"
                                            }
                                        >
                                            Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL + "/blog"
                                            }
                                        >
                                            Blog Post
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL + "/team"
                                            }
                                        >
                                            Our Clients
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/contact"
                                            }
                                        >
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Services</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/2`
                                            }
                                        >
                                            Business Plan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/3`
                                            }
                                        >
                                            Creative Strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/4`
                                            }
                                        >
                                            Branding{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/1`
                                            }
                                        >
                                            Digital Solution
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/5`
                                            }
                                        >
                                            Marketing Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/6`
                                            }
                                        >
                                            Campaign &amp; PR
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Contact info</h4>
                                <p>
                                    Unscrap Media, SS3-99, Sector 2, Vashi, Navi
                                    Mumbai, Maharashtra 400703
                                </p>
                                <ul className="address">
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+12354569874"
                                        >
                                            +12354 569 874
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+98745612398"
                                        >
                                            +98745 612 398
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:unscrapmedia@gmail.com"
                                        >
                                            unscrapmedia@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://unscrapmedia.com"
                                        >
                                            unscrapmedia.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>
                                    Copyright &copy; {year} Made with{" "}
                                    <i className="icofont-heart-alt"></i> By{" "}
                                    <a
                                        href="https://themeforest.net/user/codecarnival/portfolio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        UnscrapMedia
                                    </a>
                                    , All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
