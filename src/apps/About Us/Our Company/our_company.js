import React, { Component } from "react";
import TopBarSection from "../../Home Page/layout/topbar";
import BannersSection from "./banners_section";
import abt_us_section_1 from "../../../assets/images/abt_us_section_1.jpg"
import abt_us_our_skills from "../../../assets/images/abt_us_our_skills.png"
import play_button from "../../../assets/icons/play-button.png"
import SkillsStats from "./our_skills_stats";
import ReviewSection from "../../Home Page/Home_Chatbot/review_section";
import FooterSection from "../../Home Page/layout/footer/footer";

class OurCompanyPage extends Component{
    render(){
        return(
            <div className="overflow-hidden">
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>
                <div className="md:px-20 px-5">
                    {/* section 1 */}
                    <div className="md:flex pt-24">
                        <img alt="our-company_section-1_img" src={abt_us_section_1} className="md:w-1/2" />

                        <div className="p-8 space-y-5">
                            <p className="text-4xl text-blue-900 font-semibold">Driven by artificial intelligence and human</p>
                            <p className="text-md text-gray-500">Founded in 2009, AI Lab is a technology company with a mission to make meeting scheduling obsolete. We’ve built a scheduling network that enables instant, autonomous meeting scheduling from wherever you work. We believe in invisible software, kindness as a design principle, and the power of AI to increase human potential.</p>

                            <div className="md:space-x-3 space-y-3 md:space-y-0 md:flex">
                                <button className="bg-gradient-to-r w-full md:w-auto from-purple-600 to-rose-600 text-white font-semibold text-lg p-2 px-5 rounded-full">More about us</button>
                                <button className="flex p-2 px-5 space-x-2 mx-auto max-w-max md:mx-0 md:w-auto transition-all duration-300 rounded-full bg-gradient-to-r hover:shadow-md">
                                    <img alt="video_play_button" src={play_button} className="w-8 h-8" />
                                    <a href="intro_vid" className="text-center text-lg tracking-wider font-semibold text-green-600 mt-0.5">See video intro!</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* our skills */}
                    <div className="md:flex md:space-x-8 space-y-4 md:space-y-0 md:pt-11">
                        <div className="flex-grow-0 flex-shrink md:w-1/2 md:p-16 pt-32 space-y-8">
                            <img alt="abt_us_our_skills" src={abt_us_our_skills} className="md:hidden" />
                            <p className="text-4xl text-blue-900">Our Skills</p>
                            <p className="text-base text-gray-500">You’ve pored over your customers’ input. You’ve fleshed out your idea – and it’s taking real form! You know it satisfied a real need in your market, and you’ve decided you can build it. So what’s next?</p>
                            <SkillsStats></SkillsStats>
                        </div>
                        <img alt="abt_us_our_skills" src={abt_us_our_skills} className="w-1/2 hidden md:block" />
                    </div>

                    {/* company's story */}

                    {/* client review */}
                    <div className="max-w-max mx-auto pt-16 ">
                        <ReviewSection></ReviewSection>
                    </div>
                </div>
                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default OurCompanyPage
