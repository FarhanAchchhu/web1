import React, { Component } from "react";
import FooterSection from "../layout/footer/footer";
import TopBarSection from "../layout/topbar";
import AutomatedWasteAnalysis from "./automated_waste_analysis";
import BannersSection from "./banners_section";
import ConnectedDevices from "./connected_devices";
import EfficientWasteManagement from "./efficient_waste_management";
import Partnership from "./partnership";
import RiseYourEfficiency from "./rise_your_efficiency";
import WeAreGlobal from "./we_are_global";
import WasteManagementWhatWeDo from "./what_we_do";
import WhyChooseUs from "./why_choose_us";

class HomePageWasteManagement extends Component{
    render(){
        return(
            <div className="overflow-hidden">
                <TopBarSection></TopBarSection>
                <BannersSection></BannersSection>
                <div className="relative">
                    <div className="absolute md:px-20 px-3 md:-top-24 -top-12">
                        <WasteManagementWhatWeDo></WasteManagementWhatWeDo>                    
                    </div>
                    <WhyChooseUs></WhyChooseUs>
                </div>

                <div className="md:px-20 px-5">

                    <EfficientWasteManagement></EfficientWasteManagement>
                    <RiseYourEfficiency></RiseYourEfficiency>
                    <AutomatedWasteAnalysis></AutomatedWasteAnalysis>
                    <ConnectedDevices></ConnectedDevices>
                    <Partnership></Partnership>
                    <WeAreGlobal></WeAreGlobal>
                </div>

                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default HomePageWasteManagement