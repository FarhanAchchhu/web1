import React, { Component } from "react";
import TopBarSection from "../layout/topbar";
import BannersSection from "./banners_section";
import data_science_our_services_img_1 from "../../../assets/images/data_science_our_services_img-1.svg"
import data_science_our_services_img_2 from "../../../assets/images/data_science_our_services_img-2.svg"
import data_science_our_services_img_3 from "../../../assets/images/data_science_our_services_img-3.svg"
import data_sciences_section_2 from "../../../assets/images/data_sciences_section_2.png"
import data_sciences_section_4 from "../../../assets/images/data_sciences_section_4.png"
import FieldExpertiseSection from "./field_expertise_section";
import data_sciences_section_5_sign_arrow from "../../../assets/images/data_sciences_section_5_sign_arrow.png"
import data_science_section_5_svg_1 from "../../../assets/images/data-science-section-5-svg_1.svg"
import FooterSection from "../layout/footer/footer";
import ImprovingBusiness from "./improving_business";
// import data_science_section_5_svg_2 from "../../../assets/images/data-science-section-5-svg_2.svg"
// import data_science_section_5_svg_3 from "../../../assets/images/data-science-section-5-svg_3.svg"

class HomePageDataScience extends Component{
    render(){

        var services_we_provide_list = [
            {
                img_path: data_science_our_services_img_1,
                service_name: "Data Strategies",
                sevice_desc: "Start your AI journey with an elaborate data strategy tailored to your unique business goals"
            },

            {
                img_path: data_science_our_services_img_2,
                service_name: "Data Science & AI Consulting",
                sevice_desc: "Discover the true potential of your data with our data science experts and machine learning engineers"
            },

            {
                img_path: data_science_our_services_img_3,
                service_name: "AI Software Development",
                sevice_desc: "Discover the true potential of your data with our data science experts and machine learning engineers"
            },
        ]

        var services_we_provide_section = services_we_provide_list.map((service, index)=>{
            return(
                <div key={index} className="md:w-1/3 space-y-5 md:p-4">
                    <img alt={service.service_name} src={service.img_path} className="w-16" />

                    <p className="text-blue-900 font-medium">{service.service_name}</p>

                    <p className="text-gray-500 text-sm">{service.sevice_desc}</p>
                </div>
            )
        })

        var need_list = [
            {
                need_no: "01",
                need_title: "Science meets engineering",
                need_brief: "We have three teams (data engineering, devops and data science) with different academic background and different views on any solution we...",
                border_r: "border-r-2"
            },

            {
                need_no: "02",
                need_title: "Proactiveness",
                need_brief: "We work with the clients, not for the clients. If you have a problem we will solve it but we will try to understand your business and see how we can...",
                border_r: "border-r-2"
            },

            {
                need_no: "03",
                need_title: "Transparency",
                need_brief: "Neither us nor our work is a black box to our clients. Our reporting practices will always keep you in the loop. We start off with a face-to-face ...",
                border_r: "border-r-2"
            },

            {
                need_no: "04",
                need_title: "We invest in knowledge",
                need_brief: "Learning is exciting. It is one of company values we value the most. We have employee knowledge budget which can be spent on continuous...",
                border_r: "border-r-0"
            },
        ]

        var need_section = need_list.map((card, index)=>{
            return(
                <div key={index} className={`p-5 px-8 border-gray-200 space-y-2`}>
                    <p className="text-xl font-extrabold text-gray-800">{card.need_no}</p>
                    <p className="text-lg font-semibold text-blue-900 ">{card.need_title}</p>
                    <p className="text-gray-500">{card.need_brief}</p>
                </div>
            )
        })

        return(
            <div className="overflow-hidden">
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>

                <div className="md:px-20 px-5 pt-10">
                    {/* section - 1 */}
                    <div className="md:w-screen  md:-ml-20 md:px-10">
                        <div className="md:shadow-2xl rounded-md  space-y-14 md:p-16">
                            <p className="text-center text-4xl text-blue-900 font-semibold">Services We Provide</p>
                            <p className="text-center text-md text-gray-500">There is also no universal best practice as you will want to change your approach depending on the purpose of the bot, the target audience it will be communicating with and the overall approach of your brand.</p>
                            
                            <div className="md:flex space-y-5 md:space-y-0 md:justify-between">
                                {services_we_provide_section}
                            </div>
                        </div>
                    </div>

                    {/* section - 2 */}
                    <div className="md:flex md:p-10 pt-24 md:space-x-20">
                        <img alt="data_sciences_sction_2" src={data_sciences_section_2} className="w-1/2 hidden md:block" />

                        <div className="space-y-8 my-auto">
                            <p className="text-4xl font-semibold text-blue-900">Our mission is to bring the power of AI to every business</p>
                            <p className="text-sm text-gray-500">We are a professional services firm delivering AI-powered software and technical solutions to companies who want to leverage data and machine learning algorithms for business value.<br/><br/>Focusing on predictive analytics, natural language processing, and computer vision, we help businesses innovate with AI, enrich customer insights, automate processes & be more cost-efficient. This is ensured by our proprietary technologies, exceptional customer care, constant investment into talent development and R&D.</p>

                            <button className="rounded-full p-3 px-5 bg-blue-900 text-white font-semibold text-lg">More about us</button>
                        </div>
                    </div>

                    {/* section - 3 */}
                    <FieldExpertiseSection></FieldExpertiseSection>

                    {/* section - 4 */}
                    <div className="md:flex md:p-10 pb-10 space-x-20">
                        <div className="space-y-8 my-auto">
                            <p className="text-4xl font-semibold text-blue-900">A modern panel<br/>for insight into the modern consumer.</p>
                            <img alt="data_sciences_section_2" src={data_sciences_section_4} className=" md:hidden" />   
                            <p className="text-sm text-gray-500">Business intelligence dashboards are great at aggregating data in a visual way. But it’s then up to you to make sense of what it all means. Quill analyzes the dashboard and writes out key takeaways in plain English for you to understand what is most important.</p>

                            <div className="flex md:justify-between space-x-3 md:space-x-0 ">
                                <div className="space-y-3">
                                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-xs md:text-lg">✓</span> A arcu cursus vitae congue</p>
                                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-xs md:text-lg">✓</span> Purus semper eget duis at.</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-xs md:text-lg">✓</span> Curabitur vitae nunc sed velit.</p>
                                    <p className="text-gray-800"><span className="text-blue-900 font-semibold text-xs md:text-lg">✓</span> Gravida quis blandit turpis cursus.</p>
                                </div>
                            </div>

                            <button className="rounded-full p-2 px-5 w-full md:w-auto bg-blue-900 text-white font-semibold text-lg">Learn More</button>
                        </div>
                        <img alt="data_sciences_section_2" src={data_sciences_section_4} className="w-1/2 hidden md:block" />
                    </div>

                    {/* section - 5 */}
                    <ImprovingBusiness></ImprovingBusiness>


                    {/* section - 6 */}
                    <div className="space-y-16 py-20 ">

                        <div className="md:flex p-5 ">
                            <p className="md:w-1/4 pb-6 md:pb-0 text-blue-900 font-semibold text-4xl md:pr-24">Why need AI LAb Services</p>
                            <p className="md:w-9/12 pt-6 md:pb-0 text-lg text-gray-500 md:border-l-2 border-t-2 md:border-t-0 border-gray-300 md:pl-24">Our first attempt to create this page ended with a list of common things: quality, communication, understanding. Those are pretty basic things and most companies put this on their website. We realized that in SmartCat we have a unique value proposition so we decided to put it in the front.</p>
                        </div>

                        <div className="md:flex space-y-5 md:space-y-0">
                            {need_section}
                        </div>
                    </div>

                    {/* section - 7 */}
                    <div className="px-14 p-8 bg-cyan-700 space-y-6 w-screen -ml-5 md:-ml-20">
                        <p className="text-4xl md:w-1/2 mx-auto text-white font-semibold text-center ">Sign up for our newsletter to stay up to date with tech news!</p>
                        
                        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0">
                            <input placeholder="Your Name" className="rounded-full md:w-1/3 p-2 px-4 w-full bg-white text-gray-800 placeholder-gray-500" />
                            <input placeholder="Your Email" type="email" className="rounded-full md:w-1/3 w-full p-2 px-4 bg-white text-gray-800 placeholder-gray-500" />
                            <button className="rounded-full p-2 px-10 text-white border-2 border-white w-full md:w-auto">Submit Now</button>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default HomePageDataScience