import React, { Component } from "react";
import TopBarSection from "../../Home Page/layout/topbar";
import BannersSection from "./banners_section";
import CEOImg from "../../../assets/images/ceo.png";
import CEOSign from "../../../assets/images/ceo_sign.png";
import ml_banner_bg_svg_1 from "../../../assets/images/ml_banner_bg.svg";
import ml_banner_bg_svg_2 from "../../../assets/images/ml_banner_bg_2.svg";
import our_team_join_us from "../../../assets/images/our_team_join_us.png";
import profile from "../../../assets/images/profile.jpg";
import FooterSection from "../../Home Page/layout/footer/footer";

class OurTeamPage extends Component {
    render() {
        var section_1_list = [
            {
                title: "Why Choose Us",
                content:
                    "We are committed to deliver outstanding, cutting edge IT Solutions that add real value that goes beyond what is expected.",
            },

            {
                title: "Our Philosophy",
                content:
                    "Our Unique business systems analysis expertise is to enable companies to shift from legacy IT to the Future.",
            },

            {
                title: "What Drives Us",
                content:
                    "We connect the dots that will transform business for the Digital Era with Open-minded and Innovation, Excellence Execution.",
            },
        ];

        var section_1 = section_1_list.map((card, index) => {
            return (
                <div key={index} className="md:w-1/3 p-5 space-y-5 ">
                    <p className="text-blue-900 font-semibold text-xl">
                        {card.title}
                    </p>
                    <p className="text-gray-500 text-md">{card.content}</p>
                </div>
            );
        });

        var team_mates_list = [
            {
                img_path: profile,
                name: "Alexdera Gray",
                designation: "UI/UX Developer",
                facebook_profile: "",
                twitter_profile: "",
                pintrest_profile: "",
                be_profile: "",
                mail: "",
                contact_no: "",
            },
        ];

        var team_mates_section = team_mates_list.map((card, index) => {
            return (
                <div key={index} className="max-w-max space-y-1 m-4">
                    <img
                        alt={card.name}
                        src={card.img_path}
                        className="w-72 h-96 "
                    />
                    <p className="text-center text-blue-900 font-semibold text-lg ">
                        {card.name}
                    </p>
                    <p className="text-center text-gray-500 text-sm ">
                        {card.designation}
                    </p>
                </div>
            );
        });

        return (
            <div className="overflow-hidden">
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>
                <div className="md:px-20 px-5 pt-11">
                    {/* section 1 */}
                    <div className="md:flex md:space-x-8 space-y-5 md:space-y-0 md:p-5">
                        {section_1}

                        <div
                            className="w-full absolute  right-0 flex flex-col justify-end items-end -z-50"
                            style={{ top: "-200px" }}
                        >
                            <img
                                alt="ml_banner_bg_svg_1"
                                src={ml_banner_bg_svg_2}
                                className="w-11/12 "
                            />
                            {/* <img alt="ml_banner_bg_svg_1" src={ml_banner_bg_svg_1} className="w-3/4 absolute top-0 right-0" /> */}
                            {/* <img alt="ml_banner_img" src={ml_banner_img} className="w-1/2 absolute top-20 right-6" /> */}
                        </div>
                    </div>

                    {/* section 2 - ceo */}
                    {/* <div className="md:flex md:p-14 p-5 bg-sky-50">
                        <img alt="ceo_img" src={CEOImg} className="md:w-3/12 w-1/2 mx-auto flex-shrink-0" />

                        <div className="flex-grow justify-center items-center md:flex md:px-14">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-4xl font-semibold text-center md:text-left  text-gray-800">Medlina Jane</p>
                                    <p className="tex-sm text-gray-500 text-center md:text-left">CEO, Founder, Chief Scientist</p>
                                </div>
                                
                                <p className="tex-md text-gray-700 text-center md:text-left">Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Nibh mauris cursus mattis molestie a. Augue mauris augue neque gravida in. Dolor sit amet consectetur adipiscing elit. Nam aliquam sem et tortor consequat. Vivamus at augue eget arcu dictum varius. <br /><br />Turpis massa tincidunt dui ut. Nibh ipsum consequat nisl vel pretium lectus quam. Proin fermentum leo vel orci porta non pulvinar neque.</p>

                                <img alt="CEOSign" src={CEOSign} className="mx-auto md:mx-0" />
                            </div>
                        </div>
                    </div> */}

                    {/* section 3 - team mates */}
                    {/* <div className="pt-20 w-screen md:-ml-20 -ml-5 md:px-10 flex flex-col md:flex-row md:flex-wrap items-center justify-center">
                        {team_mates_section}
                        {team_mates_section}
                        {team_mates_section}
                        {team_mates_section}
                        {team_mates_section}
                        {team_mates_section}
                        {team_mates_section}
                        {team_mates_section}
                    </div> */}

                    {/* section 4 - join us  */}
                    <div className="md:flex pt-20">
                        <div className="p-5 md:w-1/2 justify-center items-center flex flex-col">
                            <div className="space-y-10">
                                <div>
                                    <p className="text-4xl text-blue-900 font-semibold">
                                        Join Our Vibrant
                                    </p>
                                    <p className="text-4xl text-blue-900 font-semibold">
                                        Professional Team
                                    </p>
                                </div>

                                <img
                                    alt="our_team_join_us"
                                    src={our_team_join_us}
                                    className="md:hidden"
                                />

                                <p className="text-md text-gray-500">
                                    We offer like minded professionals the
                                    opportunity to develop & enhance their
                                    careers and often move ahead more rapidly
                                    than other companies. Ongoing training &
                                    mentoring provide exciting & personally
                                    satisfying careers.
                                </p>

                                <a
                                    href="/careers"
                                    className="text-lg p-3 inline-block px-8 bg-gradient-to-r w-full md:w-auto text-center from-purple-400 rounded-full text-white to-cyan-600 font-semibold"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>

                        <img
                            alt="our_team_join_us"
                            src={our_team_join_us}
                            className="w-1/2 hidden md:block"
                        />
                    </div>
                </div>

                <FooterSection></FooterSection>
            </div>
        );
    }
}

export default OurTeamPage;
