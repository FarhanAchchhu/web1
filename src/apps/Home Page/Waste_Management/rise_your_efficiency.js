import React, { Component } from "react";
import waste_management_rise_to_efficiency_1 from "../../../assets/images/waste_management_rise_to_efficiency_1.png"
import waste_management_rise_to_efficiency from "../../../assets/images/waste_management_rise_to_efficiency.png"

class RiseYourEfficiency extends Component{
    render(){

        var stats = [
            {
                percentage: 98,
                title: "waste collection",
            },

            {
                percentage: 80,
                title: "service & cleaning",
            },

            {
                percentage: 80,
                title: "saved recyclables",
            },
        ]

        var stats_section = stats.map((stat, index)=>{
            return(
                <div className="w-1/3 p-5 bg-white space-y-3 bg-opacity-20 rounded-md">
                    <p className="text-white text-xl text-center font-semibold">98<span className="text-sky-600">%</span></p>
                    <p className="text-md text-center text-gray-500">Waste Collection</p>
                </div>
            )
        })

        return(
            <div style={{backgroundColor: "#0f054c"}} className="md:flex w-screen md:-ml-20 -ml-5 md:p-20 p-5 justify-center items-center">
                <div className="md:w-2/5 space-y-10">
                    <p className="text-md text-sky-600 ">Rise Your efficiency</p>
                    <p className="text-4xl font-semibold text-gray-50">Smart IoT solution for Urban waste Save costs and be sustainable</p>
                    <div className="md:hidden ">
                        <img alt="waste_management_rise_to_efficiency" src={waste_management_rise_to_efficiency} className="w-full" />
                        {/* <img alt="waste_management_rise_to_efficiency_1" src={waste_management_rise_to_efficiency_1} className="w-96" /> */}
                    </div>
                    <p className=" text-gray-500">Waste Monitoring solution combines Smart Sensors, Smart Waste Management System and Citizen App. The Smart Sensors use ultrasound technology to measure the fill levels in bins.</p>

                    <div className="flex md:space-x-10 space-x-4 -ml-3.5 md:ml-0">
                        {stats_section}
                    </div>
                </div>

                <div className="md:w-3/5 hidden md:block">
                    <img alt="waste_management_rise_to_efficiency" src={waste_management_rise_to_efficiency} className="w-full" />
                    {/* <img alt="waste_management_rise_to_efficiency_1" src={waste_management_rise_to_efficiency_1} className="w-96" /> */}
                </div>
            </div>
        )
    }
}

export default RiseYourEfficiency