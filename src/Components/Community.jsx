import React, { Component } from "react";
import TopBarSection from "../apps/Home Page/layout/topbar";
import ml_banner_bg_svg_1 from "../assets/images/ml_banner_bg.svg";
import ml_banner_bg_svg_2 from "../assets/images/ml_banner_bg_2.svg";
import ml_banner_img from "../assets/images/community2.png";

// import ml_banner_bg_svg_2 from "../../../assets/images/ml_banner_bg_2.svg";

class BannersSection extends Component {
  render() {
    return (
      <>
        <div>
          <TopBarSection></TopBarSection>

          {/* after md */}
          <div className=" bg-transparent w-full relative -z-10">
            {/* <p className="text-md text-gray-700">
                            We create everything that your enterprise needs from
                            training data to working <br /> with unstructured   
                            text, images and videos for machine learning. <br />
                            <br />
                            U-SMART.AI is a data driven consulting and product
                            development company that empowers processes and
                            decision making through human centric AI.
                        </p> */}
            <div className="space-x-4">
              {/* <button className="p-2 px-5 text-sm text-gray-700 rounded-full border-gray-800 bg-white border-2 shadow-md font-semibold flex-grow-0">How it Works?</button> */}
            </div>
          </div>
          <div>
            <div className="bgbanner w-full absolute right-0 flex justify-end items-end -z-50 flex-col">
              {" "}
              <img
                alt="ml_banner_bg_svg_1"
                src={ml_banner_bg_svg_2}
                className=" w-11/12 "
              />
            </div>
          </div>

          <div className="info">
            <div className="infocontainer">
              <p className="text-4xl  text-blue-900 tracking-wide font-semibold">
                U-smart.ai's
              </p>
              <br />
              <p className="text-2xl text-gray-700 font-semibold">
                SMART ENTREPRENEUR PROGRAMME
              </p>
              <br />
              <p className="text-md text-gray-700">
                6-month curated Campus Ambassador Internship program that will
                <br />
                prepare you for your successful corporate journey ahead. <br />
                with unstructured text, images and videos for machine learning.
                <br />
                <br />
                U-SMART.AI is a data driven consulting and product development
                company that <br /> empowers processes and decision making
                through human centric AI.
              </p>
              <br />
              <button className="p-2 px-5 text-sm text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-green-700 font-semibold flex-grow-0">
                Apply Now
              </button>
            </div>
            <div>
              {" "}
              <img
                alt="ml_banner_img"
                src={ml_banner_img}
                className="lazy absolute top-20 right-10 w-100"
              />
            </div>
          </div>

          {/* Second Section  */}
          <div className="secondcontent">
            <div className="secondcontentbg overflow-hidden">
              <img
                // style={{transform:"rotate(90deg)"}}
                alt="svg_bg"
                src={ml_banner_bg_svg_2}
                className="w-11/12  transform rotate-180 left-0 hidden md:block absolute top-0"
              />

              <div className="joindiv">
                <p className="text-4xl  text-blue-900 tracking-wide font-semibold">
                  Join U-Smart.ai's Tech Community!
                </p>
                <ul>
                  <li>Amplify your social impact.</li>
                  <li>
                    Bring together your peers to aid learning and <br />{" "}
                    assimilation of new skills.
                  </li>
                  <li>
                    Be a part of the largest tech community today and <br />
                    stand out from the crowd.
                  </li>
                  <li>
                    Get Rewarded with the prestigious Campus
                    <br /> Ambassador Certificate.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third section  */}
          <div className="thirdsection">
            <div>
              {" "}
              <img
                // style={{transform:"rotate(90deg)"}}
                alt="svg_bg"
                src={ml_banner_bg_svg_2}
                className="w-11/12  transform rotate-y-180 w-120 left-0 hidden md:block absolute"
              />
            </div>
            <h1>Process To Follow</h1>
          </div>
        </div>
      </>
    );
  }
}

export default BannersSection;
