import React, { Component } from "react";

class ReplyForm extends Component{
    render(){
        return(
            <div className="py-10 space-y-5">

                <p className="text-gray-900 text-3xl font-semibold">Leave A Comment</p>
                <p className="text-gray-500">Your email address will not be published. Required fields are marked *</p>

                <textarea placeholder="Write your comment" className="border-2 focus:outline-none outline-none border-gray-100 w-full p-3 px-5"></textarea>

                <div className="flex justify-between">
                    <input placeholder="Name*" className="p-3 px-5 focus:outline-none outline-none border-gray-100 border-2" />
                    <input placeholder="Email*" className="p-3 px-5 focus:outline-none outline-none border-gray-100 border-2" />
                    <input placeholder="Website" className="p-3 px-5 focus:outline-none outline-none border-gray-100 border-2" />
                </div>

                <div className="space-x-3">
                    <input type="checkbox" className="focus:outline-none  outline-none" />
                    <label className="text-gray-500">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>

                <button className="text-lg font-semibold p-2 px-4 bg-gradient-to-r from-sky-600 to-purple-600 text-white rounded-full">Post a comment</button>
            </div>
        )
    }
}

export default ReplyForm