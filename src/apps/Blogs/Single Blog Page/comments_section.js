import React, { Component } from "react";
import user_avatar from "../../../assets/icons/user (4).png"
class CommentsSection extends Component{
    render(){
            var comments_list = [
                {
                    profile_img: user_avatar,
                    comment_id: 1,
                    name: "Lina",
                    publishing_date: "September 11, 2020",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta lacus lorem desio interdum lacus ac purus rhon cus, consequat viverra diam vehicula.",
                    reply: [
                        {
                            reply_profile_img: user_avatar,
                            reply_id: 1,
                            name: "Lina",
                            publishing_date: "September 11, 2020",
                            reply: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta lacus lorem desio interdum lacus ac purus rhon cus, consequat viverra diam vehicula.",
                        },

                        {
                            reply_profile_img: user_avatar,
                            reply_id: 1,
                            name: "Lina",
                            publishing_date: "September 11, 2020",
                            reply: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta lacus lorem desio interdum lacus ac purus rhon cus, consequat viverra diam vehicula.",
                        },
                    ]
                },

                {
                    comment_id: 1,
                    name: "Lina",
                    publishing_date: "September 11, 2020",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta lacus lorem desio interdum lacus ac purus rhon cus, consequat viverra diam vehicula.",
                    reply: []
                },

                {
                    comment_id: 1,
                    name: "Lina",
                    ml: "ml-0",
                    publishing_date: "September 11, 2020",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta lacus lorem desio interdum lacus ac purus rhon cus, consequat viverra diam vehicula.",
                    reply: [
                        {
                            reply_profile_img: user_avatar,
                            reply_id: 1,
                            name: "Lina",
                            publishing_date: "September 11, 2020",
                            reply: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta lacus lorem desio interdum lacus ac purus rhon cus, consequat viverra diam vehicula.",
                        },
                    ]
                },
            ]

            var comment_section = comments_list.map((comment, index)=>{
                return(
                    <div key={`comment_id_${comment.comment_id}`} >
                        <div className={`p-3 py-5 space-x-5 flex`}>
                            <div>
                                <img alt="user_avatar" src={user_avatar} className="w-28" />
                            </div>

                            <div className="space-y-1">
                                <p className="text-gray-500">{comment.publishing_date}</p>

                                <p className="text-lg font-semibold text-blue-900">{comment.name}</p>
                                
                                <p className="text-gray-500">{comment.comment}</p>
                            </div>
                        </div>
                        
                        {
                            comment.reply.map((reply_card, reply_index)=>{
                                return(
                                    <div  key={`reply_id_${reply_card.reply_id}`} className={`p-3 ml-12 py-5 space-x-5 flex`}>
                                        <div>
                                            <img alt="user_avatar" src={reply_card.reply_profile_img} className="w-28" />
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-gray-500">{}</p>

                                            <p className="text-lg font-semibold text-blue-900">{reply_card.name}</p>
                                            
                                            <p className="text-gray-500">{reply_card.reply}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                )
            })

        return(
            <div className="w-3/4">
                <p className="text-3xl font-semibold text-gray-900 ">Comments (3)</p>
                {comment_section}
            </div>
        )
    }
}

export default CommentsSection