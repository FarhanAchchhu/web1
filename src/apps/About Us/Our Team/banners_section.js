import React, { Component } from "react";
import OurTeamBg from "../../../assets/images/our-team bg.png"

class BannersSection extends Component{
    render(){
        return(
            <div className="md:flex md:px-20 px-5">
                <div className="md:w-1/2 md:pt-40 md:p-10 md:space-y-6 space-y-3">
                    {/* <img alt="OurTeamBg" src={OurTeamBg} className="md:hidden" /> */}
                    <p className="text-4xl font-semibold text-blue-900">About Us</p>
                    <p>We Create The Most Realistic AI Enabled Humanise Interactions For Deeper Engagement.
<br/><br/>That All in Favour of Your Business.Creating decisions quickly along with data driven insight, we at ‘U-SMART’ add-on full-proof targets for 
the best business outcomes.<br/><br/>
Modification Of Buisness Outcomes With Analytics, our team attempt along ‘To be a revered solution company centred on innovative technologies, 
delivering world category quality huge knowledge solutions’.</p>
                    {/* <div className="flex ml-1 md:space-x-3 space-x-2">
                        <a href="/home" className="text-gray-500 text-sm">Home</a>
                        <p className="text-lg font-semibold text-green-600 -mt-1">•</p>
                        <a href="/contact-us" className="text-gray-500 text-sm">Meet Our Team</a>
                    </div> */}
                </div>
                <img alt="OurTeamBg" src={OurTeamBg} className="w-1/2 hidden md:block" />
            </div>
        )
    }
}

export default BannersSection