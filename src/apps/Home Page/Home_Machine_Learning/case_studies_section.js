import React, { Component } from "react";
import ecommerce_img from "../../../assets/images/E-commerce-Recommender.jpg"
import damage_detection_img from "../../../assets/images/Damage-Detection.jpg"
import drone_robot_training_img from "../../../assets/images/Drone-and-Robot-Training.jpg"
class CaseStudySection extends Component{

    
    render(){
        var case_cat_list = [
            {
                case_name: "E-commerce Recommender",
                case_img: ecommerce_img
            },

            {
                case_name: "Damage Detection",
                case_img: damage_detection_img
            },

            {
                case_name: "Drone and Robot Training",
                case_img: drone_robot_training_img
            },
            
        ]

        var case_cat_section = case_cat_list.map((cat, index)=>{
            return(
                <button key={index} className="space-y-6 outline-none focus:outline-none max-w-max ">
                    <img alt={cat.case_name} src={cat.case_img} className="w-98" />
                    <p className="text-lg font-semibold text-center text-gray-800" >{cat.case_name}</p>
                </button>
            )
        })

        return(
            <div className="p-5 space-y-5 bg-gray-50">
                <p className="text-4xl font-semibold text-center text-blue-900">Case Studies</p>

                <p className="text-lg text-center text-gray-500">Showcase of awesome works we have done for our clients</p>

                <div className="md:flex space-y-5 md:space-y-0 md:space-x-5">
                    {case_cat_section}
                </div>
            </div>
        )
    }
}

export default CaseStudySection