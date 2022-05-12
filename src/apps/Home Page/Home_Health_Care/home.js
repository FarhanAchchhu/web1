import React, { Component } from "react";
import TopBarSection from "../layout/topbar";
import BannersSection from "./banners_section";
import heath_care_sec_2_diagnostics_sys from "../../../assets/images/heath_care_sec_2_diagnostics_sys.jpg"
import health_care_sec_2_bg from "../../../assets/images/health_care_sec_2_bg.jpg"
import health_care_sec_2_card__svg_1 from "../../../assets/images/health_care_sec_2_card__svg_1.svg"
import health_care_sec_2_card__svg_2 from "../../../assets/images/health_care_sec_2_card__svg_2.svg"
import health_care_sec_2_card__svg_3 from "../../../assets/images/health_care_sec_2_card__svg_3.svg"
import profile_CEO from "../../../assets/images/profile_CEO.png"
import CaseStudySection from "../Home_Machine_Learning/case_studies_section";
import health_care_sec_6_img from "../../../assets/images/health_care_sec_6_img.png"
import BlogsSection from "../Home_Computer_Vision/blogs_section";
import FooterSection from "../layout/footer/footer";
class HomePageHealthcare extends Component{
    render(){

        var what_AI_list = [
            {
                img_path: health_care_sec_2_card__svg_1,
                title: "Improve data protection and minimize paperwork",
                content: "Most security disasters in the healthcare industry are caused first by human error and misuse and physical theft and hacking second. Electronic Health Records or EHRs not only structure patient information but also allow for safe access and more personalized care."
            },

            {
                img_path: health_care_sec_2_card__svg_2,
                title: "Increase diagnostics accuracy",
                content: "In the US alone, over 12 million patients are misdiagnosed annually. Deep learning applied to healthcare can radically improve that statistic: Instead of following a routine checklist, healthcare professionals can benefit from the informative by-product of algorithms that can read data using computer vision,"
            },

            {
                img_path: health_care_sec_2_card__svg_3,
                title: "Boost clinical performance",
                content: "Running any medical facility is a complex, multi-faceted undertaking rife with the possibility of making unfortunate decisions. The obvious, well-documented risk level is high. Data-driven software provides clinicians with the opportunity to make better sense of their data – schedule more efficiently, create"
            },
        ]

        var what_AI_section = what_AI_list.map((card, index)=>{
            return(
                <div key={index} className = "bg-white md:p-10 p-5 w-full md:flex md:space-x-3 space-y-6 md:space-y-0">
                    <img alt={card.img_path} src={card.img_path} className="md:w-24 md:h-24" />
                    <div className="space-y-5">
                        <p className="text-gray-800 text-center md:text-left font-semibold text-lg">{card.title}</p>
                        <p className="text-gray-500 font-medium text-center md:text-left">{card.content}</p>
                    </div>
                </div>
            )
        })

        return(
            <div className="overflow-hidden">
                <TopBarSection></TopBarSection>

                <BannersSection></BannersSection>

                <div className="md:px-20 px-5 pt-20">
                    {/* section 2 */}
                    <div className="md:flex md:space-x-20 space-y-10 md:space-y-0 py-10 ">
                        <img alt="heath_care_sec_2_diagnostics_sys" src={heath_care_sec_2_diagnostics_sys} className="md:w-1/2" />

                        <div className="flex  flex-col justify-center items-center">
                            <div className="space-y-5">
                                <p className="text-4xl text-gray-800 font-semibold">Diagnostic system from medical imaging</p>
                                <p className=" text-gray-500 font-medium">To meet the growing demand for care, medical technology leaders are turning to AI tools that can help radiation oncologists provide high-quality, individualized treatment faster.</p>

                                <ul className="text-gray-800 list-disc ml-6 font-medium">
                                    <li>Augmenting Radiation Therapy Workflows</li>
                                    <li>Augmenting Radiation Therapy Workflows</li>
                                    <li>Augmenting Radiation Therapy Workflows</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* section 3 */}
                    <div style={{backgroundColor: "#eef3f7"}} className="p-10 w-screen space-y-14 md:-ml-20 -ml-5 ">

                        <p className="text-gray-900 text-4xl md:w-1/2 mx-auto text-center font-semibold">What AI can do with unstructured data in healthcare</p>
                        
                        <img alt="health_care_sec_2_bg" src={health_care_sec_2_bg} className="md:hidden " />
                        
                        <div className="md:flex">
                            <div className="space-y-5 md:w-1/2">
                                {what_AI_section}
                            </div>
                            <div className="w-1/2 p-5 hidden  md:flex justify-center items-center">
                                <img alt="health_care_sec_2_bg" src={health_care_sec_2_bg} className="" />
                            </div>
                        </div>
                    </div>

                    {/* section - 3 */}
                    <div className="md:flex py-10">
                        <div className="space-y-8 md:w-1/2 md:p-10">
                            <p className="text-4xl text-gray-900 font-semibold">Forecasting system on pharmacological reactions</p>
                            <p className="text-gray-500">Adverse drug reactions (ADRs) are an important concern in the medication process and can pose a substantial economic burden for patients and hospitals. Because of the limitations of clinical trials, it is difficult to identify all possible ADRs of a drug before it is marketed. We developed a new model based on data mining technology to predict potential ADRs based on available drug data.</p>

                            <div className="grid grid-cols-2 border-b-2 border-dashed py-6 border-gray-200">
                                <div>
                                    <div className="flex space-x-3 p-3">
                                        <p className="text-lg font-semibold text-green-600 ">✓</p>
                                        <p className="font-medium tracking-wide text-gray-800">Databases and KG construction</p>
                                    </div>

                                    <div className="flex space-x-3 p-3">
                                        <p className="text-lg font-semibold text-green-600 ">✓</p>
                                        <p className="font-medium tracking-wide text-gray-800">Prediction model</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex space-x-3 p-3">
                                        <p className="text-lg font-semibold text-green-600 ">✓</p>
                                        <p className="font-medium tracking-wide text-gray-800">KG embedding</p>
                                    </div>

                                    <div className="flex space-x-3 p-3">
                                        <p className="text-lg font-semibold text-green-600 ">✓</p>
                                        <p className="font-medium tracking-wide text-gray-800">Model evaluation</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-gray-500 italic text-center md:text-left">“I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.”</p>

                            <div className="flex space-x-4  max-w-max mx-auto md:mx-0 md:w-auto">
                                <img alt="profile_img" src={profile_CEO} className="rounded-full w-20 h-20 " />

                                <div className="mt-3">
                                    <p className="text-lg font-semibold text-gray-800">Jeff Homann</p>
                                    <p className="font-semibold text-gray-500">AI Lab Founder and CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* section - 4 => works done */}
                    {/* <div className="py-10">
                        <CaseStudySection></CaseStudySection>
                    </div> */}

