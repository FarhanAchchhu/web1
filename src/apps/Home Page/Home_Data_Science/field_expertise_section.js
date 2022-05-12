import React, { Component, useState } from "react";
import nlp_img_system from "../../../assets/images/nlp-img-system.jpg"

function FieldExpertiseSection(){

    var Section_1 = (
        <div className="p-6 space-y-4">
            <p className="text-gray-500 font-medium">Enter the age of data. We empo wer our clients with valuable insights by offering design and implementation of predictive analytics algorithms and build platforms that deliver recommendation engines, fraud detection, BI tools and other data-driven insights.</p>

            <div className="md:flex justify-between space-y-5 md:space-y-0 md:p-6 py-6">
                <div className="space-y-5 md:w-1/2">
                    <p className="text-blue-900 font-medium text-lg">Types of projects</p>
                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-lg">✓</span> Image processing and pattern recognition</p>
                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-lg">✓</span> Natural learning processing</p>
                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-lg">✓</span> Behavior analytics and Personalization</p>
                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-lg">✓</span> Anomaly Detection</p>
                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-lg">✓</span> Insight Report</p>
                </div>

                <div className="md:w-1/2 space-y-5 md:p-6 py-6">
                    <p className="text-blue-900 font-medium text-lg">Our Process</p>
                    <p className="text-gray-500">We like to take a phased approach where real value and actionable items delivered to client from each phase allow for better progress tracking, more maneuverability during project execution and, most importantly, the feedback loop that ensures the final</p>
                    <p className="text-green-500 font-medium">Check out our data science process</p>
                </div>
            </div>
        </div>
    )

    var Section_2 = <img alt="nlp_img_system" src={nlp_img_system} className="p-10 w-full" />
    
    var Section_3 = <img alt="nlp_img_system" src={nlp_img_system} className="p-10 w-full" />

    var [display_section, setDisplaySection] = useState(Section_1)

    return(
        <div className="md:p-20 space-y-5 pt-10">
            <div className="space-y-5 md:px-16">
                <p className="text-4xl font-semibold text-center text-blue-900">Our Expertise</p>
                <p className="text-center text-gray-500">There is also no universal best practice as you will want to change your approach depending on the purpose of the bot, the target audience it will be communicating with and the overall approach of your brand.</p>
            </div>

            <div className="flex mx-auto max-w-max">
                <button onClick={()=>{setDisplaySection(Section_1)}} className="p-5 md:px-8 text-lg font-semibold text-gray-800 border-b-2 border-rose-600">Syntax</button>
                <button onClick={()=>{setDisplaySection(Section_2)}} className="p-5 md:px-8 text-lg font-semibold text-gray-800 border-b-0 border-rose-600">Semantics</button>
                <button onClick={()=>{setDisplaySection(Section_3)}} className="p-5 md:px-8 text-lg font-semibold text-gray-800 border-b-0 border-rose-600">System</button>
            </div>

            {display_section}
        </div>
    )
}
export default FieldExpertiseSection