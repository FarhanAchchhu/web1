import React, { Component } from "react";
import "../../../index"
import TopBarSection from "../layout/topbar";
import BannersSection from "./banners_section";
import code_free_cust from "../../../assets/images/code-free-cust_image.jpg"
import more_leads from "../../../assets/images/more_leads.jpg"
import faster_cust_resol from "../../../assets/images/faster_cust_resol.jpg"
import chatbot_img_2 from "../../../assets/images/chatbot_img_2.PNG"
import conversation_img from "../../../assets/images/conversation_img_2.jpg"
import play_button from "../../../assets/icons/play-button.png"
import sample_cust_logo from "../../../assets/icons/sample_cust_logo.png"
import FaqSection from "./faq_section";
import ReviewSection from "./review_section";
import FooterSection from "../layout/footer/footer";
import BlogsSection from "../Home_Computer_Vision/blogs_section";

class HomePageChatBot extends Component{
    render(){

        var about_chatbot_card = [
            {
                img_path: more_leads,
                card_title: "More leads, 24/7",
                about_card_brief: "Bots work for you all day every day - starting conversations, asking questions, and delivering qualified leads when they're on your site.",
                learn_more_path: ""
            },

            {
                img_path: code_free_cust,
                card_title: "Code-free customization",
                about_card_brief: "Chatbots connect to you tech stack, automate workflows behind the scenes and act as extenssion of your sales and support teams",
                learn_more_path: ""
            },

            {
                img_path: faster_cust_resol,
                card_title: "Faster customer resolutions",
                about_card_brief: "Custom Bots ask the right questions to automatically prioritize and route new conversations for more efficient support.",
                learn_more_path: ""
            },
        ]

        var about_chatbot_card_section = about_chatbot_card.map((card, index)=>{
            return(
                <div key={index} className="w-full p-2 space-y-3 rounded-md shadow-lg md:w-72 h-96">
                    <img alt="" src={card.img_path} className="w-full h-3/5" />
                    <p className="font-medium text-center text-gray-800">{card.card_title}</p>
                    <p className="text-xs text-center text-gray-500">{card.about_card_brief}</p>
                    <div className="mx-auto max-w-max">
                        <button className="text-sm font-semibold text-green-600 outline-none focus:outline-none max-w-max hover:text-green-800">Learn More</button>
                    </div>
                </div>
            )
        })
        var cust_company_list = [
            {
                company_logo: sample_cust_logo,
                company_name: "ABC"
            },

            {
                company_logo: sample_cust_logo,
                company_name: "ABC"
            },

            {
                company_logo: sample_cust_logo,
                company_name: "ABC"
            },

            {
                company_logo: sample_cust_logo,
                company_name: "ABC"
            },

            {
                company_logo: sample_cust_logo,
                company_name: "ABC"
            },
        ]

        var cust_company_section = cust_company_list.map((cust, index)=>{
            return <img key={index} alt={cust.company_name} src={cust.company_logo} className="w-40" />
        })

        return(
            <div className="space-y-10">
                <div className="z-50">
                    <TopBarSection></TopBarSection>
                </div>
                <BannersSection></BannersSection>

                <div className="p-5 space-y-10 overflow-hidden md:px-40 md:space-y-5">
                    {/* about chatbot */}
                    <div className="space-y-3">
                        <div className="space-y-6">
                            <p className="font-sans text-2xl font-bold text-center text-blue-900 ">Build your perfect chatbot</p>
                            <p className="text-xs text-center text-gray-500 md:text-sm md:mx-44">There is also no universal best practice as you will want to change your approch depending on the purpose of the bot, the target audience it will be communicating with and the oral approch of your band.</p>
                        </div>

                        <div className="w-full">
                            <div className="mx-auto space-y-5 md:flex md:max-w-max md:space-x-20 md:space-y-0">
                                {about_chatbot_card_section}
                            </div>
                        </div>
                    </div>

                    {/* intro vid */}
                    <div className="w-full space-y-3 md:pt-16 md:flex md:space-x-5 md:sapce-y-0">
                        
                        {/* after md */}
                        <img alt="chatbot_img_2" src={chatbot_img_2} className="hidden md:block md:w-6/12"  />
                        
                        {/* content */}
                        <div className="flex flex-col items-center justify-center flex-grow-0 flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                            <p className="w-full text-2xl font-semibold tracking-wide text-left text-gray-700">Generate more qualified leads without forms</p>
                            
                            {/* visible under md */}
                            <img alt="chatbot_img_2" src={chatbot_img_2} className="md:hidden md:w-6/12"  />
                            
                            <p className="w-full text-sm text-left text-gray-500">Rather than forcing high prospects jump through hoops to talk to your team, make it easy by qualifying your traffic in real-time.</p>
                            
                            <div className="flex w-full space-x-5">
                                <button className="p-2 px-3 rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                                    <p className="text-sm font-semibold tracking-wider text-center text-white">More about us</p>
                                </button>

                                <button className="flex p-1 px-3 space-x-2 transition-all duration-300 rounded-full bg-gradient-to-r hover:shadow-md">
                                    <img alt="video_play_button" src={play_button} className="w-6 h-6" />
                                    <a href="intro_vid" className="text-center text-sm tracking-wider font-semibold text-green-600 mt-0.5">See video intro!</a>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* personalized conversation */}
                    <div className="w-full space-x-5 md:flex">
                        <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                            <p className="w-full text-2xl font-semibold tracking-wide text-left text-gray-700">Start more personalized sales conversations</p>
                            
                            {/* under md */}
                            <img alt="chatbot_img_2" src={conversation_img} className="flex-grow-0 flex-shrink-0 block md:hidden"  />
                            
                            <p className="text-sm text-gray-500">Enable your sales team to have all the information they need to start qualified conversations with your future customers.</p>
                            
                            <div className="mx-auto max-w-max md:w-full">
                                <button className="p-2 px-3 rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                                    <p className="text-sm font-semibold tracking-wider text-center text-white">More about us</p>
                                </button>
                            </div>
                        </div>
                        
                        <img alt="chatbot_img_2" src={conversation_img} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />
                    </div>
                    {/* stats */}
                    <div className="items-center justify-center w-screen p-5 -ml-5 bg-gray-900 md:-ml-40 md:h-64 md:px-40 md:flex">
                        {/* <img alt="stats_bg" src={stats_bg} className="items-center w-full h-96" /> */}
                        <div className="mx-auto space-x-10 space-y-6 md:flex max-w-max md:space-y-0">
                            <div className="flex items-center justify-center md:w-1/2">
                                <p className="text-lg text-center text-gray-500 md:text-2xl md:text-left">We design & build chatbots to automate customer service, lead generation, sales or simplifying, internal enterprise process on a variety of platforms.</p>
                            </div>
                            <div className="flex items-center justify-center md:w-1/2">
                                <div className="flex mx-auto -ml-5 space-x-4 md:ml-0 max-w-max">
                                    <div className="w-40 space-y-5">
                                        <p className="text-4xl font-bold text-center text-white">250+</p>
                                        <p className="text-sm text-gray-500">Successful projects for 30,000 clients from all over the world </p>
                                    </div>

                                    <div className="w-40 space-y-5">
                                        <p className="text-4xl font-bold text-center text-white">89%</p>
                                        <p className="text-sm text-gray-500">Of business now driven by conversations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* fav tools */}
                    <div className="w-full space-x-5 md:flex">
                        <div className="flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20 md:flex">
                            
