import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Team from "../../../components/team";
import HomeData from "../../../data/home.json";

const TeamContainer = ({ classOption }) => {
    return (
        <div
            id="team"
            className={`team-section overflow-hidden ${classOption}`}
        >
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="TEAM"
                                title="Visionaries Behind <span class='text-primary'>Unscrap Media</span>"
                                excerptClassOption="mb-5"
                                excerpt="Meet the dynamic trio steering Unscrap Media towards excellence — Tejan Suvarna, Kaushik Patil, and Cary Wood. Fueled by a shared passion for innovation, they bring a wealth of experience in social media marketing, web development, and creative design. Together, they form the driving force behind our commitment to delivering cutting-edge solutions that redefine the digital landscape. With a vision to empower businesses through seamless integration of technology and creativity, Cary, Kaushik, and Tejan inspire our team to push boundaries and consistently exceed expectations."
                            />
                            {/* <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there
                            </p> */}
                            {/* <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="View more"
                                path="/team"
                            /> */}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="new-team-members">
                            {HomeData[5].team &&
                                HomeData[5].team.map((single, key) => {
                                    return <Team key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TeamContainer.propTypes = {
    classOption: PropTypes.string,
};

TeamContainer.defaultProps = {
    classOption: "section-pb",
};

export default TeamContainer;
