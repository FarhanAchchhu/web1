import React, { Component } from "react";
import health_care_banner from "../../../assets/images/AI-healthcare-banner-01.png"
class BannersSection extends Component{
    render(){
        return(
            <div style={{backgroundColor: "#01071c"}} className=" md:flex">
                <div className="flex felx-col justify-center md:w-1/2 items-center md:p-24 p-5">

                    <div className="space-y-5">
                        <p className="text-white font-semibold text-4xl ">Faster Diagnosis, Better Treatment Outcomes.</p>
                        <img alt="health_care_banner" src={health_care_banner} className="md:hidden" />
                        <p className="text-white ">U-Samrt.ai combines the power of accelerated computing, AI, and machine learning to supercharge the entire drug development process, unlocking the potential to bring life-saving drugs to maket faster.</p>

                        <div className="space-x-4 max-w-max mx-auto md:w-auto md:mx-0">
                            <button className="p-2 px-5 text-sm text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-green-700 font-semibold flex-grow-0">Sign Up Free</button>
                            <button className="p-2 px-5 text-sm text-gray-700 rounded-full border-gray-800 bg-white border-2 shadow-md font-semibold flex-grow-0">How it Works?</button>
                        </div>
                    </div>

                </div>

                <img alt="health_care_banner" src={health_care_banner} className="w-1/2 hidden md:block" />
            </div>
        )
    }
}

export default BannersSection