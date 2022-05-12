import React, { Component } from "react";
import BannersSection from "./banner_section";
import location_svg from "../../assets/icons/location.svg";
import phone_svg from "../../assets/icons/phone.svg";
import mail_svg from "../../assets/icons/mail.svg";
import TopBarSection from "../Home Page/layout/topbar";
import FooterSection from "../Home Page/layout/footer/footer";
import contact_us_map from "../../assets/images/contact_us_map.PNG";
class ContactUsPage extends Component {
    render() {
        return (
            <div className="overflow-none">
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>
                <div className="md:px-28 py-10">
                    {/* section 2 */}
                    <div className="md:flex md:justify-evenly md:p-10 space-y-5 md:space-y-0">
                        <div className="md:space-y-3 space-x-3 md:space-x-0 md:w-1/3 flex md:block">
                            <img
                                alt="location"
                                src={location_svg}
                                className="md:w-32 w-20 md:mx-auto"
                            />
                            <div className="space-y-3 w-full justify-center items-center flex flex-col">
                                <p className="text-sm text-center font-semibold text-blue-900">
                                    Our Address
                                </p>
                                <p className="text-sm text-center font-semibold text-blue-900">
                                    Office no. 301/302 jai Ganesh Vishwa,
                                    Airport Road, Vishrantawadi Pune, 411015
                                </p>
                            </div>
                        </div>

                        <div className="md:space-y-3 space-x-3 md:space-x-0 md:w-1/3 flex md:block">
                            <img
                                alt="location"
                                src={phone_svg}
                                className="md:w-32 w-20 md:mx-auto"
                            />
                            <div className="space-y-3 w-full justify-center items-center flex flex-col">
                                <p className="text-sm text-center font-semibold text-blue-900">
                                    Phone Number
                                </p>
                                <p className="text-sm text-center font-semibold text-blue-900">
                                    +91 20460 32058 - Pune Office
                                </p>
                            </div>
                        </div>

                        <div className="md:space-y-3 space-x-3 md:space-x-0 md:w-1/3 flex md:block">
                            <img
                                alt="location"
                                src={mail_svg}
                                className="md:w-32 w-20 md:mx-auto"
                            />
                            <div className="space-y-3 w-full justify-center items-center flex flex-col">
                                <p className="text-sm text-center font-semibold text-blue-900">
                                    Email Address
                                </p>
                                <p className="text-sm text-center font-semibold text-blue-900">
                                    contact@u-smart.ai
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:p-20 p-5 space-y-5 md:space-y-0 md:space-x-16">
                    {/* <img alt="contact_us_map" src={contact_us_map} className="md:w-1/2" /> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15128.06595049225!2d73.8791195!3d18.5732954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114ad66ea3bcdba!2sU-SMART%20AI%20LAB%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1649171943760!5m2!1sen!2sin"
                        allowFullScreen=""
                        title="location"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="md:w-1/2"
                        border="0"
                    />
                    <div className=" space-y-6">
                        <p className="text-gray-800 font-semibold text-4xl ">
                            Let's Get In Touch!
                        </p>
                        <p className="text-gray-500 text-sm ">
                            We love to hear from you. Drop us a line, or give us
                            a heads up if you’re interested in visiting us.
                        </p>

                        <form className="space-y-4">
                            <input
                                placeholder="Name *"
                                className="placeholder-gray-500 text-gray-700 bg-sky-50 rounded-full w-full p-3 px-4 outline-none focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email *"
                                className="placeholder-gray-500 text-gray-700 bg-sky-50 rounded-full w-full p-3 px-4 outline-none focus:outline-none"
                            />
                            <textarea
                                placeholder="Write a message..."
                                className="placeholder-gray-500 text-gray-700 bg-sky-50 rounded-md w-full p-3 px-4 outline-none focus:outline-none"
                            />

                            <button className="w-full text-white font-semibold rounded-full p-3 text-lg bg-gradient-to-r from-sky-300 to-cyan-600">
                                Send Us
                            </button>
                        </form>
                    </div>
                </div>

                <FooterSection></FooterSection>
            </div>
        );
    }
}

export default ContactUsPage;
