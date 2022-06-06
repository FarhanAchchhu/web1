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

          <div className=" space-y-3 mt-3  ml-auto">
            <p className="text-xl font-semibold text-white ">Contact Us</p>
            <p className="text-gray-400">contact@u-smart.ai</p>

            <p class="text-white">
              <svg
                class="h-6 w-6 mr-2 text-white inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
              Office no. 301/302 <br/>jai Ganesh Vishwa,
               Airport Road,<br/> Vishrantawadi Pune, 411015
            </p>

            <p class="text-white">
              <svg
                class="h-6 w-6 text-white inline-block mr-2 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              +91-20-4603-2058
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default FooterNavSection;
