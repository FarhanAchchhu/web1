import React, { Component } from "react";
import FooterSection from "../../Home Page/layout/footer/footer";
import TopBarSection from "../../Home Page/layout/topbar";
import BannersSection from "./banners_section";
import BlogMain from "./blog_main";
import BlogRightSidebar from "./blog_right_sidebar";

class SingleBlog extends Component{
    render(){
        return(
            <div className="overflow-hidden">
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>
                <div className="flex px-20">
                    <BlogMain></BlogMain>
                    <BlogRightSidebar></BlogRightSidebar>
                </div>

                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default SingleBlog