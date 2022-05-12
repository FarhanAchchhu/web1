import React, { Component } from "react";
import waste_management_banner_img from "../../../assets/images/waste_management_banner_img.jpg"
class BannersSection extends Component{
    render(){
        return(
            <div className="relative -z-10">
                <img alt="waste_management_banner_img" src={waste_management_banner_img} className="w-screen object-cover h-72 md:h-100" />

                <div className="bg-black flex flex-col justify-center items-center bg-opacity-80 space-y-5 w-screen h-72 md:h-100 absolute top-0">
                    <p className="text-lg font-semibold text-white text-center capitalize">Inovation in sustainablity</p>
                    <p className="md:text-6xl text-4xl font-semibold text-white text-center tracking-wide">Smart waste <br/>and recycling solutions</p>
                </div>
            </div>
        )
    }
}

export default BannersSection