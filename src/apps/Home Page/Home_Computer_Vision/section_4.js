import React, { Component } from "react";
import cv_clients_analysis from "../../../assets/images/cv_clients_analysis.jpg"
import cv_clients_human_robot from "../../../assets/images/cv_clients_human_robot.jpg"
import cv_clients_kroger from "../../../assets/images/cv_clients_kroger.jpg"
import cv_clients_life from "../../../assets/images/cv_clients_life.jpg"
import cv_clients_success_retail from "../../../assets/images/cv_clients_success_retail.jpg"
import cv_clients_success_retail_2 from "../../../assets/images/cv_clients_success_retail_2.jpg"

class Section4 extends Component{
    render(){
        return(
            <div>
                {/* after md */}
                <div className="py-16 w-screen md:block hidden -ml-20">
                    <div className="flex">
                        {/* heading */}
                        <div className="w-1/2 px-32 flex-shrink-0 space-y-6 flex flex-col justify-center items-center">
                            <p className="text-blue-900 text-4xl font-semibold text-left w-full">Client's success stories</p>
                            <p className="text-gray-500 text-left">Are you looking for ways to increase conversions but having a hard time turning visits into sales?</p>

                            <div className="w-full flex items-start justify-start">
                                <a href="schedule-a-call" className="p-2 px-10  text-left rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800 text-white font-semibold">Schedule a call</a>
                            </div>
                        </div>

                        {/* imgs */}
                        <div className="w-1/2 flex-shrink-0 flex">
                            <img className="w-1/2 h-98" alt="cv_clients_success_retail" src={cv_clients_success_retail} />
                            <img className="w-1/2 h-98" alt="cv_clients_human_robot" src={cv_clients_human_robot} />
                        </div>
                    </div>

                    <div className="w-full flex-shrink-0 flex">
                        <img className="w-1/4 h-98" alt="cv_clients_kroger" src={cv_clients_kroger} />
                        <img className="w-1/4 h-98" alt="cv_clients_analysis" src={cv_clients_analysis} />
                        <img className="w-1/4 h-98" alt="cv_clients_life" src={cv_clients_life} />
                        <img className="w-1/4 h-98" alt="cv_clients_success_retail_2" src={cv_clients_success_retail_2} />
                    </div>
                </div>

                {/* under md */}
                <div className="py-16 w-screen md:hidden  md:-ml-20 -ml-5">
                    <div className="md:flex space-y-5 md:space-y-0">
                        {/* heading */}
                        <div className="md:w-1/2 md:px-32 flex-shrink-0 space-y-6 px-5 flex flex-col justify-center items-center">
                            <p className="text-blue-900 text-4xl font-semibold text-left w-full">Client's success stories</p>
                            <p className="text-gray-500 text-left">Are you looking for ways to increase conversions but having a hard time turning visits into sales?</p>

                            <div className="w-full flex items-start justify-start">
                                <a href="schedule-a-call" className="p-2 px-10  text-left rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800 text-white font-semibold">Schedule a call</a>
                            </div>
                        </div>

                        {/* imgs */}
                        <div className="md:w-1/2 flex-shrink-0 flex">
                            <img className="w-1/2 md:h-98" alt="cv_clients_success_retail" src={cv_clients_success_retail} />
                            <img className="w-1/2 md:h-98" alt="cv_clients_human_robot" src={cv_clients_human_robot} />
                        </div>
                    </div>

                    <div className="w-full flex-shrink-0 flex">
                        <img className="w-1/4 md:h-98" alt="cv_clients_kroger" src={cv_clients_kroger} />
                        <img className="w-1/4 md:h-98" alt="cv_clients_analysis" src={cv_clients_analysis} />
                        <img className="w-1/4 md:h-98" alt="cv_clients_life" src={cv_clients_life} />
                        <img className="w-1/4 md:h-98" alt="cv_clients_success_retail_2" src={cv_clients_success_retail_2} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section4