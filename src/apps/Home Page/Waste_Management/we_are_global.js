import React, { Component } from "react";
import waste_management_global from "../../../assets/images/waste_management_global.png"

class WeAreGlobal extends Component{
    render(){
        return(
            <div className="space-y-8">
                <p className="text-4xl text-gray-900 font-semibold text-center w-1/2 mx-auto">We are global</p>
                <p className=" w-1/2 mx-auto text-gray-500 text-center">We work together with partners all over the world. Want to get in touch with our partner in your conutry? Feel free to contact us.</p>

                <img alt="waste_management_global" src={waste_management_global} className="w-full" />
            </div>
        )
    }
}

export default WeAreGlobal