                            <p className="w-full text-2xl font-semibold tracking-wide text-left text-gray-700 ">ChatBot platform works all with your favorite tools</p>
                            
                            {/* under md */}
                            <img alt="chatbot_img_2" src={conversation_img} className="flex-grow-0 flex-shrink-0 block md:hidden"  />
                            
                            <p className="w-full text-sm text-left text-gray-500">Connect the tools you already know and love with your chat bot using one-click integrations.</p>
                            <div className="w-full">
                                <button className="flex p-1 px-0 space-x-2 transition-all duration-300 rounded-full bg-gradient-to-r hover:shadow-md hover:px-3">
                                    <a href="intro_vid" className="text-center text-sm tracking-wider font-semibold text-green-600 mt-0.5">See how to integrate ➜</a>
                                </button>
                            </div>
                        </div>
                        <img alt="chatbot_img_2" src={conversation_img} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />
                    </div>

                    {/* faqs */}
                    <FaqSection></FaqSection>

                    {/* reviews */}
                    <div className="-ml-5 w-screen md:px-20 md:-ml-40  md:pt-16">
                        <ReviewSection></ReviewSection>
                    </div>

                    {/* <div className="-ml-5 w-screen md:px-20 md:-ml-40  md:pt-16">
                        <BlogsSection></BlogsSection>
                    </div> */}
                    {/* demo */}
                    <div className="relative md:px-20 pt-20">
                        {/* <img alt="demo_img" src={demo_bg} className="absolute top-0 left-0 " /> */}

                        <div className="z-50 md:flex items-center justify-center w-full md:p-10 p-5 space-y-4 md:space-y-0 md:space-x-12 bg-gray-800 rounded-md shadow-md">
                            <div className="flex-grow flex-shrink space-y-5">
                                <p className="text-2xl font-semibold text-gray-100 ">Your customer is closer than you think!</p>
                                <p className="text-xs font-semibold text-gray-300 ">Experience U-Smart.ai ChatBot Free for 14 days</p>
                            </div>

                            <div className="md:flex-grow-0 flex md:flex-shrink-0 p-1 bg-black rounded-full bg-opacity-60">
                                <input placeholder="Your email address" className="p-2 px-4 flex-grow text-sm bg-transparent rounded-full outline-none placeholder-slate-300 text-slate-50 focus:outline-none md:max-w-max" />
                                <button className="flex-grow-0 md:p-2 md:px-3 p-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-800 to-purple-800">Get a demo</button>
                            </div>
                        </div>
                    </div>

                    {/* companies using chatbot */}
                    {/* <div className="pt-20 space-y-10">
                        <div className="px-48 space-y-6">
                            <p className="font-sans text-3xl font-bold text-center text-blue-900 ">30,000+ of the world's most successful companies, big and small, truysh U-Smart.ai ChatBot for growth</p>
                        </div>

                        <div className="flex mx-auto space-x-20 max-w-max">
                            {cust_company_section}
                        </div>
                    </div> */}
                </div>

                {/* footer */}
                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default HomePageChatBot