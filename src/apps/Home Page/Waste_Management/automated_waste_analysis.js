import React, { Component } from "react";
import automated_waste_analysis_img_1 from "../../../assets/images/automated_waste_analysis_img_1.png"
import automated_waste_analysis_img_2 from "../../../assets/images/automated_waste_analysis_img_2.png"
import automated_waste_analysis_img_3 from "../../../assets/images/automated_waste_analysis_img_3.png"
class AutomatedWasteAnalysis extends Component{
    render(){
        return(
            <div className="flex py-10">
                <div className="w-1/2 relative h-full">
                    <img alt="automated_waste_analysis_img_1" src={automated_waste_analysis_img_1} className="w-80 md:h-96 absolute top-0 right-0" />
                    <img alt="automated_waste_analysis_img_2" src={automated_waste_analysis_img_2} className="w-80 md:h-96 absolute top-28 left-20" />
                    <img alt="automated_waste_analysis_img_3" src={automated_waste_analysis_img_3} className="w-72 md:h-72 absolute md:top-80 top-64 right-10 " />
                </div>

                <div className="w-1/2 h-100">

                </div>
            </div>
        )
    }
}

export default AutomatedWasteAnalysis