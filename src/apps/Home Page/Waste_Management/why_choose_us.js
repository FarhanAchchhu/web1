import React, { Component } from "react";
import waste_management_wh_to_chose_us_img_1 from "../../../assets/images/waste_management_wh_to_chose_us_img_1.png"
import waste_management_wh_to_chose_us_img_2 from "../../../assets/images/waste_management_wh_to_chose_us_img_2.png"
import waste_management_wh_to_chose_us_img_3 from "../../../assets/images/waste_management_wh_to_chose_us_img_3.png"
import waste_management_wh_to_chose_us_img_4 from "../../../assets/images/waste_management_wh_to_chose_us_img_4.png"

class WhyChooseUs extends Component{
    render(){

        var why_to_choose_list = [
            {
                img_path: waste_management_wh_to_chose_us_img_1,
                title: "Years of battery life",
                content: "Our monitoring unit can be retrofitted to your existing conveyor belts without modification."
            },

            {
                img_path: waste_management_wh_to_chose_us_img_2,
                title: "Years of battery Global coverage",
                content: "Our self-learning AI technology, able to thoroughly analyse material composition across your facility."
            },

            {
                img_path: waste_management_wh_to_chose_us_img_3,
                title: "Cost-effective solution",
                content: "Our data analytics dashboard gives you the reliable data you need to validate your decisions."
            },

            {
                img_path: waste_management_wh_to_chose_us_img_4,
                title: "On-going support",
                content: "we provide continued support and optimisation with our team of experts."
            },
        ]

        var why_choose_section = why_to_choose_list.map((card, index)=>{
            return(
                <div key={index} className="bg-white rounded-md md:w-1/4 space-y-3 px-5 py-10">
                    <img alt={card.img_path} src={card.img_path} className="h-20 mx-auto" />
                    <p className="text-lg font-medium text-gray-800 text-center">{card.title}</p>
                    <p className="text-md text-gray-500 text-center">{card.content}</p>
                </div>
            )
        })

        return(
            <div style={{backgroundColor:"#eef3f7"}} className=" md:pt-100 pt-122 space-y-10">
                <div className=" space-y-4 pt-16">
                    <p className="text-md text-sky-600 md:w-1/2 text-center  mx-auto">Why Choose Us</p>
                    <p className="text-4xl font-semibold text-gray-800 md:w-1/2 mx-auto text-center">The perfect smart waste solution for every smart city</p>
                </div>

                <div className="md:flex md:space-x-8 md:p-16 p-5 space-y-4 md:space-y-0">
                    {why_choose_section}
                </div>
            </div>
        )
    }
}

export default WhyChooseUs