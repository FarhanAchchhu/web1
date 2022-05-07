import React, { Component } from "react";
import cv_banner_img from "../../../assets/images/cv_banner_img_1.png"
import cv_banner_img_2 from "../../../assets/images/cv_banner_img_2.png"
import cv_banner_img_3 from "../../../assets/images/cv_banner_img_3.png"

class BannersSection extends Component{
    render(){
        return(
            <div className="">

                {/* after md */}
                <div className="hidden bg-black md:flex">
                    <div className="flex-grow flex-shrink-0 relative w-1/2 p-20 pt-32">
                        <img  alt="cv_banner_img" src={cv_banner_img_2} className="w-4/5" />
                        <div className="space-y-10 absolute top-32">
                            <p className="text-4xl font-semibold tracking-wide text-gray-300">Advanced AI Software powered by computer vision for real-time face analysis</p>
                            <p className="text-sm text-gray-200">The problems that your business encounters don't change very often.</p>
                            <p className="text-sm text-gray-200">The way you can solve those problems just has, with U-Samrt.ai.</p>
                            <div className="space-x-4">
                                <button className="flex-grow-0 p-2 px-5 text-sm font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-rose-700">Get an API Key</button>
                            </div>
                            
                            <div className="flex space-x-5">
                                {/* {contact_us_section} */}
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow-0 flex-shrink-0 w-1/2 relative">
                        <img  alt="cv_banner_img" src={cv_banner_img_3} className="absolute top-0 right-0 z-10" />
                        <img  alt="cv_banner_img" src={cv_banner_img} className="w-full" />
                    </div>
                </div>

                {/* under md */}
                <div className="md:hidden">
                    <div className="flex-grow-0 flex-shrink-0 w-full">
                        <img  alt="cv_banner_img" src={cv_banner_img} className="" />
                    </div>

                    <div className="w-full p-4 space-y-4">
                        <p className="text-2xl font-semibold tracking-wide text-gray-700">Advanced AI Software powered by computer vision for real-time face analysis</p>
                        <p className="text-xs text-gray-500">The problems that your business encounters don't change very often.</p>
                        <p className="text-xs text-gray-500">The way you can solve those problems just has, with U-Samrt.ai.</p>
                        <div className="space-x-4">
                            <button className="w-full p-2 px-5 text-sm font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-rose-700">Get an API Key</button>
                        </div>
                        
                        <div className="flex space-x-5">
                            {/* {contact_us_section} */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannersSection