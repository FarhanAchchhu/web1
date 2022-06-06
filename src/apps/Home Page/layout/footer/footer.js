import React, { Component } from "react";
import footer_bg from "../../../../assets/images/footer_bg.PNG";
import website_logo from "../../../../assets/icons/Usmart Logo_only.png";
import paper_plane from "../../../../assets/icons/paper-plane.png";
import FooterNavSection from "./footer_nav_section";
import ContactUs from "./contact_us";

class FooterSection extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#1d225f" }} className="w-full pb-2">
                <div>
                    <img alt="footer_bg" src={footer_bg} className="w-full" />

                    <div className=" flex space-y-8 md:space-y-0 p-2 md:p-5 md:space-x-20">
                        <div className="md:space-y-12 space-y-5 md:w-1/4">
                            <div className=" space-y-5">
                                <p className="text-sky-500 font-medium text-lg">
                                    Start Your Integrated and Customized AI
                                    Journey.
                                </p>
                                {/* <p className="text-white font-medium text-xl">See U-Smart AI ChatBot in action</p> */}
                                <p className="text-gray-300 ">
                                    Our platform helps you build cross platform
                                    experiences.
                                </p>
                            </div>

                            <div className="space-x-4 rounded-full flex p-2 bg-black bg-opacity-70">
                                <input
                                    placeholder="Your business email address"
                                    className="placeholder-slate-300 text-slate-50 bg-transparent text-xs rounded-full outline-none focus:outline-none p-1 flex flex-grow"
                                />
                                <button className="p-2 px-6 text-xs text-white rounded-full bg-gradient-to-r from-cyan-800 to-purple-800 font-semibold flex flex-grow-0">
                                    <img
                                        alt="paper-plane"
                                        src={paper_plane}
                                        className="w-5"
                                    />
                                </button>
                            </div>

                            {/* <div className="flex space-x-3 mx-auto max-w-max md:w-auto">
                                <img alt="website_logo" src={website_logo} className="w-10" />
                                <p className="text-xl text-gray-200 font-semibold my-auto">U-Smart.ai</p>
                            </div> */}
                        </div>
                        <div className="flex-col md:w-9/12 space-y-16">
                            <FooterNavSection></FooterNavSection>
                        </div>
                    </div>
                    <div className="md:flex space-y-5 md:space-y-0 ">
                        <div className="flex flex-grow justify-center mb-5">
                            <ContactUs></ContactUs>
                        </div>
                    </div>
                    <div className="text-center text-white mb-5">
                        &copy; U-Smart.ai All rights reserved.
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSection;
