import React from "react";
import cv_serving_API from "../../../assets/images/cv_serving_API.jpg"
import cv_social_media from "../../../assets/images/cv_social_media.jpg"
import cv_research from "../../../assets/images/cv_research.jpg"
import cv_pharma from "../../../assets/images/cv_pharma.jpg"
import cv_robotic from "../../../assets/images/cv_robotic.jpg"
import { useState } from "react";

function ExpertiseFeildsSection(props){

    var seo = (
        <div className="w-full md:space-x-8 space-y-8 md:space-y-0 md:flex">
            <img alt="gen_more_leads" src={cv_serving_API} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />

            <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                <p className="w-full text-4xl font-semibold tracking-wide text-left text-gray-700">Customer Experience on Social Media</p>
                
                {/* under md */}
                <img alt="gen_more_leads" src={cv_serving_API} className="block md:hidden"  />
                
                <p className="text-sm text-gray-500">It is a goldmine of opportunities for businesses looking to strengthen their relationships with their audience throughout their journey in the power shift to customers.</p>

                <ul className="text-sm text-gray-500 -ml-20 md:-ml-48 list-disc">
                    <li>Improving Business Analytics</li>
                    <li>Customized AI solutions</li>
                    <li>Best in class solutions</li>
                </ul>
                
                <div className="md:mx-auto md:space-y-8 space-y-4 md:w-full flex flex-col justify-start items-start">
                    <button className="p-2 px-3 w-full md:w-auto rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                        <p className="text-sm font-semibold tracking-wider text-center text-white">More about us</p>
                    </button>

                    <button className="font-medium text-green-600">See how to integrates<span className="p-1">➔</span></button>
                </div>
            </div>
        </div>
    )

    var social_media = (
        <div className="w-full space-x-8 md:flex ">
            <img alt="gen_more_leads" src={cv_social_media} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />

            <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                <p className="w-full text-4xl font-semibold tracking-wide text-left text-gray-700">Customer Experience on Social Media</p>
                
                {/* under md */}
                <img alt="gen_more_leads" src={cv_social_media} className="flex-grow-0 flex-shrink-0 block md:hidden"  />
                
                <p className="text-sm text-gray-500">It is a goldmine of opportunities for businesses looking to strengthen their relationships with their audience throughout their journey in the power shift to customers.</p>

                <ul className="text-sm text-gray-500">
                    <li>Improving Business Analytics</li>
                    <li>Customized AI solutions</li>
                    <li>Best in class solutions</li>
                </ul>

                <div className="md:mx-auto space-y-8 md:w-full flex flex-col justify-start items-start">
                    <button className="p-2 px-3 rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                        <p className="text-sm font-semibold tracking-wider text-center text-white">Learn More</p>
                    </button>
                </div>
            </div>
        </div>
    )

    var research = (
        <div className="w-full space-x-8 md:flex ">
            <img alt="gen_more_leads" src={cv_research} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />

            <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                <p className="w-full text-4xl font-semibold tracking-wide text-left text-gray-700">Types of experimental research</p>
                
                {/* under md */}
                <img alt="gen_more_leads" src={cv_research} className="flex-grow-0 flex-shrink-0 block md:hidden"  />
                
                <p className="text-sm text-gray-500">The classic experimental design definition is, “The methods used to collect data in experimental studies.” There are three primary types of experimental design:</p>

                <ul className="text-sm text-gray-500">
                    <li>Pre-experimental research design</li>
                    <li>True experimental research design</li>
                    <li>Quasi-experimental research design</li>
                </ul>

                <div className="md:mx-auto space-y-8 md:w-full flex flex-col justify-start items-start">
                    <button className="p-2 px-3 rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                        <p className="text-sm font-semibold tracking-wider text-center text-white">Learn More</p>
                    </button>
                </div>
            </div>
        </div>
    )

    var pharma = (
        <div className="w-full space-x-8 md:flex ">
            <img alt="gen_more_leads" src={cv_pharma} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />

            <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                <p className="w-full text-4xl font-semibold tracking-wide text-left text-gray-700">Exp Pharmaceutical Services Corp</p>
                
                {/* under md */}
                <img alt="gen_more_leads" src={cv_pharma} className="flex-grow-0 flex-shrink-0 block md:hidden"  />
                
                <p className="text-sm text-gray-500">EXP Pharmaceutical Services Corp. provides pharmaceutical reverse distribution services. The Company offers expired pharmaceutical product returns processing, waste disposal.</p>

                <ul className="text-sm text-gray-500">
                    <li>Improving Business Analytics</li>
                    <li>Customized AI solutions</li>
                    <li>Best in class solutions</li>
                </ul>

                <div className="md:mx-auto space-y-8 md:w-full flex flex-col justify-start items-start">
                    <button className="p-2 px-3 rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                        <p className="text-sm font-semibold tracking-wider text-center text-white">Learn More</p>
                    </button>
                </div>
            </div>
        </div>
    )

    var robotics = (
        <div className="w-full space-x-8 md:flex ">
            <img alt="gen_more_leads" src={cv_robotic} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />

            <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                <p className="w-full text-4xl font-semibold tracking-wide text-left text-gray-700">Boston’s Robotics Revolution AI Lab</p>
                
                {/* under md */}
                <img alt="gen_more_leads" src={cv_robotic} className="flex-grow-0 flex-shrink-0 block md:hidden"  />
                
                <p className="text-sm text-gray-500">Our expert panel of robotics practitioners will educate you on the state of the technology and what the future holds. The MIT Cheetah is an example of what will be discussed.</p>

                <ul className="text-sm text-gray-500">
                    <li>Improving Business Analytics</li>
                    <li>Customized AI solutions</li>
                    <li>Best in class solutions</li>
                </ul>

                <div className="md:mx-auto space-y-8 md:w-full flex flex-col justify-start items-start">
                    <button className="p-2 px-3 rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                        <p className="text-sm font-semibold tracking-wider text-center text-white">Learn More</p>
                    </button>
                </div>
            </div>
        </div>  
    )
    var [display_section, setDisplaySection] = useState(seo)
    return(
        <div className="space-y-5">
            <div className="md:space-x-6 max-w-max mx-auto flex flex-wrap md:flex-nowrap justify-center item:center">
                <button onClick={()=>{setDisplaySection(seo)}} className="rounded-xl bg-blue-900 text-white font-semibold p-3 m-1 px-5 md:px-10">SEO</button>
                <button onClick={()=>{setDisplaySection(social_media)}} className="rounded-xl bg-blue-100 text-blue-900 font-semibold p-3 m-1 px-5 md:px-10">Social Media</button>
                <button onClick={()=>{setDisplaySection(research)}} className="rounded-xl bg-blue-100 text-blue-900 font-semibold p-3 m-1 px-5 md:px-10">Research</button>
                <button onClick={()=>{setDisplaySection(pharma)}} className="rounded-xl bg-blue-100 text-blue-900 font-semibold p-3 m-1 px-5 md:px-10">Pharma</button>
                <button onClick={()=>{setDisplaySection(robotics)}} className="rounded-xl bg-blue-100 text-blue-900 font-semibold p-3 m-1 px-5 md:px-10">Robotic</button>
            </div>
            {display_section}
        </div>
    )
}

export default ExpertiseFeildsSection