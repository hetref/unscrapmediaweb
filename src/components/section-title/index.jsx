import PropTypes from "prop-types";

const SectionTitle = ({
    subTitle,
    title,
    excerpt,
    classOption,
    excerptClassOption,
}) => {
    return (
        <div className={`title-section ${classOption}`}>
            <span className="sub-title">{subTitle}</span>
            {title === "" ? (
                <></>
            ) : (
                <h3
                    className="title"
                    dangerouslySetInnerHTML={{ __html: title }}
                ></h3>
            )}
            <p
                className={`${excerptClassOption}`}
                dangerouslySetInnerHTML={{ __html: excerpt }}
            ></p>
        </div>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    classOption: PropTypes.string,
    excerptClassOption: PropTypes.string,
};
SectionTitle.defaultProps = {
    subTitle: "",
    title: "",
    excerpt: "",
    classOption: "section-title",
    excerptClassOption: "",
};

export default SectionTitle;
