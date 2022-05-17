import React, { Component } from "react";
import ml_banner_bg_svg_1 from "../../../assets/images/ml_banner_bg.svg";
import ml_banner_bg_svg_2 from "../../../assets/images/ml_banner_bg_2.svg";
import ml_banner_img from "../../../assets/images/ml_banner_img.png";

class BannersSection extends Component {
    render() {
        return (
            <div className="">
                {/* after md */}
                <div className=" bg-transparent w-full relative -z-10">
                    <div className="md:w-1/2 p-5 md:p-15 md:py-40 pt-40  space-y-10 z-40">
                        <p className="text-4xl text-gray-700 tracking-wide font-semibold">
                            AI & Machine Learning <br />
                            Products Creators
                        </p>
                        <p className="text-md text-gray-700">
                            We create everything that your enterprise needs from
                            training data to working <br /> with unstructured   
                            text, images and videos for machine learning. <br />
                            <br />
                            U-SMART.AI is a data driven consulting and product
                            development company that empowers processes and
                            decision making through human centric AI.
                        </p>
                        {/* <div className="space-x-4">
                            <button className="p-2 px-5 text-sm text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-green-700 font-semibold flex-grow-0">Sign Up Free</button>
                            <button className="p-2 px-5 text-sm text-gray-700 rounded-full border-gray-800 bg-white border-2 shadow-md font-semibold flex-grow-0">How it Works?</button>
                        </div> */}
                    </div>
                    <div className="w-full absolute -top-20 right-0 flex flex-col justify-end items-end -z-50">
                        <img
                            alt="ml_banner_bg_svg_1"
                            src={ml_banner_bg_svg_2}
                            className="w-11/12 "
                        />
                        <img
                            alt="ml_banner_bg_svg_1"
                            src={ml_banner_bg_svg_1}
                            className="w-3/4 absolute top-0 right-0"
                        />
                        <img
                            alt="ml_banner_img"
                            src={ml_banner_img}
                            className="w-1/2 absolute top-20 right-6"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BannersSection;
