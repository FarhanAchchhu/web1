import React, { Component } from "react";
import img_twitter from "../../../../assets/icons//twitter-241.png";
import img_facebook from "../../../../assets/icons/facebook-72.png";
import img_linkedin from "../../../../assets/icons/linkedin-512.png";

class ContactUs extends Component {
    render() {
        var contact_us_list = [
            {
                img_path: img_facebook,
                nav_to: "https://www.facebook.com/U-Smartai",
            },

            {
                img_path: img_twitter,
                nav_to: "https://twitter.com/USmartAI1",
            },

            {
                img_path: img_linkedin,
                nav_to: "https://www.linkedin.com/company/u-smart-ai",
            },
        ];

        var contact_us_section = contact_us_list.map((contact, index) => {
            return (
                <a
                    key={index}
                    href={contact.nav_to}
                    className="rounded-full bg-black bg-opacity-60 w-10 h-10 flex justify-center items-center"
                >
                    <img
                        alt={contact.nav_to}
                        src={contact.img_path}
                        className="w-5"
                    />
                </a>
            );
        });

        return (
            <div className="space-y-2">
                {/* <p className="text-xl font-semibold text-white">Contact Us</p> */}

                <div className="flex space-x-5">{contact_us_section}</div>
            </div>
        );
    }
}

export default ContactUs;