import React, { Component } from "react";
import gen_more_leads from "../../../assets/images/cv_gen_more_lead_img.png"

class Section2 extends Component{
    render(){
        return(
            <div className="w-full md:space-x-8 md:flex py-16">
                <img alt="gen_more_leads" src={gen_more_leads} className="flex-grow-0 flex-shrink-0 hidden w-1/2 md:block"  />

                <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 md:w-1/2 md:space-y-10 space-y-5 md:px-20">
                    <p className="w-full text-4xl font-semibold tracking-wide text-left text-gray-700">Generate more leads without forms</p>
                    
                    {/* under md */}
                    <img alt="gen_more_leads" src={gen_more_leads} className="flex-grow-0 flex-shrink-0 block md:hidden"  />
                    
                    <p className="text-sm text-gray-500">Rather than forcing high intent prospects jump through hoops to talk to your team. The target audience it will be communicating with the overall approach of your brand.</p>

                    <div className="flex space-x-3">
                        <p className="text-4xl text-gray-800 mt-2 font-semibold">⚓︎</p>
                        <p className="text-sm text-gray-500">Users can navigate formerly gated content there, similar to putting all your best content on your form.</p>
                    </div>
                    
                    <div className="md:mx-auto md:space-y-8 space-y-4 md:w-full flex flex-col justify-start items-start">
                        <button className="p-2 px-3 w-full md:w-auto rounded-full bg-gradient-to-r from-cyan-800 via-sky-700 to-purple-800">
                            <p className="text-sm font-semibold tracking-wider text-center text-white">More about us</p>
                        </button>

                        <button className="font-medium text-green-600">See how to integrates <span className="p-1">➔</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section2