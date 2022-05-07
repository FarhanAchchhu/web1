import React, { Component, useState } from "react";
import artificial_intelligence_NLP_system from "../../../assets/images/artificial_intelligence_NLP_system.png"
import artificial_intelligence_NLP_syntax from "../../../assets/images/artificial_intelligence_NLP_syntax.png"
import artificial_intelligence_NLP_semantics from "../../../assets/images/artificial_intelligence_NLP_semantics.png"

function NLPWroksSection(){

    var syntax_section = (
        <div className="space-y-5">
            <p className="text-xl font-semibold text-gray-100 ">Serving businesses by implementing AI</p>
            <p className="font-medium text-gray-300 ">Whatever your business nature, ordinary or difficult,we will be happy to serve you. Tell us your business plan and get assistance from our experts for Machine Learning Services and Artificial Intelligence Consulting.</p>

            <ul className="list-disc text-gray-300 space-y-3 ml-4">
                <li>Improving Business Analytics</li>
                <li>Customized AI solutions</li>
                <li>Best in class solutions</li>
            </ul>
        </div>
    )

    var [displaySection, setDisplaySection] = useState(syntax_section)
    var [displaySectionImg, setDisplaySectionImg] = useState(artificial_intelligence_NLP_syntax)

    return(
        <div className=" bg-blue-900 w-screen -ml-5 md:-ml-20 space-y-10 md:p-10 p-5">
             <p className="text-white text-4xl text-center font-semibold mx-auto md:w-1/2">How NLP works?</p>
             <p className="text-gray-300 text-center md:w-1/2 mx-auto">NLP entails applying algorithms to identify and extract the natural language rules such that the unstructured language data is converted into a form that computers can understand.</p>
             
             <div className="flex">
                 <img alt="" src={displaySectionImg} className="w-1/2 hidden md:block" />
                 
                 <div className="space-y-10 p-1">
                        <div className="flex mx-auto max-w-max">
                            <button onClick={()=>{setDisplaySection(syntax_section); setDisplaySectionImg(artificial_intelligence_NLP_syntax)}} className="p-5 md:px-8 text-lg font-semibold text-gray-100 border-b-2 border-rose-600">Syntax</button>
                            <button onClick={()=>{setDisplaySection(syntax_section); setDisplaySectionImg(artificial_intelligence_NLP_semantics)}} className="p-5 md:px-8 text-lg font-semibold text-gray-100 border-b-2 border-rose-600">Semantics</button>
                            <button onClick={()=>{setDisplaySection(syntax_section); setDisplaySectionImg(artificial_intelligence_NLP_system)}} className="p-5 md:px-8 text-lg font-semibold text-gray-100 border-b-2 border-rose-600">System</button>
                        </div>

                        {displaySection}
                 </div>
             </div>
        </div>
    )
}

export default NLPWroksSection