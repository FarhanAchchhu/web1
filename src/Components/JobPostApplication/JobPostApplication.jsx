import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moveToNextStage from "../../Firebase/moveToNextStage.js";
import unArchive from "../../Firebase/unArchive.js";
import archive from "../../Firebase/archive.js";
import React from "react";
import "./JobPostApplication.css";
import StarsRating from "stars-rating";
import changeRatingById from "../../Firebase/changeRatingById.js";
import { useState } from "react";

const JobPostApplication = ({
    jobApplication,
    stages,
    jobPost,
    movedToNextStage,
    showApplicationDetails,
}) => {
    const { id, firstName, lastName, email, stage } = jobApplication;
    let ratingChanged = (newRating) => {
        changeRatingById(id, newRating);
    };
    return (
        <div
            className="job-post-application"
            onClick={() => {
                showApplicationDetails(id);
            }}
        >
            <div className="details">
                <div className="name">
                    {firstName} {lastName}
                </div>
                <div className="email">{email}</div>
            </div>
            <div className="actions">
                <StarsRating
                    count={5}
                    value={jobApplication.stars}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                />
                {stage === 5 ? (
                    <div
                        className="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            unArchive(id, jobPost).then(movedToNextStage);
                        }}
                    >
                        Unarchive
                    </div>
                ) : (
                    <>
                        <div
                            className="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                archive(id, stages, stage, jobPost).then(
                                    movedToNextStage
                                );
                            }}
                        >
                            <FontAwesomeIcon icon={faBoxArchive} />
                        </div>
                        {stage === 4 ? null : (
                            <div
                                className="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    moveToNextStage(
                                        id,
                                        stage + 1,
                                        stages,
                                        jobPost
                                    ).then(movedToNextStage);
                                }}
                            >
                                Move to {stages[stage + 1]}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default JobPostApplication;
