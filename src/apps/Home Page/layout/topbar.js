import React from "react";
import { useState } from "react";
import "../../../index.css";
import cart_icon from "../../../assets/icons/cart.png";
import search_icon from "../../../assets/icons/search.png";
import website_logo from "../../../assets/icons/Usmart Logo_only.png";
import website_name from "../../../assets/icons/Usmart_name.png";

import landing_page_bg from "../../../assets/images/landing_page_bg.jpg";
import menu_hamburger from "../../../assets/icons/menu_hamburger.png";
import close from "../../../assets/icons/close (5).png";
import { useNavigate } from "react-router-dom";
function TopBarSection() {
    let navigate = useNavigate;
    const home = () => {
        let path = `/home`;
        navigate(path);
    };

    var nav_bar_list = [
        {
            navigate_to: "/",
            nav_name: "Home",
            dropDownEle: "",
        },

        {
            navigate_to: "/about-us/our-team",
            nav_name: "About Us",
            dropDownEle: "",
        },

        // {
        //     navigate_to: "/about-us/our-company",
        //     nav_name: "About Company",
        //     dropDownEle: ""
        // },

        // {
        //     navigate_to: "/features",
        //     nav_name: "Features",
        //     dropDownEle: ""
        // },

        // {
        //     navigate_to: "/pages",
        //     nav_name: "Pages",
        //     dropDownEle: ""
        // },

        // {
        //     navigate_to: "/blogs",
        //     nav_name: "Blog",
        //     dropDownEle: ""
        // },

        // {
        //     navigate_to: "/shop",
        //     nav_name: "Shop",
        //     dropDownEle: ""
        // },
        {
            navigate_to: "/contact-us",
            nav_name: "Contact Us",
            dropDownEle: "",
        },
    ];

    var nav_section = nav_bar_list.map((nav, index) => {
        return (
            <>
                {index === 2 ? (
                    <a
                        href="/careers"
                        className="flex items-center text-sm p-1 left:0px px-5 bg-gradient-to-r w-full md:w-auto text-center from-purple-400 rounded-full text-white to-cyan-600 font-semibold"
                    >
                        Careers
                    </a>
                ) : null}
                <a
                    href={nav.navigate_to}
                    key={index}
                    className="p-1 border-b-2 hover:border-opacity-100 duration-300 border-opacity-0  select-none border-cyan-600 md:px-4"
                >
                    <p className="md:text-base md:font-base md:text-gray-600 select-none text-xl font-semibold text-white">
                        {nav.nav_name}
                    </p>

                    <div className="">{nav.dropDownEle}</div>
                </a>
            </>
        );
    });

    // var home_nav_dropdown_list = [
    //     {
    //         cat_name: "Startup",
    //         cat_dropdown_list: [
    //             {
    //                 name: "Machine Learning",
    //                 nav_to: "/home/machine-learning"
    //             },

    //             {
    //                 name: "Computer Vision",
    //                 nav_to: "/home/computer-vision"
    //             },

    //             {
    //                 name: "ChatBot",
    //                 nav_to: "/home/chatbot"
    //             },

    //             {
    //                 name: "Natural Langiage Processing",
    //                 nav_to: "/home/natural-learning-process"
    //             },

    //         ]
    //     },

    //     {
    //         cat_name: "Agency",
    //         cat_dropdown_list: [
    //             {
    //                 name: "Data Sciences",
    //                 nav_to: "/home/data-sciences"
    //             },

    //             {
    //                 name: "Artificial Intelligence",
    //                 nav_to: "/home/artificial-intelligence"
    //             },
    //         ]
    //     },

    //     {
    //         cat_name: "AI In Industries",
    //         cat_dropdown_list: [
    //             {
    //                 name: "Health Care",
    //                 nav_to: "/home/health-care"
    //             },

    //             {
    //                 name: "Smart Cities",
    //                 nav_to: "/home/smart-cities"
    //             },

    //             {
    //                 name: "Waste management",
    //                 nav_to: "/home/waste-management"
    //             },
    //         ]
    //     },
    // ]

    // var home_nav_dropdown_section = home_nav_dropdown_list.map((cat, index)=>{
    //     return (
    //         <div key={index} className="space-y-2 z-50">
    //             <p className="uppercase text-md font-semibold text-gray-700 text-left -mt-1">{cat.cat_name}</p>
    //             <div className="flex flex-col space-y-4 py-2">
    //                 {
    //                     cat.cat_dropdown_list.map((sub_items, subindex)=>{
    //                         return <a key={`#${subindex}`} href={sub_items.nav_to} className="text-xs font-medium transition-all duration-300 text-left whitespace-nowrap" >{sub_items.name}</a>
    //                     })
    //                 }
    //             </div>
    //         </div>
    //     )
    // })

    // var home_nav_dropdown_section_under_md = home_nav_dropdown_list.map((cat, index)=>{
    //     return(
    //         <div key={index} className="space-y-5">
    //             <p className="text-white text-lg font-semibold border-b-2 border-rose-500 max-w-max">{cat.cat_name}</p>

    //             <div className="pl-5 flex flex-col space-y-3">
    //                 {
    //                     cat.cat_dropdown_list.map((sub_cat, sub_index)=>{
    //                         return <a key={`#${sub_index}`} href={sub_cat.nav_to} className="text-md font-medium transition-all duration-300 text-left text-gray-200" >{sub_cat.name}</a>
    //                     })
    //                 }
    //             </div>
    //         </div>
    //     )
    // })

    // var home_dropdown_display = "hidden"

    var [home_dropdown_display, setHome_dropdown_display] = useState("hidden");

    var onClickHomeDropdownDisplay = () => {
        if (home_dropdown_display === "hidden") {
            setHome_dropdown_display("flex");
        } else {
            setHome_dropdown_display("hidden");
        }
    };

    var [sidebar_w, setSidebar_w] = useState("w-0");

    var openSidebar = () => {
        if (sidebar_w === "w-0") {
            setSidebar_w("w-screen");
        } else {
            setSidebar_w("w-0");
        }
    };

    var closeSidebar = () => {
        setSidebar_w("w-0");
    };

    var [cat_h, setCat_h] = useState("h-10");

    var uncollapseCat = () => {
        if (cat_h === "h-10") {
            setCat_h("h-104");
        } else {
            setCat_h("h-10");
        }
    };

    return (
        <div className="z-50">
            {/* after md */}
            <div className="h-16 md:flex hidden mx-auto justify-center items-center px-16 bg-white p-3 space-x-24 w-full z-50">
                <a
                    className="flex space-x-3 select-none absolute left-16"
                    href="/"
                >
                    <img
                        alt="website_logo"
                        src={website_logo}
                        className="w-15 h-12"
                    />
                    {/* <img alt="website_name" src={website_name} className="w-20 h-10 m-5" /> */}
                    <p className="text-xl text-gray-700 font-semibold my-auto">
                        U-Smart.ai
                    </p>
                </a>

                <div className="flex mt-1">
                    {/* home nav option */}

                    {/* others nav options */}
                    {nav_section}
                </div>

                {/* search and cart */}
                {/* <div className="space-x-6 flex ">
                    <a href="/cart" className="outline-none">
                        <img alt="cart_icon" src={cart_icon} className="w-7 h-7" />
                    </a>

                    <a href="/search" className="outline-none mt-1">
                        <img alt="search_icon" src={search_icon} className="w-5 h-5" />
                    </a>

                    <button className="rounded-full bg-gradient-to-r  from-cyan-800 via-sky-700 to-purple-800 p-1 px-3 outline-none focus:outline-none">
                        <p className="text-center text-sm tracking-wider text-white font-semibold">Login or Register</p>
                    </button>
                </div> */}
            </div>

            {/* under md */}
            <div className="md:hidden bg-white  w-full z-50">
                <div className="flex justify-center items-center p-3">
                    {/* company_name */}
                    <div className="flex max-w-max space-x-3">
                        <img
                            alt="website_logo"
                            src={website_logo}
                            className="w-8"
                        />
                        <p className="text-xl text-gray-700 font-semibold my-auto">
                            U-Smart.ai
                        </p>
                    </div>

                    {/* cart and search */}
                    <div className="flex justify-end items-end flex-grow space-x-6">
                        {/* <a href="/cart" className="outline-none">
                            <img alt="cart_icon" src={cart_icon} className="w-5 h-5" />
                        </a>

                        <a href="/search" className="outline-none">
                            <img alt="search_icon" src={search_icon} className="w-5 h-5" />
                        </a> */}

                        <button
                            onClick={openSidebar}
                            className="outline-none focus:outline-none"
                        >
                            <img
                                alt="menu_hamburger"
                                src={menu_hamburger}
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                {/* sidebar */}
                <div
                    className={`bg-black ${sidebar_w} h-screen bg-opacity-75 overflow-hidden duration-300 transition-all  fixed top-0 z-50 left-0`}
                >
                    <div
                        className={` bg-gray-900 h-screen bg-opacity-100 w-80 overflow-y-auto`}
                    >
                        <div className="space-y-3 flex flex-col p-3">
                            <div className="flex pb-5 px-2">
                                <div className="flex space-x-3 flex-grow">
                                    <img
                                        alt="website_logo"
                                        src={website_logo}
                                        className="w-8"
                                    />
                                    <p className="text-xl text-gray-100 font-semibold my-auto">
                                        U-Smart.ai
                                    </p>
                                </div>

                                <button onClick={closeSidebar} className="mt-1">
                                    <img
                                        alt="close"
                                        src={close}
                                        className="w-5"
                                    />
                                </button>
                            </div>

                            <div
                                className={`space-y-3 ${cat_h}  overflow-hidden transition-all duration-300`}
                            >
                                <p
                                    onClick={uncollapseCat}
                                    className="text-xl font-semibold text-white"
                                >
                                    Home
                                </p>
                                <div className="pl-5 space-y-8 bg-gray-700 py-3 rounded-md">
                                    {/* {home_nav_dropdown_section_under_md} */}
                                </div>
                            </div>

                            {nav_section}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBarSection;
