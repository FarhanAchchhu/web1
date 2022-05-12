import React, { Component } from "react";
import data_sciences_banner_bg from "../../../assets/images/data-sciences-banner-bg.svg"
import play_button from "../../../assets/icons/play-button.png"
import data_science_img_3 from "../../../assets/images/data-science-img-3.jpg"
class BannersSection extends Component{
    render(){
        return(
            <div className="relative -z-10">
                <img alt="data_sciences_banner_bg" src={data_sciences_banner_bg} className="absolute top-0 w-full left-0 " />
                <div className=" overflow-hidden md:p-10 w-full md:flex">
                    <div className="p-8 space-y-10 md:w-1/2">
                        <p className="md:text-6xl text-4xl  text-blue-900 font-semibold">Turn Data Into Insight Data Intelligence for Smart Decisions</p>
                        <img alt="data_science_img_2" src={data_science_img_3} className="md:hidden" />
                        <p className="text-md text-gray-500">Whether it is to get an insight into who and where your customers are, or how to target more of them - data is at the core of your business decision making.</p>
                        

                        <div className="md:space-x-3 space-y-3 md:space-y-0 md:flex w-full">
                            <button className="bg-gradient-to-r float-left md:float-none from-purple-600 to-rose-600 text-white font-semibold text-lg p-2 px-5 rounded-full">Lets Get Started!</button>
                            <button className="flex p-2 px-5 float-right md:float-none space-x-2 transition-all duration-300 rounded-full bg-gradient-to-r hover:shadow-md">
                                <img alt="video_play_button" src={play_button} className="w-8 h-8" />
                                <a href="intro_vid" className="text-center text-lg tracking-wider font-semibold text-green-600 mt-0.5">See video intro!</a>
                            </button>
                        </div>
                    </div>

                    <img alt="data_science_img_2" src={data_science_img_3} className="w-1/2 hidden md:block" />
                </div>
            </div>
        )
    }
}

export default BannersSection