import React from "react";
import "./SuccessMessage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function SuccessMessage({ desc, hideSuccessMessage }) {
    return (
        <div className="success-message">
            <div className="success-message-content">
                <div className="success-message-logo">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className="success-message-desc">{desc}</div>
                <div
                    className="button"
                    onClick={() => {
                        hideSuccessMessage();
                    }}
                >
                    Ok
                </div>
            </div>
        </div>
    );
}

export default SuccessMessage;
