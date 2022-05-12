import React from "react";
import { useEffect, useState } from "react";
import fetchJobApplicationById from "../../Firebase/fetchJobApplicationById";
import OverviewTab from "../OverviewTab/OverviewTab";
import CV from "../CV/CV";
import "./ApplicationDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import StarsRating from "stars-rating";
import changeRatingById from "../../Firebase/changeRatingById";

const ApplicationDetails = ({
    id,
    hideApplicationDetails,
    updateJobApplications,
}) => {
    const [ratingUpdated, setRatingUpdated] = useState(false);
    const [jobApplication, setJobApplication] = useState({});
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = [
        {
            name: "Overview",
            content: <OverviewTab jobApplication={jobApplication} />,
        },
        {
            name: "CV",
            content: <CV jobApplication={jobApplication} />,
        },
    ];
    useEffect(() => {
        fetchJobApplicationById(id).then((data) => {
            setJobApplication(data);
        });
    }, []);
    let ratingChanged = (newRating) => {
        changeRatingById(id, newRating);
        setRatingUpdated(true);
    };
    return (
        <div className="application-details">
            <div className="application-details-content">
                <div className="close">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => {
                            if (ratingUpdated) {
                                updateJobApplications();
                            }
                            hideApplicationDetails();
                        }}
                    />
                </div>
                <div className="name-star-rating">
                    <div className="name">
                        {jobApplication.firstName} {jobApplication.lastName}
                    </div>
                    <div className="star-rating">
                        <StarsRating
                            count={5}
                            value={jobApplication.stars}
                            onChange={ratingChanged}
                            size={24}
                            color2={"#ffd700"}
                        />
                    </div>
                </div>
                <div className="tabs">
                    {tabs.map(({ name }, index) => {
                        return (
                            <div
                                className={`tab ${
                                    selectedTab === index ? "active-tab" : ""
                                }`}
                                key={index}
                                onClick={() => {
                                    setSelectedTab(index);
                                }}
                            >
                                {name}
                            </div>
                        );
                    })}
                </div>
                <div className="tab-content">{tabs[selectedTab].content}</div>
            </div>
        </div>
    );
};

export default ApplicationDetails;
