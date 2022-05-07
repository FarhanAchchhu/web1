import React, { Component } from "react";
import waste_management_waste_monitoring from "../../../assets/images/waste_management_waste_monitoring.jpg"
import waste_management_technology from "../../../assets/images/waste_management_technology.jpg"
import waste_management_sustainablity from "../../../assets/images/waste_management_sustainablity.jpg"

class WasteManagementWhatWeDo extends Component{
    render(){
        return(
            <div className="bg-white md:p-20 p-5  rounded-md shadow-md space-y-16">
                <div className="md:flex md:space-x-10 space-y-5 md:space-y-0">

                    <div className="space-y-6 md:w-1/3 ">
                        <p className="text-blue-700 text-md">What We Do</p>
                        <p className="text-gray-900 font-semibold text-4xl ">Global leader in smart waste solutions</p>
                    </div>

                    <div className="space-y-5 md:w-1/3">
                        <div className="space-y-3">
                            <p className="text-gray-800 text-xl font-semibold">Our Mission</p>
                            <p className="text-gray-500 text-sm">We aim to improve the efficiency of modern urban waste management with developed smart city solutions and sustainable approach!</p>
                        </div>

                        <div className="space-y-3">
                            <p className="text-gray-800 text-xl font-semibold">Our Vision</p>
                            <p className="text-gray-500 text-sm">Leverage a unique integrated software and hardware system that provides meaningful insights to drive more informed decisions.</p>
                        </div>
                    </div>

                    <div className="space-y-3 md:w-1/3">
                        <p className="text-gray-500 text-xl ">If you have any questions or need help, feel free to contact with our team.</p>
                        <p className="text-sky-500 text-2xl font-semibold">(+22)129 129 121</p>

                        <button className="bg-gradient-to-r from-sky-600 w-full md:w-auto to-purple-700 rounded-full p-2 px-6 text-white text-lg font-semibold">Schedule a demo</button>
                    </div>
                </div>

                <div className="md:flex md:space-x-8 space-y-5 md:space-y-0">
                    <div className="md:w-1/3 relative">
                        <img alt="waste_management_waste_monitoring" src={waste_management_waste_monitoring} className="w-full h-52" />
                        <p className="text-2xl font-semibold w-full text-center text-white absolute bottom-8">Waste Monitoring</p>
                    </div>

                    <div className="md:w-1/3 relative">
                        <img alt="waste_management_technology" src={waste_management_technology} className="w-full h-52" />
                        <p className="text-2xl font-semibold w-full text-center text-white absolute bottom-8">Technology</p>
                    </div>

                    <div className="md:w-1/3 relative">
                        <img alt="waste_management_sustainablity" src={waste_management_sustainablity} className="w-full h-52" />
                        <p className="text-2xl font-semibold w-full text-center text-white absolute bottom-8">Sustainablity</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default WasteManagementWhatWeDo