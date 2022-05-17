import "./Careers.css";
import JobPost from "../../Components/JobPost/JobPost";
import { fetchJobPosts } from "../../Firebase/fetchJobPosts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import usePagination from "../../Hooks/usePagination";
import { useEffect } from "react";
import TopBarSection from "../Home Page/layout/topbar";
import FooterSection from "../Home Page/layout/footer/footer";
import careers from "../../assets/images/careers.png";
import ml_banner_bg_svg_2 from "../../assets/images/ml_banner_bg_2.svg";

const Careers = () => {
    const [data, loadingPage, fetchingData, fetchMore, fetchNextData] =
        usePagination(fetchJobPosts);
    useEffect(() => {
        document.title = "USMART | Careers";
    }, []);
    if (loadingPage)
        return (
            <div className="loading">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    return (
        <>
            <TopBarSection />
            <div className="careers">
                <div className="content relative flex">
                    <div class="absolute right-0" style={{zIndex:-1}}>
                        <img
                            alt="ml_banner_bg_svg_1"
                            src={ml_banner_bg_svg_2}
                        />
                    </div>
                    <div className="heading-desc p-20" style={{ flex: 1 }}>
                        <div className="heading text-left text-4xl font-semibold text-blue-900">Careers at U-SMART</div>
                        <p className="desc text-left mx-3 text-black">

                            We offer like minded professionals the opportunity
                            to develop & enhance their careers and often move
                            ahead more rapidly than other companies. Ongoing
                            training & mentoring provide exciting & personally
                            satisfying careers.
                        </p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src={careers} alt="Careers at U-SMART" />
                    </div>
                </div>
                <div className="current-openings">
                    <div className="openings">
                        {data.map((jobPost, index) => {
                            return <JobPost key={index} jobPost={jobPost} />;
                        })}
                    </div>
                    {fetchingData ? (
                        <div className="ring-loading">
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    ) : null}
                    <div className="end">
                        {fetchMore && !fetchingData ? (
                            <div className="button" onClick={fetchNextData}>
                                Load More
                            </div>
                        ) : null}
                        {!fetchMore && !fetchingData ? (
                            <div className="end">
                                <div className="end-logo">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </div>
                                <div className="end-desc">
                                    You are all caught up!
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
};

export default Careers;
