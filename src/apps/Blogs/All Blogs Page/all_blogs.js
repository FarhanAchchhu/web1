import React, { Component } from "react";
import BlogsSection from "../../Home Page/Home_Computer_Vision/blogs_section";
import FooterSection from "../../Home Page/layout/footer/footer";
import TopBarSection from "../../Home Page/layout/topbar";
import BannersSection from "./banners_section";
import BlogCardSection from "./blog_cards_section";

class AllBlogs extends Component{
    render(){
        return(
            <div>
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>

                <div className="md:px-20 px-0">
                    <BlogCardSection></BlogCardSection>
                </div>

                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default AllBlogs