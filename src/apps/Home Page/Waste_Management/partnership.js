import React, { Component } from "react";
import waste_management_partnership_bg_2 from  "../../../assets/images/waste_management_partnership_bg_2.png"
import waste_management_partnership_bg_1 from  "../../../assets/images/waste_management_partnership_bg_1.png"
class Partnership extends Component{
    render(){
        return(
            <div className="md:flex my-20 space-y-5" >
                <div className="md:w-2/5 space-y-8 md:p-10 p-5">
                    <p className="text-4xl font-semibold text-gray-800">Worldwide partnerships to end waste</p>  
                    <p className="text-gray-500">Faced with increasing demand and opportunity beyond North America, we are actively engaging with businesses, haulers, and city governments around the world to advance our efforts to end waste.</p>  

                    <div className="space-y-8">
                        <div className="flex relative">
                            <p className="text-xl font-semibold  absolute left-0 text-green-600 flex justify-center items-center rounded-full w-16 h-16  bg-gray-200 shadow-md">✓</p>
                            <p className="text-gray-500 bg-gray-200 w-full h-16 rounded-l-full flex justify-center items-center">New cardiac capabilities</p>
                        </div>

                        <div className="flex relative">
                            <p className="text-xl font-semibold  absolute left-0 text-green-600 flex justify-center items-center rounded-full w-16 h-16  bg-gray-200 shadow-md">✓</p>
                            <p className="text-gray-500 bg-gray-200 w-full h-16 rounded-l-full flex justify-center items-center">Performance improvements</p>
                        </div>

                        <div className="flex relative">
                            <p className="text-xl font-semibold  absolute left-0 text-green-600 flex justify-center items-center rounded-full w-16 h-16  bg-gray-200 shadow-md">✓</p>
                            <p className="text-gray-500 bg-gray-200 w-full h-16 rounded-l-full flex justify-center items-center">Workflow enhancements</p>
                        </div>
                    </div>
                    
                </div>
                <div className="justify-center items-center flex md:w-3/5">
                    <div className="flex relative max-w-max mx-auto">
                        <img alt="waste_management_connected_device_bg_1" src={waste_management_partnership_bg_2} className="w-full md:ml-20 ml-6" />
                        <img alt="waste_management_connected_device_bg_2" src={waste_management_partnership_bg_1} className="md:h-5/6 h-4/5 absolute -bottom-3 md:left-10 left-3" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Partnership