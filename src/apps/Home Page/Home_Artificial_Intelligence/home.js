import React, { Component } from "react";
import TopBarSection from "../layout/topbar";
import BannersSection from "./banners_section";
import artificial_intelligence_data_engs from "../../../assets/images/artificial_intelligence_data_engs.png"
import artificial_intelligence_data_facing_challenging from "../../../assets/images/artificial_intelligence_data_facing_challenging.png"
import artificial_intelligence_data_scientists from "../../../assets/images/artificial_intelligence_data_scientists.png"
import NLPWroksSection from "./NLP_works";
import why_chose_us from "../../../assets/images/why_chose_us.png"
import gen_more from "../../../assets/images/gen_more.png"
import BlogsSection from "../Home_Computer_Vision/blogs_section";
import FooterSection from "../layout/footer/footer";
class HomePageArtificialIntelligence extends Component{
    render(){

        var build_perfect_chatbot_list = [
            {
                img_path: artificial_intelligence_data_scientists,
                name: "Data Scientists",
                content: "Bots work for you all day every day – starting conversations, asking questions, and delivering qualified leads when they're live on your site.",
                nav_to: ""
            },

            {
                img_path: artificial_intelligence_data_engs,
                name: "Data Engineers",
                content: "Chatbots connect to your tech stack, automate workflows behind the scenes, and act as extensions of your sales and support teams.",
                nav_to: ""
            },

            {
                img_path: artificial_intelligence_data_facing_challenging,
                name: "Facing an AI Challenge ?",
                content: "Custom Bots ask the right questions to automatically prioritize and route new conversations for more efficient support.",
                nav_to: ""
            },
        ]

        var build_perfect_chatbot_section = build_perfect_chatbot_list.map((card, index)=>{
            return(
                <div key={index} className="md:p-8 space-y-5 flex flex-col justify-center items-center ">
                    <img src={card.img_path} alt={card.name} className="w-24 mx-auto" />
                    <p className="text-lg text-blue-900 font-semibold text-center">{card.name}</p>
                    <p className="text-gray-500 text-center">{card.content}</p>

                    <a href={card.nav_to} className="text-green-600 font-semibold">Learn more</a>
                </div>
            )
        })

        var why_to_choose_list = [
            {
                img_path: "",
                title: "Privacy",
                content: "You can use our services on your private cloud"
            },

            {
                img_path: "",
                title: "Advanced technology",
                content: "Our algorithms enables accurate recognition"
            },

            {
                img_path: "",
                title: "Free try",
                content: "We don’t need your credit card for trying our services on your app."
            },

            {
                img_path: "",
                title: "Competitive pricing",
                content: "Just Top up your account and pay for what you consume"
            },
        ]

        var why_chose_us_section = why_to_choose_list.map((card, index)=>{
            return(
                <div key={index} className="w-1/2 p-3">
                    <p className="text-xl font-semibold text-gray-900">{card.title}</p>
                    <p className="text-gray-500">{card.content}</p>
                </div>
            )
        })

        return(
            <div className="overflow-hidden">
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>

                <div className="md:px-20 px-5">

                    {/* section - 1 => build your perfect chatbot */}
                    <div className="py-20 space-y-10">
                        <div className="md:flex space-y-4 md:space-y-0">
                            <p className="text-4xl font-semibold md:py-10 text-gray-800 md:pr-28 md:border-r-2 border-t-0 md:border-b-2 border-gray-300">Build your perfect chatbot</p>
                            <p className="md:py-10 md:pl-28 md:mt-8 text-lg text-gray-500">There is also no universal best practice as you will want to change your approach depending on the purpose of the bot, the target audience it will be communicating.</p>
                        </div>

                        <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
                            {build_perfect_chatbot_section}
                        </div>
                    </div>

                    {/* section - 2 => how nlp works */}
                    <NLPWroksSection></NLPWroksSection>

                    {/* section - 3 => why choose us? */}
                    <div className="md:flex pt-11">
                        <img alt="why_chose_us" src={why_chose_us} className="md:w-1/2 py-10" />

                        <div className="space-y-3 md:p-20">
                            <p className="text-4xl text-gray-900 font-semibold">Why chose us?</p>
                            <p className="text-gray-500">Whatever your business nature, ordinary or difficult, we will be happy to serve you. Tell us your business plan and get assistance from our experts.</p>

                            <div className="flex flex-wrap">
                                {why_chose_us_section}
                            </div>

                            <button className="p-2 px-3 text-lg text-white rounded-full bg-gradient-to-r from-cyan-800 to-purple-800 font-semibold flex flex-grow-0">More about us</button>

                        </div>
                    </div>

                    {/* section - 5 => gen more  */}
                    <div className="md:flex py-10">
                        <img alt="gen_more" src={gen_more} className="md:w-1/2 md:p-10" />

                        <div className="flex flex-col justify-center items-center md:p-5 py-5">
                            <div className="space-y-10 border-b-2 pb-10 border-gray-100 md:p-5 ">
                                <p className="text-4xl font-semibold text-blue-900 ">Generate more qualified leads without forms</p>
                                <p className="text-gray-500  ">Rather than forcing high intent prospects jump through hoops to talk to your team.</p>
                                <div className="flex space-x-10">
                                    <button className="p-2 px-3 text-xs text-white rounded-full bg-gradient-to-r from-cyan-800 to-purple-800 font-semibold flex flex-grow-0">More about us</button>
                                    <button className="p-2 px-3 text-xs text-green-600 rounded-full font-semibold flex flex-grow-0">Discover our features</button>
                                </div>
                            </div>

                            <div className="flex space-x-3 p-5 pt-10 md:pt-5">
                                <p className="text-4xl text-gray-800 mt-2 font-semibold">⚓︎</p>
                                <p className="text-sm text-gray-500 mt-3">Users can navigate formerly gated content there, similar to putting all your best content on your form.</p>
                            </div>
                        </div>
                    </div>

                    {/* section - 6 => cust reviews */}
                    {/* <BlogsSection></BlogsSection> */}

                </div>

                {/* footer */}
                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default HomePageArtificialIntelligence