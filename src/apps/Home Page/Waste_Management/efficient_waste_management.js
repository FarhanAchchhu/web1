import React, { Component } from "react";
import waste_management_home_asset_management_image from "../../../assets/images/waste_management_home-asset-management-image.png"
class EfficientWasteManagement extends Component{
    render(){

        var key_points = ["Understand the dynamics of waste production", 
        "Collect only full bins and containers",
        "Adjust bin capacity and distribution",
        "Eliminate overflowing bins",
        "Provide a better quality of service",
        "Face growing demands on waste management"]

        var key_points_section = key_points.map((point, index)=>{
            return(
                <div key={index} className="flex p-5 md:w-1/3 space-x-3">
                    <p className="text-3xl font-semibold text-sky-300 bg-sky-100 flex justify-center items-center  rounded-md h-16 w-16 flex-shrink-0 ">{index + 1}</p>
                    <p className="text-lg text-gray-500">{point}</p>
                </div>
            )
        })

        return(
            <div className="py-10 ">
                <div className="md:flex md:space-x-20 space-y-5 md:space-y-0 ">
                    <img alt="waste_management_home_asset_management_image" src={waste_management_home_asset_management_image} className="md:w-1/2" />

                    <div className="flex  flex-col justify-center items-center">
                        <div className="space-y-10">
                            <p className="text-4xl text-gray-800 font-semibold">Efficient waste management in your building</p>
                            <p className=" text-gray-500 font-medium">Bin-e optimizes waste management in your facility, allowing you to save costs, time and labour. It ensures precisely sorted raw material through automatic recognition and segregation. Thanks to the compression of plastic and paper the frequency of emptying the bins is reduced by half.</p>
                            <button className="bg-gradient-to-r from-sky-600 to-purple-700 rounded-full p-2 px-6 text-white text-lg font-semibold">Learn More</button>
                        </div>

                    </div>
                </div>

                <div className="md:flex md:flex-wrap space-y-3 md:space-y-0">
                    {key_points_section}
                </div>
            </div>
        )
    }
}

export default EfficientWasteManagement