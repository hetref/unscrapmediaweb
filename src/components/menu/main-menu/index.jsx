import { NavLink } from "react-router-dom";
import Button from "../../button";

const MainMenu = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    {/* <NavLink exact to="/">
                        Home
                    </NavLink> */}
                    <Button type="homenav" text="Home" />
                    {/* <a href="/">Home</a> */}
                </li>
                <li>
                    {/* <NavLink to={process.env.PUBLIC_URL + "/#about"}>
                        About
                    </NavLink> */}
                    {/* <button onClick={() => scrollToSection("about")}>
                        About
                    </button> */}

                    <Button path="about" text="About" />
                </li>
                <li>
                    {/* <NavLink to={process.env.PUBLIC_URL + "/service"}>
                        Service
                    </NavLink> */}
                    {/* <a href="#service">Service</a> */}
                    {/* <button onClick={() => scrollToSection("service")}>
                        Service
                    </button> */}

                    <Button path="service" text="Service" />

                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/service"}
                            >
                                Service
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/service-details/1"
                                }
                            >
                                single service
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
                {/* <li> */}
                {/* <NavLink to="/">Testimonials</NavLink> */}
                {/* <a href="#testimonials">Testimonials</a> */}
                {/* <button onClick={() => scrollToSection("testimonials")}>
                        Testimonials
                    </button> */}

                {/* <Button path="testimonials" text="Testimonials" /> */}
                {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/faq"}
                            >
                                faq
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/team"}
                            >
                                team
                            </NavLink>
                        </li>
                    </ul> */}
                {/* </li> */}
                <li>
                    <Button path="works" text="Works" />
                </li>
                <li>
                    {/* <NavLink to={process.env.PUBLIC_URL + "/blog"}>
                        Team
                    </NavLink> */}
                    {/* <a href="#team">Team</a> */}
                    {/* <button onClick={() => scrollToSection("team")}>
                        Team
                    </button> */}

                    <Button path="team" text="Team" />
                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog"}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-left-sidebar"
                                }
                            >
                                blog grid left sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-right-sidebar"
                                }
                            >
                                blog grid right sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog-details/1"}
                            >
                                blog details
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
                <li>
                    {/* <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                    </NavLink> */}
                    {/* <a href="#contact">Contact</a> */}
                    {/* <button onClick={() => scrollToSection("contact")}>
                        Contact
                    </button> */}

                    <Button path="contact" text="Contact" />
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
