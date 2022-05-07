import React, { Component } from "react";
import banner_1_img from "../../../assets/images/chat_bot.jpg"
import img_twitter from "../../../assets/icons/twitter.png"
import img_facebook from "../../../assets/icons/facebook.png"
import img_pinterest from "../../../assets/icons/pinterest.png"
import img_mail from "../../../assets/icons/email.png"
class BannersSection extends Component{
    render(){

        
        var contact_us_list = [
            {
                navigate_to: "/to_facebook",
                name: "facebook_logo",
                icon_path: img_facebook,
                type: "social_media"
            },

            {
                navigate_to: "/to_twitter",
                name: "twitter_logo",
                icon_path: img_twitter,
                type: "social_media"
            },

            {
                navigate_to: "/to_pinterest",
                name: "pinterest_logo",
                icon_path: img_pinterest,
                type: "blog"
            },

            {
                navigate_to: "/to_mail",
                name: "mail_logo",
                icon_path: img_mail,
                type: "mail"
            },
        ]

        var contact_us_section = contact_us_list.map((contact_us, index)=>{
            return(
                <a key={index} href={contact_us.navigate_to} className="">
                    <img alt = {contact_us.name} src={contact_us.icon_path} className="w-7 h-7" />
                </a>
            )
        })


        return(
            <div className="">

                {/* after md */}
                <div className="w-full px-20 py-5 justify-center items-center hidden md:flex">
                    {/* banner intro */}
                    <div className="w-1/2 space-y-10 flex-grow flex-shrink-0 p-16">
                        <p className="text-4xl text-gray-700 tracking-wide font-semibold">Automate customer service with ChatBot within 10 min</p>
                        <p className="text-sm text-gray-500">We provide robust administrative features and enterprise-grade security to comply with regulatory mandates</p>
                        <div className="space-x-4">
                            <input placeholder="Your business email address" className="placeholder-slate-400 text-sm rounded-full outline-none focus:outline-none p-1.5 border-2 border-gray-600 w-64 px-4" />
                            <button className="p-2 px-3 text-sm text-white rounded-full bg-gradient-to-r from-cyan-800 to-purple-800 font-semibold flex-grow-0">Sign Up Free</button>
                        </div>
                        <p className="text-xs text-gray-500">14 days free trial <span className="text-lg font-bold">•</span> No credit card required</p>
                        <div className="flex space-x-5">
                            {contact_us_section}
                        </div>
                    </div>

                    {/* banner_img */}
                    <div className="w-1/2 flex-grow-0 flex-shrink-0">
                        <img  alt="chat_bot_img" src={banner_1_img} className="" />
                    </div>
                </div>

                {/* under md */}
                <div className="md:hidden">
                    <div className="w-full flex-grow-0 flex-shrink-0">
                        <img  alt="chat_bot_img" src={banner_1_img} className="" />
                    </div>

                    <div className="w-full space-y-4 p-4">
                        <p className="text-2xl text-gray-700 tracking-wide font-semibold">Automate customer service with ChatBot within 10 min</p>
                        <p className="text-xs text-gray-500">We provide robust administrative features and enterprise-grade security to comply with regulatory mandates</p>
                        <div className="space-x-4 rounded-full border-2 border-gray-600 flex p-1 bg-black bg-opacity-70">
                            <input placeholder="Your business email address" className="placeholder-slate-300 text-slate-50 bg-transparent text-xs rounded-full outline-none focus:outline-none p-1 flex flex-grow" />
                            <button className="p-2 px-3 text-xs text-white rounded-full bg-gradient-to-r from-cyan-800 to-purple-800 font-semibold flex flex-grow-0">Sign Up Free</button>
                        </div>
                        <p className="text-xs text-gray-500">14 days free trial <span className="text-lg font-bold">•</span> No credit card required</p>
                        <div className="flex space-x-5">
                            {contact_us_section}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannersSection