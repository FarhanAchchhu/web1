import React, { Component } from "react";
import TopBarSection from "../layout/topbar";
import BannersSection from "./banners_section";
import Section2 from "./section_2";
import ml_serving_business from "../../../assets/images/ml_serving_business.png"
import ml_about_service from "../../../assets/images/ml_about_service.png"
import ml_skills from "../../../assets/images/ml_skills.png"
import CaseStudySection from "./case_studies_section";
import PricingSection from "./pricing_section";
import BlogsSection from "../Home_Computer_Vision/blogs_section";
import ml_banner_bg_svg_2 from "../../../assets/images/ml_banner_bg_2.svg"
import SkillsStats from "../../About Us/Our Company/our_skills_stats";
import FooterSection from "../layout/footer/footer";
import how_nlp_works from "../../../assets/images/how_nlp_works.png"


 class HomePageML extends Component{
     render(){

        // var survey_list = [
        //     {
        //         survey_name: "Successful projects",
        //         survey_number: "250+"
        //     },

        //     {
        //         survey_name: "Happy Customers",
        //         survey_number: "400+"
        //     },

        //     {
        //         survey_name: "Professional Experts",
        //         survey_number: "120+"
        //     },

        //     {
        //         survey_name: "Countries",
        //         survey_number: "24+"
        //     },
        // ]

        // var survey_list_section = survey_list.map((survey, index)=>{
        //     return(
        //         <div key={index} className="">
        //             <p className="text-4xl font-bold text-center text-cyan-600">{survey.survey_number}</p>
        //             <p className="text-lg text-center md:text-left font-semibold text-gray-800">{survey.survey_name}</p>
        //         </div>
        //     )
        // })
        
         return(
             <div className="overflow-hidden">
                <TopBarSection></TopBarSection> 
                <BannersSection></BannersSection>
                
                <div className="md:px-12 px-5 space-y-20 md:pt-40 overflow-hidden">
                    <div className="md:-ml-10 -ml-5 w-screen relative">
                        {/* our intro */}
                        <div className="">
                            <Section2></Section2>

                            {/* section 3 */}
                            <div className="md:flex space-y-6 md:space-y-0">
                                <div className=" items-center justify-center flex-shrink-0 w-1/2 hidden md:flex">
                                    <img alt="" src={ml_serving_business} className="w-96" />
                                </div>

                                <div className="md:flex items-center justify-center flex-grow-0 md:p-5 md:px-17">
                                        <div className="space-y-8 pt-10">
                                            <p className="text-4xl text-blue-900">Serving businesses by implementing AI</p>

                                            <p className="text-base text-black-500">Whatever your business nature, ordinary or difficult,we will be happy to serve you. Tell us your business plan and get assistance from our experts for Machine Learning Services and Artificial Intelligence Consulting.</p>
                                            
                                            <ul className="p-5 space-y-4 list-disc">
                                                <li className="">Improving Business Analytics</li>
                                                <li className="">Customized AI solutions</li>
                                                <li className="">Best in class solutions</li>
                                            </ul>
                                    
                                            {/* <button className="flex-grow-0 p-2 px-5 text-lg font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-green-700">Learn more</button> */}
                                        </div>
                                </div>
                            </div>
                        </div>

                        <img alt="svg_bg" src={ml_banner_bg_svg_2} className="w-full transform rotate-180 left-0 hidden md:block absolute top-0" />

                    </div>
                    {/* section 4 */}
                    <div className="md:flex">

                        <div className="flex items-center justify-center flex-grow-0 md:p-8 md:px-24">
                                <div className="space-y-8">
                                    <p className="text-4xl text-blue-900">Our purpose is to deliver excellence in service and execution</p>
                                    <img alt="" src={ml_about_service} className="md:hidden" />
                                    <p className="text-base text-gray-500">What do you do when no one else is looking? Our teams act with integrity and honesty, and focus on putting ourselves in the shoes of others.</p>
                                    
                                    <div className="flex  space-x-3">
                                        <div className="space-y-6">
                                            <div className="flex space-x-3">
                                                <p className="text-lg font-semibold text-green-600 ">✓</p>
                                                <p className="font-medium tracking-wide text-gray-800">Deliver the most effective and futuristic solutions and services for invincible business growth.</p>
                                            </div>
                                            <div className="flex space-x-3">
                                                <p className="text-lg font-semibold text-green-600 ">✓</p>
                                                <p className="font-medium tracking-wide text-gray-800">To add 'unstoppable success' in small, middle and financial businesses through technologies.</p>
                                            </div>
                                        </div>

                                        <div className=" space-y-6">
                                            <div className="flex space-x-3">
                                                <p className="text-lg font-semibold text-green-600 ">✓</p>
                                                <p className="font-medium tracking-wide text-gray-800">To transform ideas into a successful reality.</p>
                                            </div>
                                            <div className="flex space-x-3">
                                                <p className="text-lg font-semibold text-green-600 ">✓</p>
                                                <p className="font-medium tracking-wide text-gray-800">Seeding better tomorrow through today's technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <button className="flex-grow-0 p-2 px-5 text-lg font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-green-700">Learn more</button> */}
                                </div>
                        </div>
                        
                        <div className="items-center justify-center flex-shrink-0 w-1/2 hidden md:flex">
                                <img alt="" src={ml_about_service} className="w-100" />
                        </div>
                    </div>

                    {/* case study */}
                    {/* <div className="w-screen -ml-5 md:w-auto md:ml-0">
                        <CaseStudySection></CaseStudySection>
                    </div> */}

                    {/* <div className="md:flex pb-14 md:pb-0 justify-between md:px-48 space-y-5 md:space-y-0">
                        {survey_list_section}
                    </div> */}
                </div>

                
                {/* our skills */}
                <div className="md:flex md:space-x-8 md:pt-11">
                    

                    <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 md:w-1/2  md:rounded-tl-full">
                        {/* <img alt="our_skills_img" src={ml_skills} className="pt-32 md:w-96" /> */}

                        
                        <img alt="how_nlp_works" src={how_nlp_works} className="pt-32 md:w-100" />
                        {/* <img alt="ml_banner_bg_svg_1" src={ml_banner_bg_svg_2} className="w-11/12 " /> */}


                    </div>

                    <div className="flex-grow-0 flex-shrink md:w-1/2 md:p-16 md:pt-32 space-y-8 p-5">

                        <p className="text-4xl text-blue-900">Our Skills</p>


                        <p className="text-base text-gray-500">We have pored over customer's input. We have fleshed out your idea – and it’s taking real form! We know it satisfied a real need in your market, and we have decided We can build it. So what’s next?</p>

                        <SkillsStats></SkillsStats>
                    </div>
                </div>

                {/* blogs */}
                {/* <div className="p-5">
                    <BlogsSection></BlogsSection>
                </div> */}

                {/* footer */}
                <FooterSection></FooterSection>
             </div>
         )
     }
 }

 export default HomePageML