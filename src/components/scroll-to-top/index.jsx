import React, { useEffect, useState } from "react";

const ScrollToTop = (props) => {
    const [stick, setStick] = useState(false);
    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        var position = window.scrollY;

        const scrollHandler = () => {
            let scrollPos = window.scrollY;
            if (scrollPos < 200) {
                setStick(false);
            } else if (scrollPos < position) {
                setStick(true);
            } else {
                setStick(false);
            }
            position = scrollPos;
        };

        window.addEventListener("scroll", function () {
            scrollHandler();
        });
        return () => {
            window.removeEventListener("scroll", function () {
                scrollHandler();
            });
        };
    }, [stick]);

    return (
        <button
            type="button"
            className={`scroll-to-top ${stick ? "show" : ""}`}
            onClick={onClickHandler}
            {...props}
        >
            <i className="arrow-top icofont-long-arrow-up"></i>
            <i className="arrow-bottom icofont-long-arrow-up"></i>
        </button>
    );
};

export default ScrollToTop;
