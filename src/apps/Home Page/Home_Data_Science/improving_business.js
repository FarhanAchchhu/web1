import React, { Component } from "react";
import data_sciences_section_5_sign_arrow from "../../../assets/images/data_sciences_section_5_sign_arrow.png"
import data_science_section_5_svg_1 from "../../../assets/images/data-science-section-5-svg_1.svg"
class ImprovingBusiness extends Component{
    render(){
        return(
            <div className="py-24 space-y-16 px-5 bg-sky-100 w-screen -ml-5 md:-ml-20">
                <div className="space-y-2">
                    <p className="text-4xl text-blue-900 font-semibold text-center">How We Take Your Business</p>
                    <p className="text-4xl text-blue-900 font-semibold text-center">From Good To Great</p>
                </div>

                {/* under md */}
                <div className="md:hidden w-full space-y-3 ">
                    
                    <div className="space-y-3 h-40">
                        <p className="text-xl font-semibold text-gray-800 text-center">We Analyze your Data Needs</p>
                        <p className="text-gray-500 text-center text-sm">We work with your team to identify key problems and bottlenecks that are negatively effecting your business.</p>
                    </div>

                    <div className="h-40 max-w-max mx-auto">
                        <img alt="data_sciences_section_5_sign_arrow" className="h-14 w-60 mt-10 rotate-90 transform md:rotate-0" src={data_sciences_section_5_sign_arrow} />
                    </div>

                    <div className="space-y-3 h-40 ">
                        <p className="text-xl font-semibold text-gray-800 text-center">Develop a Customized Plan</p>
                        <p className="text-gray-500 text-center text-sm">We work with your team to identify key problems and bottlenecks that are negatively effecting your business.</p>
                    </div>
                    
                    <div className="h-40 max-w-max mx-auto ">
                        <img alt="data_sciences_section_5_sign_arrow" className="h-14 w-60 mt-10 rotate-90 transform md:rotate-0" src={data_sciences_section_5_sign_arrow} />
                    </div>
                    
                    <div className="space-y-3 ">
                        <p className="text-xl font-semibold text-gray-800 text-center">Implement your Solution</p>
                        <p className="text-gray-500 text-center text-sm">Take your business to the next level by implementing the customized plan we develop with your team.</p>
                    </div>
                </div>

                {/* after md */}
                <div className="justify-between md:flex hidden w-full space-x-5">
                            
                    <div className="w-1/4 space-y-3">
                        {/* <div>
                            <img alt="data_science_section_5_svg_1" src={data_science_section_5_svg_1} className="w-14" />
                        </div> */}

                        <p className="text-xl font-semibold text-gray-800 text-center">We Analyze your Data Needs</p>
                        <p className="text-gray-500 text-center text-sm">We work with your team to identify key problems and bottlenecks that are negatively effecting your business.</p>
                    </div>

                    <img alt="data_sciences_section_5_sign_arrow" className="h-14 w-60 mt-10" src={data_sciences_section_5_sign_arrow} />

                    <div className="w-1/4 space-y-3">
                        <p className="text-xl font-semibold text-gray-800 text-center">Develop a Customized Plan</p>
                        <p className="text-gray-500 text-center text-sm">We work with your team to identify key problems and bottlenecks that are negatively effecting your business.</p>
                    </div>

                    <img alt="data_sciences_section_5_sign_arrow" className="h-14 w-60 mt-10" src={data_sciences_section_5_sign_arrow} />
                    
                    <div className="w-1/4 space-y-3">
                        <p className="text-xl font-semibold text-gray-800 text-center">Implement your Solution</p>
                        <p className="text-gray-500 text-center text-sm">Take your business to the next level by implementing the customized plan we develop with your team.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImprovingBusiness