import React, { Component } from "react";
import waste_management_connected_device_1 from  "../../../assets/images/waste_management_connected_device_1.png"
import waste_management_connected_device_2 from  "../../../assets/images/waste_management_connected_device_2.png"
import waste_management_connected_device_3 from  "../../../assets/images/waste_management_connected_device_3.png"
import waste_management_connected_device_bg_1 from  "../../../assets/images/waste_management_connected_device_bg_1.png"
import waste_management_connected_device_bg_2 from  "../../../assets/images/waste_management_connected_device_bg_2.png"

class ConnectedDevices extends Component{
    render(){

        var points = [
            {
                img_path: waste_management_connected_device_1,
                title: "Optimize cost of waste collection",
                content: "With fewer routes required and less man-hours needed, waste collection organizations can optimize the cost of waste collection.",
            },

            {
                img_path: waste_management_connected_device_2,
                title: "Only collect full containers",
                content: "When fill-levels of all containers can be seen at once, organizations can create routes that only pickup full containers.",
            },

            {
                img_path: waste_management_connected_device_3,
                title: "Plan collect route",
                content: "It will also automatically plan the most efficient collection routes so that no time or money is wasted on empty and half-empty containers.",
            },
        ]

        var points_section = points.map((point, index)=>{
            return(
                <div key={index} className="space-x-6 flex">
                    <div className="h-28 w-28">
                        <img alt={point.img_path} src={point.img_path} className="" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-lg text-gray-800 font-semibold">{point.title}</p>
                        <p className="text-gray-500">{point.content}</p>
                    </div>
                </div>
            )
        })

        return(
            <div style={{backgroundColor: "#eef3f7"}} className="md:p-10 p-5 md:flex my-20" >
                <div className="md:w-1/2 space-y-8 md:p-10">
                    <p className="text-4xl font-semibold text-gray-800">Connected devices provide waste managers with all of the data they need</p>  

                    <div  className="space-y-8">
                        {points_section}
                    </div>
                </div>
                <div className="justify-center items-center flex md:w-1/2">
                    <div className="flex relative">
                        <img alt="waste_management_connected_device_bg_1" src={waste_management_connected_device_bg_1} className="" />
                        <img alt="waste_management_connected_device_bg_2" src={waste_management_connected_device_bg_2} className="md:h-5/6 h-4/6 absolute -bottom-3 md:-right-32 -right-8" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectedDevices