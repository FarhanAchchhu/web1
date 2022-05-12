import React, { Component } from "react";
import profile_rev from "../../../assets/images/profile_img.jpeg"
// import left_quote_gray from "../../../assets/icons/left-quotes-sign_gray.png"
import left_quote_blue from "../../../assets/icons/left-quotes-sign_blue.png"
import review_bg from "../../../assets/images/review_bg.jpg"

class ReviewSection extends Component{
    render(){

        var rev_list = [
            {
                review: "This is a great software! My company loved it because we gave our attendees a personal experience as we logged in as ourselves. We were able to say hi to attendees while they were looking around the platform. This gave the attendees an in-person feel as if we saw them at an in-person conference. The analytics were great and we gained a lot of knowledge about our attendees and how we can improve our event for next time.",
                cust_designation: "Web Developer at Danalatic",
                cust_profile: profile_rev,
                cust_name: "Tatpar Mishra",
                cust_rating: "5"
            },

            {
                review: "This is a great software! My company loved it because we gave our attendees a personal experience as we logged in as ourselves. We were able to say hi to attendees while they were looking around the platform. This gave the attendees an in-person feel as if we saw them at an in-person conference. The analytics were great and we gained a lot of knowledge about our attendees and how we can improve our event for next time.",
                cust_designation: "CEO ABS Techos",
                cust_profile: profile_rev,
                cust_name: "Sushant",
                cust_rating: "4"
            },
        ]

        var review_cards_section = rev_list.map((rev, index)=>{
            return(
                <div key={index} className="space-y-3 md:w-96 md:h-72 shadow-lg rounded-md p-5 py-10">
                    
                    {/* review */}
                    <p className="text-gray-400 font-medium text-xs">{rev.review}</p>
                    
                    {/* person designation */}
                    <p className="text-gray-400 font-medium text-xs">- {rev.cust_designation}</p>
            
                    {/* profile and rating */}
                    <div className="flex space-x-3">
                        <img alt="profile_img" src={profile_rev} className="rounded-full w-14  h-14" />
                        <div>
                            {/* name */}
                            <p className="text-gray-600 text-center font-medium text-sm">{rev.cust_name}</p>

                            {/* rating */}
                            <p className="rounded-3xl max-w-max text-sm bg-amber-100 text-gray-700 px-3 font-medium"><span className="text-yellow-500 px-1 text-center font-extrabold text-lg">★</span> {rev.cust_rating}</p>
                        </div>
                    </div>
                    <p></p>
                </div>
            )
        })

        return(
            <div className="md:flex">

                {/*review about  */}
                <div className="flex-grow flex px-8 flex-col w-full">
                    <img alt="review_bg" src={review_bg} className="md:block hidden" />
                    
                    {/* ble when screen size < 2xl */}
                    <div className=" space-y-3 w-full 2xl:hidden flex-grow h-full">
                        <p className="md:text-2xl text-4xl text-gray-700 tracking-wide w-full font-semibold text-center">Our clients love us!</p>

                        {/* under md */}
                        <img alt="review_bg" src={review_bg} className="md:hidden" />

                        <p className="text-sm text-gray-500 text-center">Don't just take our clients do the talking!</p>
                        
                        {/* after md */}
                        <div className="md:block hidden mx-auto max-w-max">
                            <button className="rounded-full flex space-x-2 bg-gradient-to-r hover:shadow-md transition-all duration-300 p-1 px-0 hover:px-3">
                                {/* <img alt="video_play_button" src={play_button} className="w-6 h-6" /> */}
                                <a href="intro_vid" className="text-center text-sm tracking-wider font-semibold text-green-600 mt-0.5">See more clients feedback ➜</a>
                            </button>
                        </div>
                    </div>

                    
                </div>

                {/* reviews cards */}
                <div className="max-w-max space-y-8 md:space-y-0 flex flex-col justify-center items-center">
                    {/* visible when screen size > 2xl */}
                    <div className=" space-y-3 hidden 2xl:block w-full">
                        <p className="text-2xl text-gray-700 tracking-wide w-full font-semibold text-center">Our clients love us!</p>
                        <p className="text-sm text-gray-500 text-center">Don't just take our clients do the talking!</p>
                        <div className=" mx-auto max-w-max">
                            <button className="rounded-full flex space-x-2 bg-gradient-to-r hover:shadow-md transition-all duration-300 p-1 px-0 hover:px-3">
                                {/* <img alt="video_play_button" src={play_button} className="w-6 h-6" /> */}
                                <a href="intro_vid" className="text-center text-sm tracking-wider font-semibold text-green-600 mt-0.5">See more clients feedback ➜</a>
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-2 w-full items-end justify-end">
                        <button className="transform rotate-180 font-extrabold text-lg text-gray-700">➔</button>
                        <button className="font-extrabold text-gray-700 -mt-0.5 text-lg">➔</button>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap relative space-x-6 ">
                        <img alt="left-quote" src={left_quote_blue} className="w-16 h-16 absolute left-0 -top-5" />
                        {review_cards_section}
                    </div>

                    {/* under md */}
                    <div className=" mx-auto max-w-max">
                        <button className=" md:hidden rounded-full flex space-x-2 bg-gradient-to-r hover:shadow-md transition-all duration-300 p-1 px-0 hover:px-3">
                            {/* <img alt="video_play_button" src={play_button} className="w-6 h-6" /> */}
                            <a href="intro_vid" className="text-center text-sm tracking-wider font-semibold text-green-600 mt-0.5">See more clients feedback ➜</a>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewSection