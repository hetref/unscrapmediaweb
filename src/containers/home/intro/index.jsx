import React from "react";
import Intro from "../../../components/intro";
import HomeData from "../../../data/home.json";
import shape1 from "../../../assets/images/header/shape1.svg";
import shape2 from "../../../assets/images/header/shape2.svg";

const IntroContainer = () => {
    return (
        <div className="section position-relative">
            <div className="hero-shape1">
                {/* <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1svg.svg`}
                    alt="shape"
                /> */}
                <img src={shape1} alt="shape" />
            </div>
            <div className="hero-shape2">
                {/* <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/shape2.png`}
                    alt="shape"
                /> */}

                <img src={shape2} alt="shape" />
            </div>
            <Intro data={HomeData[0].slider[0]} />
        </div>
    );
};

export default IntroContainer;
