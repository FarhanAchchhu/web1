import React, { Component } from "react";
import OurCompany from "../../../assets/images/our_company.jpg"

class BannersSection extends Component{
    render(){
        return(
            <div className="md:flex md:px-20">
                <div className="md:w-1/2 p-5 md:pt-40 md:p-10 md:space-y-6 space-y-3">
                    <img alt="OurTeamBg" src={OurCompany} className="md:hidden" />
                    <p className="text-4xl font-semibold text-blue-900">About US</p>
                    {/* <div className="flex ml-1 md:space-x-3 space-x-2">
                        <a href="/home" className="text-gray-500 text-sm">Home</a>
                        <p className="text-lg font-semibold text-green-600 -mt-1">•</p>
                        <a href="/contact-us" className="text-gray-500 text-sm">Meet Our Team</a>
                    </div> */}
                </div>
                <img alt="OurTeamBg" src={OurCompany} className="w-1/2 hidden md:block" />
            </div>
        )
    }
}

export default BannersSection