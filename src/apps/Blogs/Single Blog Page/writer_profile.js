import React, { Component } from "react";
import blog_user_dp from "../../../assets/images/blog_user_dp.png"

class WriterProfile extends Component{
    render(){

        var writer_info = {
            img: blog_user_dp,
            name: "Natasa Lina",
            bio: "AI Lab is a clean and modern Machine Learning & AI Startup WordPress theme, also very easy to customize Machine Learning-Based Startup Agencies WordPress Theme.",
        }

        return(
            <div className="flex space-x-5 my-10 p-3 bg-gray-100 rounded-md">
                <img alt={writer_info.name} src={writer_info.img} className="rounded-full w-32 " />

                <div className=" flex flex-col justify-center items-center">
                    <div className="space-y-3">
                        <p className="text-blue-900 text-2xl font-semibold text-left">{writer_info.name}</p>
                        <p className="text-gray-600 text-lg">{writer_info.bio}</p>
                    </div>
                </div>
            </div>    
        )
    }
}

export default WriterProfile