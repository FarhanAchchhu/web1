import React, { Component } from "react";
import prising_icon_bg from "../../../assets/icons/prising_icon_bg.png"
import paper_plane_svg from "../../../assets/icons/paper-plane.svg"
import premium_svg from "../../../assets/icons/premium.svg"
import standard_prize_svg from "../../../assets/icons/standard_prize.svg"


class PricingSection extends Component{

    
    render(){
        var prising_list = {
            annual: [],
            monthly: [
                {
                    prize_cat_name: "Basic",
                    prize: "Free",
                    duration: "15 Days",
                    prise_cat_img: paper_plane_svg,
                    features: [
                        {
                            feature_name: "Full acess Library",
                            status: 1
                        },

                        {
                            feature_name: "One user",
                            status: 1
                        },

                        {
                            feature_name: "5 Analytic Report",
                            status: 1
                        },

                        {
                            feature_name: "5 free optimization",
                            status: 0
                        },

                        {
                            feature_name: "Hotline support 24/7",
                            status: 0
                        },
                    ]
                },

                {
                    prize_cat_name: "Standard",
                    prize: "$ 198",
                    duration: "month",
                    prise_cat_img: standard_prize_svg,
                    features: [
                        {
                            feature_name: "Full acess Library",
                            status: 1
                        },

                        {
                            feature_name: "Multiple user",
                            status: 1
                        },

                        {
                            feature_name: "5 Analytic Report",
                            status: 1
                        },

                        {
                            feature_name: "1 free optimization",
                            status: 1
                        },

                        {
                            feature_name: "Hotline support 24/7",
                            status: 0
                        },
                    ]
                },

                {
                    prize_cat_name: "Premium",
                    prize: "$ 299",
                    duration: "month",
                    prise_cat_img: premium_svg,
                    features: [
                        {
                            feature_name: "Full acess Library",
                            status: 1
                        },

                        {
                            feature_name: "One user",
                            status: 1
                        },

                        {
                            feature_name: "5 Analytic Report",
                            status: 1
                        },

                        {
                            feature_name: "5 free optimization",
                            status: 1
                        },

                        {
                            feature_name: "Hotline support 24/7",
                            status: 1
                        },
                    ]
                },


            ]
        }

        var feature_available_p = <p className='text-2xl font-semibold text-emerald-600 '>✓</p>
        var feature_not_available_p = <p className='text-2xl font-semibold text-red-600 '>✗</p>
        
        var prising_card_section = prising_list.monthly.map((cat, index)=>{
            return(
                <div key={index} className="p-6 space-y-8 transition-all duration-300 bg-gray-100 rounded-md shadow-lg hover:shadow-2xl max-w-max group">
                    <div className="flex space-x-10">
                        <div className="space-y-6">
                            <p className="text-2xl font-semibold text-emerald-600 ">{cat.prize_cat_name}</p>

                            <p className="text-4xl font-semibold text-gray-900">{cat.prize} <span className="text-base font-normal text-gray-500">/ {cat.duration}</span></p>
                        </div>

                        <div className="relative">
                            <img alt="prising_icon_bg" src={prising_icon_bg} className="w-24 h-24 mt-5" />
                            <img alt="prising_icon_bg" src={cat.prise_cat_img} className="absolute top-0 w-16 h-16 left-3" />
                        </div>
                    </div>

                    <div className="space-y-4">

                        {
                            cat.features.map((feature, subindex)=>{
                                return(
                                    <div key={`#${subindex}`} className="flex space-x-5">
                                        {(feature.status === 1) ? feature_available_p : feature_not_available_p}
                                        <p className="mt-1 font-medium text-gray-500">{feature.feature_name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    <div className="mx-auto max-w-max">
                        <button className="flex-grow-0 p-2 px-5 text-lg font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-green-700">Purchase</button>
                    </div>

                </div>
            )
        })

        return(
            <div>
                <div className="p-20 space-y-5">
                    <p className="text-4xl font-semibold text-center text-blue-900">We have the best & affordable pricing plan</p>

                    <div className="flex p-2 px-4 mx-auto space-x-1 bg-white rounded-full shadow-2xl max-w-max">

                        <button className="flex-grow-0 p-2 px-5 text-lg font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-sky-700 to-green-700">Monthly</button>
                        <button className="flex-grow-0 p-2 px-5 text-lg font-semibold text-gray-900 bg-white rounded-full">Annual</button>

                    </div>

                    <div className="flex items-center justify-center w-full space-x-10">
                        {prising_card_section}
                    </div>
                </div>
            </div>
        )
    }
}

export default PricingSection