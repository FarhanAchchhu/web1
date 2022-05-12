import React, { Component } from "react";
import contact_us_banner_img from "../../../assets/images/contact_us_banner_img_2.jpg"

class BannersSection extends Component{

    
    render(){
        return(
            <div className="relative -z-10 ">
                <div className="absolute left-0 w-full md:p-16 p-5 md:top-0 -top-3">
                    <div className="md:space-y-3 space-y-1 md:w-1/2">
                        <p className="md:text-6xl text-2xl  text-left font-semibold text-blue-900">AI technology for a better tomorrow</p>
                        
                        <div className="flex ml-1 md:space-x-3 space-x-2">
                            <a href="/home" className="text-gray-500 md:text-sm text-xs">Home</a>
                            <p className="md:text-lg text-sm font-semibold text-green-600 -mt-1 ">•</p>
                            <a href="/contact-us" className="text-gray-500 md:text-sm text-xs">Blogs</a>
                            <p className="md:text-lg text-sm font-semibold text-green-600 -mt-1 ">•</p>
                            <a href="/contact-us" className="text-gray-500 md:text-sm text-xs">AI technology for a better tomorrow</a>
                        </div>
                    </div>
                </div>

                <img alt="contact_us_img" src={contact_us_banner_img} className="w-full block" />
            </div>
        )
    }
}

export default BannersSection