import React, { Component }  from "react";
import cv_blog_1 from "../../../assets/images/cv_blog_1.jpg"

class BlogCardSection extends Component{
    render(){

        var blog_list = [
            {
                blog_img: cv_blog_1,
                related_to:  "Technology",
                blog_heading: "Machine Learning Terms every manager should know",
                blog_content_preview:  "This Machine Learning Glossary aims to briefly introduce the most important ML terms - both for the...",
                blog_link: "/blogs/single-blog",
                related_to_link: ""
            },

            {
                blog_img: cv_blog_1,
                related_to:  "Technology",
                blog_heading: "Machine Learning Terms every manager should know",
                blog_content_preview:  "This Machine Learning Glossary aims to briefly introduce the most important ML terms - both for the...",
                blog_link: "/blogs/single-blog",
                related_to_link: ""
            },

            {
                blog_img: cv_blog_1,
                related_to:  "Technology",
                blog_heading: "Machine Learning Terms every manager should know",
                blog_content_preview:  "This Machine Learning Glossary aims to briefly introduce the most important ML terms - both for the...",
                blog_link: "/blogs/single-blog",
                related_to_link: ""
            },
        ]

        var blog_card_section = blog_list.map((blog, index)=>{
            return(
                <div key={index} className="w-96 space-y-4 p-5 rounded-md overflow-hidden">
                    <img alt="blog_img" src={cv_blog_1} className="w-full h-64" />

                    <div className="max-w-max mx-auto">
                        <a href={blog.related_to_link} className="bg-gradient-to-r from-cyan-800 text-xs via-sky-700 to-purple-800 text-white font-medium p-2 rounded-md">{blog.related_to}</a>
                    </div>

                    <div className="space-y-2">
                        <p className="text-center text-gray-800 text-2xl font-semibold">{blog.blog_heading}</p>

                        <p className="text-gray-500 text-center">{blog.blog_content_preview}</p>
                    </div>
                    
                    <div className="max-w-max mx-auto">
                        <a href={blog.blog_link} className="font-medium text-red-600 underline text-xs">Read more</a>
                    </div>
                </div>
            )
        })

        return(
            <div className=" flex flex-wrap justify-between py-10">
                {blog_card_section}
                {blog_card_section}
                {blog_card_section}

                {/* pagination */}
            </div>
        )
    }
}

export default BlogCardSection