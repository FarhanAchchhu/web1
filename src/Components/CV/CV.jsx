const CV = ({ jobApplication }) => {
    return (
        <div
            className="job-application"
            style={{
                textAlign: "center",
            }}
        >
            <a
                className="button"
                style={{
                    display: "inline-block",
                }}
                target="_blank"
                rel="noreferrer"
                href={jobApplication.resume}
            >
                Download CV
            </a>
        </div>
    );
};

export default CV;
