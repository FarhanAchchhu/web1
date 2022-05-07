import React, { Component } from "react";
import artificial_intelligence_banner_right_img from "../../../assets/images/artificial_intelligence_banner_right_img.png"
import artificial_intelligence_banner_left_img from "../../../assets/images/artificial_intelligence_banner_left_img.png"
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
            <div className=" md:flex space-y-4 md:space-y-0">
                <img alt="artificial_intelligence_banner_left_img" src={artificial_intelligence_banner_left_img} className="md:w-100  md:-ml-48 " />
                <div className="w-full float-left md:p-10 p-3 space-y-10">
                    <p className="text-4xl font-semibold text-blue-900 text-center">The next-generation Platform for Enterprise AI</p>
                    <p className="text-lg text-gray-500 text-center">We provide robust administrative features and enterprise-grade security to comply with regulatory mandates.</p>

                    <div className="space-x-4 rounded-full border-2 border-gray-300 md:w-9/12 flex p-1  bg-opacity-70 mx-auto">
                        <input placeholder="Email address" className="placeholder-slate-300 text-gray-800 bg-transparent text-xs rounded-full outline-none focus:outline-none p-1 flex flex-grow" />
                        <button className="p-2 px-3 text-xs text-white rounded-full bg-gradient-to-r from-cyan-800 to-purple-800 font-semibold flex flex-grow-0">Sign Up Free</button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">14 days free trial <span className="text-lg font-bold">•</span> No credit card required</p>

                    <div className="flex space-x-5 max-w-max mx-auto">
                        {contact_us_section}
                    </div>
                </div>
                <img alt="artificial_intelligence_banner_left_img" src={artificial_intelligence_banner_left_img} className="w-100 hidden md:block -mr-48 " />
            </div>
        )
    }
}

export default BannersSection