import React, { Component } from "react";

class BlogRightSidebar extends Component{
    render(){
        var cat_list = [
            {
                cat_name: "Artificial Intelligence",
                nav_to : "",
                cat_num: 1
            },

            {
                cat_name: "Business",
                nav_to : "",
                cat_num: 4
            },

            {
                cat_name: "Natural Learning Process",
                nav_to : "",
                cat_num: 1
            },

            {
                cat_name: "Technology",
                nav_to : "",
                cat_num: 4
            },
        ]

        var cat_section = cat_list.map((cat, index)=>{
            return(
                <a key={index} href={cat.nav_to} className="text-blue-800"><span className="pr-3 font-extrabold"> {">"} </span>{cat.cat_name} ({cat.cat_num})</a>
            )
        })

        var tag_list = [
            {
                tag_name: "business",
                nav_to: ""
            },

            {
                tag_name: "investment",
                nav_to: ""
            },

            {
                tag_name: "lifestyle",
                nav_to: ""
            },

            {
                tag_name: "loan",
                nav_to: ""
            },

            {
                tag_name: "travel",
                nav_to: ""
            },
        ]

        var tags_section = tag_list.map((tag, index)=>{
            return <a key={index} href={tag.nav_to} className="p-1 m-1 shadow-md rounded-full bg-gray-100 px-4 font-medium text-blue-800">{tag.tag_name}</a>
        })

        return(
            <div className="w-4/12 p-3 space-y-10 py-20">
                <div className="shadow-sm border-2 border-zinc-50 p-6 space-y-4 w-full rounded-md">
                    <p className="text-lg text-gray-900 font-semibold">Categories</p>
                    <div className="flex flex-col space-y-2">
                        {cat_section}
                    </div>
                </div>

                <div className="shadow-sm border-2 border-zinc-50 p-6 space-y-4 w-full rounded-md">
                    <p className="text-lg text-gray-900 font-semibold">Tags</p>
                    <div className="flex flex-wrap">
                        {tags_section}
                    </div>
                </div>

                <div className="shadow-sm border-2 p-6 space-y-4 w-full bg-gray-900 rounded-md">
                    <p className="text-lg text-center text-gray-100 font-semibold">Newsletter</p>
                    <div className="space-y-8">
                        <input placeholder="Your email address" className="p-2 px-4 rounded-full bg-white text-white placeholder-gray-400 w-full" />
                        <button className="p-2 w-full bg-gradient-to-r from-sky-600 to-purple-600 rounded-full text-center font-medium">Subscribe Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogRightSidebar