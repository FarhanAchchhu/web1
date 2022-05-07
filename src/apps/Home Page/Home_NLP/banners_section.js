import React, { Component } from "react";
import nlp_banner from "../../../assets/images/nlp_banner_img.jpg"
class BannersSection extends Component{
    render(){
        return(
            <div className="">

                {/* after md */}
                <div className="md:flex md:p-10 p-3">

                    <img alt="nlp_banner_img" src={nlp_banner} className="md:hidden" />

                    <div className="flex-grow-0 flex-shrink-0 md:w-1/2 text-center md:text-left space-y-5 md:space-y-10 md:px-20">
                        <p className="text-4xl font-semibold tracking-wide text-gray-700">Turn your document into data with AI</p>
                        <p className="text-sm text-gray-500">Use U-Smart.ai to extract your data from diverse documents quickly and accurately.</p>
                        <p className="text-sm text-gray-500">Equip yourself with the answres you need to meet your most critical business challenges.</p>
                        <div className="md:space-x-4 md:flex space-y-3 md:space-y-0 ">
                            <button className="flex-grow-0 p-2 px-5 text-sm font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-rose-700">Find out more</button>
                            <button className="flex-grow-0 p-2 px-5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-800 rounded-full shadow-md">Speak with us</button>
                        </div>
                        
                        <div className="flex space-x-5">
                            {/* {contact_us_section} */}
                        </div>
                    </div>

                    <img alt="nlp_banner_img" src={nlp_banner} className="w-1/2 md:block hidden" />
                </div>
            </div>
        )
    }
}

export default BannersSection