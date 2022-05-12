import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import { applyToJob } from "../../Firebase/applyToJob";
import SuccessMessage from "../../Components/SuccessMessage/SuccessMessage";
import "./ApplyForm.css";

const ApplyForm = ({ id }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        linkedin: "",
        resume: {},
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const fileInput = useRef();
    let fileUpload = (event) => {
        if (event.target.files[0].type === "application/pdf") {
            setFormData({ ...formData, resume: event });
        }
    };
    // let validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };
    // let validateURL = (url) => {
    //     return String(url)
    //         .toLowerCase()
    //         .match(
    //             (https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})
    //         );
    // };
    // let validateFileUpload = () => {
    //     if (fileInput.current.files.length > 0) {
    //         if (fileInput.current.files[0].type === "application/pdf") {
    //             return true;
    //         }
    //     }
    // };
    let hideSuccessMessage = () => {
        setShowSuccessMessage(false);
    };
    return (
        <div className="form apply-form" id="form">
            {showSuccessMessage ? (
                <SuccessMessage
                    desc="Applied to the job successfully."
                    hideSuccessMessage={hideSuccessMessage}
                />
            ) : null}
            {submitting ? (
                <div className="loading">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : null}
            <div className="heading">Apply here: </div>
            <div className="content">
                <div className="input-group">
                    <div className="input-heading">First Name</div>
                    <input
                        required
                        type="text"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                firstName: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="input-group">
                    <div className="input-heading">Last Name</div>
                    <input
                        required
                        type="text"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                lastName: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="input-group">
                    <div className="input-heading">Email Address</div>
                    <input
                        required
                        type="email"
                        onChange={(e) => {
                            // if (validateEmail(e.target.value)) {
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            });
                            // }
                        }}
                    />
                </div>
                <div className="input-group">
                    <div className="input-heading">Phone Number</div>
                    <input
                        required
                        type="text"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                phoneNum: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="input-group">
                    <div className="input-heading">Linkedin profile</div>
                    <input
                        required
                        type="url"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                linkedin: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="input-group">
                    <div className="input-heading">Resume</div>
                    <div className="file-input">
                        <label htmlFor="resume">
                            <div className="icon">
                                <FontAwesomeIcon icon={faFileCirclePlus} />
                            </div>
                            <div className="title">
                                <span>Upload a file</span> or drag and drop here
                            </div>
                        </label>
                        <input
                            type="file"
                            id="resume"
                            onChange={fileUpload}
                            ref={fileInput}
                        />
                    </div>
                </div>
            </div>
            <div className="submit">
                <div
                    className="button submit-button"
                    onClick={async () => {
                        setSubmitting(true);
                        await applyToJob(formData, id);
                        setSubmitting(false);
                        setShowSuccessMessage(true);
                    }}
                >
                    Apply now
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;
