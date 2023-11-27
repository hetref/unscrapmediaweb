import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useCallback, useContext } from "react";
import { CursorContext } from "../../context/CursorContext";

const Button = ({ classOption, text, path, type }) => {
    const [, setCursor] = useContext(CursorContext);
    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    });

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <>
            {type === "homenav" ? (
                <>
                    <NavLink
                        exact
                        to="/"
                        className={`${classOption}`}
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                    >
                        {text}
                    </NavLink>
                </>
            ) : (
                <button
                    onClick={() => scrollToSection(path)}
                    className={`${classOption}`}
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                >
                    {text}
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    classOption: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
    type: PropTypes.string,
};
Button.defaultProps = {
    classOption: "",
    path: "",
    type: "",
};

export default Button;
