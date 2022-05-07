import React, { Component } from "react";

class SkillsStats extends Component{

    
    render(){
        var stats_list = [
            {
                stat_name: "AI/ML",
                // stat_percent: "90",
                stat_bar_width: "w-4/5"
            },

            {
                stat_name: "Cloud Computing",
                // stat_percent: "92",
                stat_bar_width: "w-5/6"
            },

            {
                stat_name: "Big Data Solutions",
                // stat_percent: "85",
                stat_bar_width: "w-3/4"
            },
            {
                stat_name: "Blockchain",
                // stat_percent: "85",
                stat_bar_width: "w-3/4"
            },
            {
                stat_name: "Web & Mobile App Development",
                // stat_percent: "95",
                stat_bar_width: "w-3/4"
            },
        ]

        var stats_section = stats_list.map((stat, index)=>{
            return(
                <div key={index} className="flex flex-col space-y-2 ">
                    <div className="w-full flex">
                        <label className="text-gray-700 flex-grow font-medium items-start">{stat.stat_name}</label>
                        {/* <p className="text-gray-700 flex-grow-0 font-medium items-end">{stat.stat_percent} %</p> */}
                    </div>
                    {/* progress bar */}

                    <div class="w-full bg-sky-100 rounded-full h-2.5">
                        <div class={`bg-gradient-to-r from-purple-600 to-rose-600 h-2.5 ${stat.stat_bar_width} rounded-full `} ></div>
                    </div>
                </div>
            )
        })
        return(
            <div className="p-2 space-y-3">
                {stats_section}
            </div>
        )
    }
}

export default SkillsStats