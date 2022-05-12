import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewJobPost.css";
import ApplyForm from "../../Components/ApplyForm/ApplyForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faLocationDot,
    faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import fetchJobPostById from "../../Firebase/fetchJobPostById";
import TopBarSection from "../Home Page/layout/topbar";
import FooterSection from "../Home Page/layout/footer/footer";

const ViewJobPost = () => {
    const [jobPost, setJobPost] = useState();
    const naviagate = useNavigate();
    const location = useLocation();
    const id = location.search.substring(4);
    useEffect(() => {
        fetchJobPostById(id).then((data) => {
            setJobPost(data);
        });
    }, []);
    useEffect(() => {
        if (jobPost) document.title = jobPost.title;
    }, [jobPost]);
    if (jobPost) {
        return (
            <>
                <TopBarSection />
                <div className="view-job-post">
                    <div
                        className="all-jobs"
                        onClick={() => {
                            naviagate("/careers");
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                        <span>All jobs</span>
                    </div>
                    <div className="summary">
                        <div className="heading">{jobPost.title}</div>
                        <div className="other-details">
                            <div className="other-details-group">
                                <FontAwesomeIcon icon={faSuitcase} />
                                <div className="content">
                                    {jobPost["emp-type"]}
                                </div>
                            </div>
                            <div className="other-details-group">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <div className="content">{`${jobPost.city}, ${
                                    jobPost.country
                                } / Remote: ${
                                    jobPost.remote ? "Yes" : "No"
                                }`}</div>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="content">
                            <div className="desc">
                                {jobPost.desc.map((para, index) => {
                                    return <p key={index}>{para}</p>;
                                })}
                            </div>
                            <div className="list">
                                <strong className="list-heading">
                                    Responsibilities
                                </strong>
                                <ul className="list-content">
                                    {jobPost.responsibilities.map(
                                        (responsibility, index) => {
                                            return (
                                                <li
                                                    className="list-item"
                                                    key={index}
                                                >
                                                    {responsibility}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className="list">
                                <strong className="list-heading">
                                    Requirements
                                </strong>
                                <ul className="list-content">
                                    {jobPost.requirements.map(
                                        (requirement, index) => {
                                            return (
                                                <li
                                                    className="list-item"
                                                    key={index}
                                                >
                                                    {requirement}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <ApplyForm id={id} />
                        </div>
                        <div className="apply-now">
                            <a className="button" href="#form">
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
                <FooterSection />
            </>
        );
    }
    return null;
};

export default ViewJobPost;
