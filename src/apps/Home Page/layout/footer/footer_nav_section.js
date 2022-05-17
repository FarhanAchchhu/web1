import React, { Component } from "react";

class FooterNavSection extends Component {
    render() {
        var nav_list = [
            //     {
            //         cat: "Products",
            //         cat_list: [
            //             {
            //                 nav_name: "Technology",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "Model Gallery",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "U-Smart Explorer",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "Pricing",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "Infrastructure",
            //                 nav_to: "",
            //             },
            //         ]
            //     },

            //     {
            //         cat: "Developers",
            //         cat_list: [
            //             {
            //                 nav_name: "Documentation",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "API Refrence",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "API Status",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "Community",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "Integration",
            //                 nav_to: "",
            //             },
            //         ]
            //     },

            //     {
            //         cat: "Resources",
            //         cat_list: [
            //             {
            //                 nav_name: "Support",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "Contact",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "Press",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "eBooks&Guides",
            //                 nav_to: "",
            //             },

            //             {
            //                 nav_name: "FAQs",
            //                 nav_to: "",
            //             },
            //         ]
            //     },

            {
                // cat: "Company",
                cat_list: [
                    {
                        nav_name: "Home",
                        nav_to: "/",
                    },

                    {
                        nav_name: "About Us",
                        nav_to: "/about-us/our-team",
                    },

                    {
                        nav_name: "Careers",
                        nav_to: "/careers",
                    },

                    // {
                    //     nav_name: "Blogs",
                    //     nav_to: "",
                    // },

                    // {
                    //     nav_name: "Security",
                    //     nav_to: "",
                    // },
                ],
            },
        ];

        var nav_section = nav_list.map((nav, index) => {
            return (
                <div key={index} className="flex space-y-4">
                    <p className="md:text-lg text-md font-semibold text-white">
                        {nav.cat}
                    </p>
                    {nav.cat_list.map((sub_nav, sub_index) => {
                        return (
                            <div key={`#${sub_index}`} className="">
                                <a
                                    href={sub_nav.nav_to}
                                    className="p-6 text-gray-200 text-2xs md:text-sm"
                                >
                                    {sub_nav.nav_name}
                                </a>
                            </div>
                        );
                    })}
                </div>
            );
        });

        return (
            <>
                <div className="flex items-center">
                    {nav_section}

                    <div className=" space-y-3 mt-3 justify-end item-end content-end ml-auto">
                        <p className="text-xl font-semibold text-white ">
                            Contact Us
                        </p>
                        <p className="text-gray-400">contact@u-smart.ai</p>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterNavSection;
