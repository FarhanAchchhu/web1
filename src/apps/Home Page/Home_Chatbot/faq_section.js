import React, { Component, useState } from "react";
import faq_bg from "../../../assets/images/faq_bg.jpg"

function FaqSection(){
    var frequently_asked_ques_list = [
        {
            ques: "How chatbots can help lead generation?",
            answer: "Answer to this question. Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question."
        },

        {
            ques: "How chatbots can help lead generation?",
            answer: "Answer to this question. Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question."
        },

        {
            ques: "How chatbots can help lead generation?",
            answer: "Answer to this question."
        },

        {
            ques: "How chatbots can help lead generation?",
            answer: "Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question.Answer to this question."
        },
    ]

    var [faq_card_h, setFaqCardH] = useState("h-11")

    var changeFaqH = () =>{
        
    }

    var frequently_asked_ques_section = frequently_asked_ques_list.map((card, index)=>{
        return(
            <div id={`faq_card_${index}`} key={index} className={`space-y-3 items-start flex flex-col rounded-md shadow-sm w-full p-3 bg-gray-200 overflow-hidden transition-all duration-300 h-11`}>
                <div className="relative flex w-full my-auto">
                    <p className="text-sm tracking-wider flex-grow font-semibold text-blue-800">{card.ques}</p>
                    <button onClick={() => {
                        console.log(index)
                        if(faq_card_h === "h-11"){
                            setFaqCardH("h-32")
                            document.getElementById(`faq_card_${index}`).style.height = "44px"
                        }else{
                            setFaqCardH("h-11")
                            document.getElementById(`faq_card_${index}`).style.height = "128px"
                        }
                    }} value={index} type="button" className="-mt-3 max-w-max">
                        <span id="faq_expand_button" className="text-3xl font-extrabold text-blue-800" >+</span>
                    </button>
                </div>
                <div className="bg-gray-50 w-full p-2 rounded-md max-h-20 overflow-y-auto">
                    <p className="text-sm tracking-wider font-semibold text-gray-700">{card.answer}</p>
                </div>
            </div>
        )
    })
    return(
        <div className="w-screen md:-ml-40 -ml-5 md:px-20 md:flex flex-col justify-center items-center space-y-3 md:space-y-10">
            <div className="space-y-3">
                <p className="text-2xl font-bold font-sans text-blue-900 text-center ">Frequently asked questions about Chatbot</p>
                <p className="text-sm md:mx-44 text-center text-gray-500">Something to be written about frequently asked</p>
            </div>

            {/* questions */}
            <div className="md:flex p-5 md:p-0 space-y-3 md:space-y-0">
                <div className="flex justify-center items-center flex-grow-0 md:w-1/2">
                    <img alt="faq_bg" src={faq_bg} className="h-fit " />
                </div>
                <div className="space-y-3 flex-grow my-auto justify-center items-center flex flex-col md:w-1/2">
                    {frequently_asked_ques_section}
                    <a href="faq" className="text-center text-sm tracking-wider font-semibold text-green-600 mt-0.5">View all FAQs ➜</a>
                </div>
            </div>
        </div>
    )
}
export default FaqSection