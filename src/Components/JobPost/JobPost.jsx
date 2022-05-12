import "./JobPost.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSuitcase } from "@fortawesome/free-solid-svg-icons";

const JobPost = ({ jobPost, adminView }) => {
    const naviagate = useNavigate();
    let viewJobPost = () => {
        naviagate(
            `/${adminView ? "admin-" : ""}view-job-post?id=${jobPost.id}`
        );
    };
    return (
        <div
            className="job-post"
            onClick={() => {
                if (adminView) {
                    viewJobPost();
                }
            }}
        >
            <div className="details">
                <div className="title">{jobPost.title}</div>
                <div className="other-details">
                    <div className="other-details-group">
                        <FontAwesomeIcon icon={faSuitcase} />
                        <div className="content">{jobPost["emp-type"]}</div>
                    </div>
                    <div className="other-details-group">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div className="content">
                            {jobPost.city}, {jobPost.country}
                        </div>
                    </div>
                </div>
            </div>
            {adminView ? (
                <div className="candidates">
                    {jobPost.candidates} candidates
                </div>
            ) : (
                <div className="view-job">
                    <div className="button" onClick={viewJobPost}>
                        View Job
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobPost;
