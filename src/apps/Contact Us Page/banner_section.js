import React, { Component } from "react";
import contact_us_banner_img from "../../assets/images/contact_us_banner_img_4.png";
import ml_banner_bg_svg_2 from "../../assets/images/ml_banner_bg_2.svg";
import ml_banner_img from "../../assets/images/ml_banner_bg.svg";



class BannersSection extends Component {
    render() {
        return (
            <div className="relative -z-10 flex justify-end">
                <div className="absolute left-0 w-full md:p-16 p-5 md:top-0 -top-3">
                    <div className="md:space-y-3 space-y-1 md:w-1/2">
                        <p className="md:text-5xl text-2xl text-left font-semibold text-blue-900">
                            Get In Touch
                        </p>
                        <p class="text-lg">Want to get in touch? <br/>We'd love to here from you.<br/>Our team are here to help for Enquiry, Questions, Bug Reports, Feedback. <br/> We're here for it all.</p>
                    </div>
                </div>
                <div class="absolute  right-0">
                        <img
                            alt="ml_banner_bg_svg_1"
                            src={ml_banner_bg_svg_2}
                            className=" block w-120 relative "
                        />
                    </div>

                    {/* <div class="absolute left-0"> */}
                    {/* <img
                            alt="ml_banner_img"
                            src={ml_banner_img}
                            className="w-1/2 absolute top-20 right-6 z-0"
                        /> */}
                    {/* </div> */}
                
                    <img
                        alt="contact_us_img"
                        src={contact_us_banner_img}
                        className=" block w-100  mr-20  z-1"
                    />
                
            </div>
        );
    }
}

export default BannersSection;
