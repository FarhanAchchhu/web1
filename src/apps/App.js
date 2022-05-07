import React, { Component } from "react";
import "../index.css"
import {Route, Routes, Navigate} from "react-router-dom"
// import LayoutComponent from "./Home Page/layout/layout";
import HomePageChatBot from "./Home Page/Home_Chatbot/home";
import HomePageML from "./Home Page/Home_Machine_Learning/home";
import HomeNLP from "./Home Page/Home_NLP/home";
import HomePageComputerVersion from "./Home Page/Home_Computer_Vision/home";
import ContactUsPage from "./Contact Us Page/contact_us";
import OurTeamPage from "./About Us/Our Team/our_team";
import OurCompanyPage from "./About Us/Our Company/our_company";
import HomePageDataScience from "./Home Page/Home_Data_Science/home";
import HomePageArtificialIntelligence from "./Home Page/Home_Artificial_Intelligence/home";
import HomePageHealthcare from "./Home Page/Home_Health_Care/home";
import HomePageWasteManagement from "./Home Page/Waste_Management/home";
import AllBlogs from "./Blogs/All Blogs Page/all_blogs";
import SingleBlog from "./Blogs/Single Blog Page/single_blog";

class App extends Component{
    render(){
        console.log("")
        return(
            // <LayoutComponent>
            // </LayoutComponent>
            <Routes>
                {/* <Route path="home/chatbot" element={<HomePageChatBot />} ></Route> */}
                <Route path="/home" element={<HomePageML />} ></Route>
                {/* <Route path="home/natural-learning-process" element={<HomeNLP />} ></Route>
                <Route path="home/computer-vision" element={<HomePageComputerVersion />} ></Route>
                <Route path="home/data-sciences" element={<HomePageDataScience />} ></Route>
                <Route path="home/artificial-intelligence" element={<HomePageArtificialIntelligence />} ></Route>
                <Route path="home/waste-management" element={<HomePageWasteManagement />} ></Route>
                <Route path="home/health-care" element={<HomePageHealthcare />} ></Route> */}
                <Route path="contact-us" element={<ContactUsPage />} ></Route>
                <Route path="about-us/our-team" element={<OurTeamPage />} ></Route>
                <Route path="blogs" element={<AllBlogs />} ></Route>
                <Route path="blogs/single-blog" element={<SingleBlog />} ></Route>
                <Route path="about-us/our-company" element={<OurCompanyPage />} ></Route>
            </Routes>
        )
    }
}

export default App