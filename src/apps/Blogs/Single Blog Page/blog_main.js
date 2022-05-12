import React, { Component } from "react";
import single_blog_img from "../../../assets/images/single_blog_img.jpg"
import single_blog_section_1_img from "../../../assets/images/single_blog_section_1_img.jpg"
import calendar from  "../../../assets/icons/calendar.png"
import stack from  "../../../assets/icons/stack.png"
import user from  "../../../assets/icons/user (3).png"
import WriterProfile from "./writer_profile";
import CommentsSection from "./comments_section";
import ReplyForm from "./reply_form";
class BlogMain extends Component{
    render(){

        var blog_detail = {
            blog_img: single_blog_img,
            blog_name: "AI technology for a better tomorrow",
            publishing_date: "Febury 21, 2020",
            written_by: "Natasa Lina",
            sub_category: "NLP",
            category: "Technology",
            blog_intro: "Getting started with AI? Perhaps you’ve already got your feet wet in the world of Machine Learning, but still looking to expand your knowledge and cover the subjects you’ve heard of but didn’t quite have time to cover?",
            sections : [
                {
                    section_img: single_blog_section_1_img,
                    section_heading: "NLP – Natural Language Processing",
                    section_content: ["Natural Language Processing (NLP) is a common notion for a variety of Machine Learning methods that make it possible for the computer to understand and perform operations using human (i.e. natural) language as it is spoken or written.",
                     "The most important use cases of Natural Language Processing are:",
                    "He goal of this task is to predict a class (label) of a document, or rank documents within in a list based on their relevance. It could be used in spam filtering (predicting whether an e-mail is spam or not) or content classification (selecting articles from the web about what is happening to your competitors).",
                    ]
                },

                {
                    section_img: single_blog_section_1_img,
                    section_heading: "NLP – Natural Language Processing",
                    section_content: ["Natural Language Processing (NLP) is a common notion for a variety of Machine Learning methods that make it possible for the computer to understand and perform operations using human (i.e. natural) language as it is spoken or written.",
                     "The most important use cases of Natural Language Processing are:",
                    "He goal of this task is to predict a class (label) of a document, or rank documents within in a list based on their relevance. It could be used in spam filtering (predicting whether an e-mail is spam or not) or content classification (selecting articles from the web about what is happening to your competitors).",
                    ]
                },

                {
                    section_img: single_blog_section_1_img,
                    section_heading: "NLP – Natural Language Processing",
                    section_content: ["Natural Language Processing (NLP) is a common notion for a variety of Machine Learning methods that make it possible for the computer to understand and perform operations using human (i.e. natural) language as it is spoken or written.",
                     "The most important use cases of Natural Language Processing are:",
                    "He goal of this task is to predict a class (label) of a document, or rank documents within in a list based on their relevance. It could be used in spam filtering (predicting whether an e-mail is spam or not) or content classification (selecting articles from the web about what is happening to your competitors).",
                    ]
                },

                {
                    section_img: single_blog_section_1_img,
                    section_heading: "NLP – Natural Language Processing",
                    section_content: ["Natural Language Processing (NLP) is a common notion for a variety of Machine Learning methods that make it possible for the computer to understand and perform operations using human (i.e. natural) language as it is spoken or written.",
                     "The most important use cases of Natural Language Processing are:",
                    "He goal of this task is to predict a class (label) of a document, or rank documents within in a list based on their relevance. It could be used in spam filtering (predicting whether an e-mail is spam or not) or content classification (selecting articles from the web about what is happening to your competitors).",
                    ]
                },
            ],
            tags: [
                {
                    tag_name: "business",
                    nav_to: ""
                },

                {
                    tag_name: "investment",
                    nav_to: ""
                },

                {
                    tag_name: "loan",
                    nav_to: ""
                },

            ],
        }

        return(
            <div className="w-8/12 p-3 py-20">
                <div className="w-full space-y-8 ">
                    <div className="space-y-2">
                        <img alt="single_blog_img" src={blog_detail.blog_img} className="w-full rounded-md overflow-hidden" />
                        <div className="space-x-5 flex">
                            <div className="flex space-x-3 ">
                                <img alt="calendar" src={calendar} className="w-5 h-5" />
                                <p className="text-gray-400 -mt-0.5">{blog_detail.publishing_date}</p>
                            </div>

                            <div className="flex space-x-3 ">
                                <img alt="calendar" src={user} className="w-5 h-5" />
                                <p className="text-gray-400 -mt-0.5">{blog_detail.written_by}</p>
                            </div>

                            <div className="flex space-x-3 ">
                                <img alt="calendar" src={stack} className="w-5 h-5" />
                                <p className="text-gray-400 -mt-0.5">{blog_detail.sub_category}, {blog_detail.category}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-700">{blog_detail.blog_intro}</p>

                        <div className="space-y-6">
                            {
                                blog_detail.sections.map((section, index)=>{
                                    return(
                                        <div key={index} className="space-y-3">
                                            <p className="text-gray-900 font-semibold text-lg">{index + 1}. {section.section_heading}</p>
                                            <div className="rounded-md overflow-hidden">
                                                <img alt="single_blog_section_1_img" src={single_blog_section_1_img} className="w-full" />
                                            </div>
                                            {section.section_content.map((para, para_index)=>{
                                                return <p key={`#${para_index}`} className="text-gray-500">{para}</p>
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="space-x-6 flex">
                        <p className="text-gray-700 text-xl font-medium mt-1">Tags: </p>
                        {
                            blog_detail.tags.map((tag, index)=>{
                                return <a key={index} href={tag.nav_to} className="text-gray-500 bg-sky-50 rounded-full p-2 px-4" >#{tag.tag_name}</a>
                            })
                        }
                    </div>
                </div>

                <WriterProfile></WriterProfile>

                <CommentsSection></CommentsSection>

                <ReplyForm></ReplyForm>
                

                
            </div>
        )
    }
}

export default BlogMain