                    {/* section - 5 => why AI lab? */}

                    {/* section - 6 => optimisation */}
                    <div className="md:flex md:space-x-20 md:p-10 py-20 ">

                        <div className="flex  flex-col justify-center items-center">
                            <div className="space-y-5">
                                <p className="text-4xl text-gray-800 font-semibold text-center md:text-left">Optimization for Healthcare Insurance companies</p>
        
                                <img alt="health_care_sec_6_img" src={health_care_sec_6_img} className="md:hidden" />

                                <p className=" text-gray-500 font-medium">Insurers are using artificial intelligence and machine learning to review medical records, optimize care for chronic conditions, identify risk.</p>

                                <div className="flex">
                                    <p className="text-2xl my-auto text-white w-14 h-14 flex-shrink-0 font-semibold flex justify-center items-center bg-gradient-to-r from-cyan-700 to-teal-600 text-center rounded-full">1</p>
                                    <div className="space-y-2 p-3">
                                        <p className="text-gray-800 text-lg font-semibold ">Payers manage risk</p>
                                        <p className="text-gray-500 ">Insurers are using artificial intelligence and machine learning to review medical records, optimize care for chronic conditions, identify risk.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <p className="text-2xl my-auto text-white w-14 h-14 flex-shrink-0 font-semibold flex justify-center items-center bg-gradient-to-r from-cyan-700 to-teal-600 text-center rounded-full">2</p>
                                    <div className="space-y-2 p-3">
                                        <p className="text-gray-800 text-lg font-semibold ">AI to optimize health</p>
                                        <p className="text-gray-500 ">AI and machine learning move from a custom and reactive approach to more standardized and proactive management of patient care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img alt="health_care_sec_6_img" src={health_care_sec_6_img} className="w-1/2 hidden md:block" />
                    </div>

                    {/* section - 5 => consultation */}

                    {/* section - 6 => blogs */}
                    {/* <BlogsSection></BlogsSection> */}
                </div>

                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default HomePageHealthcare