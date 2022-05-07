import React, { Component, useState } from "react";
import TopBarSection from "../layout/topbar";
import BannersSection from "./banners_section";
import nlp_conversational_img from "../../../assets/images/nlp_conversational_img.jpg"
import nlp_svg_semantics from "../../../assets/images/nlp-svg-semantics.svg"
import nlp_img_syntax from "../../../assets/images/nlp_img_syntax.jpg"
import services_shape from "../../../assets/images/services-shape.png"
import how_nlp_works from "../../../assets/images/how_nlp_works.png"
import human_microchip from "../../../assets/images/ml_human_eye_chip.svg"
import ml_stastical_modeling  from "../../../assets/images/ml_stastical_modeling.svg"
import ml_human_like_robot from "../../../assets/images/ml_human_like_robot.svg"
import PricingSection from "./pricing_section";
import nlp_faster_cust_reso from "../../../assets/images/nlp_faster_cust_reso.svg"
import nlp_more_leads_svg from "../../../assets/images/nlp_more_leads_svg.svg"
import nlp_code_free_cust from "../../../assets/images/nlp_code_free_cust.svg"
import nlp_our_sciences from "../../../assets/images/nlp_our_sciences.jpg"
import FooterSection from "../layout/footer/footer";
function HomeNLP(){

    var what_we_offer = [
        {
            img_path: human_microchip,
            title: "Intelligent document analysis",
            content: "Intelligent document analysis",
            link: ""
        },

        {
            img_path: ml_human_like_robot,
            title: "Chatbots and virtual assistants",
            content: "Stay a step ahead of disruption and exceed customer expectation.",
            link: ""
        },

        {
            img_path: ml_stastical_modeling,
            title: "Document search and match",
            content: "Stay a step ahead of disruption and exceed customer expectation.",
            link: ""
        },

    ]

    var what_we_offer_section = what_we_offer.map((card, index)=>{
        return(
            <div key={index} className="shadow-xl md:w-96 w-full flex overflow-hidden">
                <img alt="sec_1_card_1_img" src={card.img_path} className="-ml-12 w-28" />
                <div className="p-5 px-8 space-y-3 ">
                    <p className="text-lg font-medium text-gray-900">{card.title}</p>
                    <p className="text-base text-gray-500">{card.content}</p>
                    <div>
                        <a href={card.link} className="font-medium text-green-600">Discover More</a>
                    </div>
                </div>
            </div>
        )
    })

    var abt_our_work = [
        {
            img_path: nlp_more_leads_svg,
            title: "More leads, 24/7",
            content: "Bots work for you all day every day – starting conversations, asking questions, and delivering qualified leads when they're live on your site."
        },

        {
            img_path: nlp_code_free_cust,
            title: "Code-free customization",
            content: "Chatbots connect to your tech stack, automate workflows behind the scenes, and act as extensions of your sales and support teams."
        },

        {
            img_path: nlp_faster_cust_reso,
            title: "Faster customer resolutions",
            content: "Custom Bots ask the right questions to automatically prioritize and route new conversations for more efficient support."
        },
    ]

    var abt_our_work_section = abt_our_work.map((card, index)=>{
        return(
            <div key={index} className="w-96 p-2 md:px-8 md:p-5 ">
                <img alt={card.title} src={card.img_path} className="w-20" />
                <div className="space-y-3 ">
                    <p className="text-lg font-medium text-gray-900">{card.title}</p>
                    <p className="text-base text-gray-500">{card.content}</p>
                </div>
            </div>
        )
    })

    var how_nlP_works_syntax = <img alt="nlp_svg_semantics" className="p-10 w-full" src={nlp_img_syntax} />
    var how_nlP_works_senamatics = <img alt="nlp_img_syntax" className="p-10 w-full" src={nlp_svg_semantics} />
    var how_nlP_works_system = <img alt="nlp_svg_semantics" className="p-10 w-full" src={nlp_img_syntax} />

    var [how_nlp_display_section, setHowNLPDisplaySection] = useState(how_nlP_works_syntax)

    return(
        <div className="space-y-20">
            <div className="z-50">
                <TopBarSection></TopBarSection>
            </div>
            <BannersSection></BannersSection>

            <div className="md:px-20 px-3 space-y-20 overflow-hidden">

                {/* section 1 */}
                <div className="md:flex space-y-2 md:space-y-0 md:space-x-5">
                    {what_we_offer_section}
                </div>

                {/* section 2 */}

                <div className="md:flex">
                   <div className="flex items-center justify-center flex-shrink-0 md:w-1/2">
                        <img alt="" src={nlp_conversational_img} className="md:w-96" />
                   </div>
                   <div className="flex items-center justify-center flex-grow-0 md:p-8 md:px-24">
                        <div className="space-y-8">
                            <p className="text-4xl text-center md:text-left text-blue-900">AI platform for powerful conversational experiences</p>

                            <p className="text-base text-gray-500 text-center md:text-left">U-Samrt.ai is a machine learning company at its heart with strong specialization on Natural Language Processing (NLP). Our team is made up of exceptional engineers and creative problem solvers that ever since are driven by the passion of solving real-world problems with technology.</p>
                            <p className="text-base text-gray-500 text-center md:text-left">Born in 2013, U-Samrt.ai was based on the idea that the human language will be the interface of the future. Bridging the gap between humans and machines we enable everybody to U-Samrt.ai.</p>
                            
                            <button className="font-medium text-green-600 w-full text-center md:max-w-max md:text-left">See how to integrates</button>
                        </div>
                   </div>
               </div>

                {/* section 3 */}
                <div className="md:flex space-y-3 md:space-y-0 md:space-x-5">
                    {abt_our_work_section}
                </div>

                {/* section 4 */}
                <div className="md:p-20">
                    <div className="space-y-5 md:px-36">
                        <p className="text-4xl font-semibold text-center text-blue-900">How NLP works?</p>
                        <p className="text-center text-gray-500">NLP entails applying algorithms to identify and extract the natural language rules such that the unstructured language data is converted into a form that computers can understand.</p>
                    </div>

                    <div className="flex mx-auto max-w-max">
                        <button onClick={()=>{setHowNLPDisplaySection(how_nlP_works_syntax)}} className="p-5 md:px-8 text-lg font-semibold text-gray-800 border-b-2 border-rose-600">Syntax</button>
                        <button onClick={()=>{setHowNLPDisplaySection(how_nlP_works_senamatics)}} className="p-5 md:px-8 text-lg font-semibold text-gray-800 border-b-2 border-rose-600">Semantics</button>
                        <button onClick={()=>{setHowNLPDisplaySection(how_nlP_works_system)}} className="p-5 md:px-8 text-lg font-semibold text-gray-800 border-b-2 border-rose-600">System</button>
                    </div>

                    <div className="w-full">
                        {how_nlp_display_section}
                    </div>
                    
                </div>

                {/* section 5  */}
                <div className="relative hidden md:flex w-screen -ml-20 bg-sky-50">
                    <img alt="our_sciences_img" src={services_shape} className="w-fit" />
                    <div className="absolute top-0 left-0 flex items-center justify-center w-full pt-10">
                        <div className="space-y-8 w-1/2">
                            <p className="text-4xl text-blue-900">Our Sciences</p>

                            <p className="text-base text-gray-500">Our product uses state-of-the-art machine learning algorithms to pull the precise pieces of text you need out of your document.</p>
                            <p className="text-base text-gray-500">Our science team, who hold PhDs in physics, mathematics, and information theory are exclusively dedicated to improving our algorithms by adapting the latest research from academia.</p>
                            
                            <button className="flex-grow-0 p-2 px-5 text-sm font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-rose-700">See our works</button>
                        </div>

                        <img alt="nlp_our_sciences_bg" src={nlp_our_sciences} className="" />
                   </div>
                </div>

                {/* section 6 */}
                <div className="md:flex">
                    <div className="md:w-1/2 py-20 space-y-10">
                        <p className="text-4xl font-semibold text-blue-900">Where NLP can solve your problems</p>
                        <img alt="how_nlp_works" src={how_nlp_works} className="w-full" />
                    </div>

                    <div className="md:w-1/2 md:p-20 space-y-10">
                        {/* point 1 */}
                        <div className="space-y-5">
                            <p className="text-6xl font-bold text-blue-900">01</p>
                            <p className="text-lg font-bold text-gray-900">Information Extraction From Text</p>
                            <p className="text-base font-medium text-gray-500">Whether you'd like to extract information from documents, social media posts or customer feedback, Natural Language Processing is your go-to technology.</p>
                        </div>

                        {/* point 2 */}
                        <div className="md:-ml-8 space-y-5">
                            <p className="text-6xl font-bold text-blue-900">02</p>
                            <p className="text-lg font-bold text-gray-900">Anonymization of personal data</p>
                            <p className="text-base font-medium text-gray-500">You have tons of documents and text data and you can't utilize this data due to privacy regulations? With anonymization of personal data in documents you can unleash its true potential.</p>
                        </div>

                        {/* point 1 */}
                        <div className="md:-ml-20 space-y-5">
                            <p className="text-6xl font-bold text-blue-900">03</p>
                            <p className="text-lg font-bold text-gray-900">Data Analytics with NLP</p>
                            <p className="text-base font-medium text-gray-500">Learn how you can democratize data within your organization by providing a natural language interface to everyone. You can ask for data from any data source: Databases, ERP, CRM etc..</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <FooterSection></FooterSection>
        </div>
    )
}

export default HomeNLP