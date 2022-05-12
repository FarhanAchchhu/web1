import React, { Component } from "react";
import human_microchip from "../../../assets/images/ml_human_eye_chip.svg"
import ml_chip from "../../../assets/images/ml_chip.svg"
import ml_stastical_modeling  from "../../../assets/images/ml_stastical_modeling.svg"
import ml_human_like_robot from "../../../assets/images/ml_human_like_robot.svg"
import ml_computer from "../../../assets/images/ml_computer.svg"

class Section2 extends Component{
    render(){
        return(
            <div>
                <div className="md:flex justify-around w-full">
                        
                    {/* cards container */}
                    <div className="md:flex md:p-4 md:space-x-5 space-y-4 md:space-y-0 py-14">
                        
                        {/* section 1 */}
                        <div className="md:mt-10 md:space-y-20">
                            <p className="text-4xl font-bold text-blue-900 ">What we offer? <br/>Let's check it out.</p>
                            
                            {/* card */}
                            <div className="p-4 rounded-md shadow-xl md:w-96 bg-white">
                                {/*  */}
                                <div className="space-y-5">
                                    <div className="flex">
                                        <p className="flex-grow w-full pt-16 text-xl font-semibold text-blue-900">Deep Learning</p>
                                        <img alt="deep learning img" src={ml_chip} className="w-24 h-24" />
                                    </div>
                                    <p className="text-gray-600 tex-sm">Access the computational and storage infrastructure tools required to accelerate working in deep learning in the cloud at any scale.</p>                        
                                </div>
                                
                                <div className="relative flex -mt-4">
                                    <button className="absolute bottom-0 left-0 w-full text-xl font-extrabold text-left text-green-600">➔</button>
                                    <p className="flex-grow font-semibold text-right text-gray-200 text-9xl">01</p>
                                </div>
                            </div>
                        </div>

                        {/* section 2 */}
                        <div className="space-y-10">
                            {/* card 1*/}
                            <div className="p-4 rounded-md shadow-xl md:w-96 bg-white">
                                {/*  */}
                                <div className="space-y-5">
                                    <div className="flex">
                                        <p className="flex-grow w-full pt-16 text-xl font-semibold text-blue-900">Predictive Analytics</p>
                                        <img alt="deep learning img" src={human_microchip} className="w-24 h-24" />
                                    </div>
                                    <p className="text-gray-600 tex-sm">Stay a step ahead of disruption and exceed customer expectation by implementing predictive analytics solutions.</p>                        
                                </div>
                                
                                <div className="relative flex -mt-4">
                                    <button className="absolute bottom-0 left-0 w-full text-xl font-extrabold text-left text-green-600">➔</button>
                                    <p className="flex-grow font-semibold text-right text-gray-200 text-9xl">02</p>
                                </div>
                            </div>

                            {/* card 2*/}
                            <div className="p-4 rounded-md shadow-xl md:w-96 bg-white">
                                {/*  */}
                                <div className="space-y-5">
                                    <div className="flex">
                                        <p className="flex-grow w-full pt-16 text-xl font-semibold text-blue-900">Data Mining</p>
                                        <img alt="deep learning img" src={ml_computer} className="w-24 h-24" />
                                    </div>
                                    <p className="text-gray-600 tex-sm">Drive competitive differentiation by converting digital data noise to intelligent insights.</p>                        
                                </div>
                                
                                <div className="relative flex -mt-4">
                                    <button className="absolute bottom-0 left-0 w-full text-xl font-extrabold text-left text-green-600">➔</button>
                                    <p className="flex-grow font-semibold text-right text-gray-200 text-9xl">04</p>
                                </div>
                            </div>
                        </div>

                        {/* section 3 */}
                    <div className="-mt-10 space-y-10">
                        {/* card 1*/}
                        <div className="p-4 rounded-md shadow-xl md:w-96 bg-white">
                            {/*  */}
                            <div className="space-y-5">
                                <div className="flex">
                                    <p className="flex-grow w-full pt-16 text-xl font-semibold text-blue-900">Statistical Modeling</p>
                                    <img alt="deep learning img" src={ml_stastical_modeling} className="w-24 h-24" />
                                </div>
                                <p className="text-gray-600 tex-sm">Discover hidden opportunities by transforming the way data is collected, analyzed, interpreted or explained, and presented.</p>                        
                            </div>
                            
                            <div className="relative flex -mt-4">
                                <button className="absolute bottom-0 left-0 w-full text-xl font-extrabold text-left text-green-600">➔</button>
                                <p className="flex-grow font-semibold text-right text-gray-200 text-9xl">03</p>
                            </div>
                        </div>

                        {/* card 2*/}
                        <div className="p-4 rounded-md shadow-xl md:w-96 bg-white">
                            {/*  */}
                            <div className="space-y-5">
                                <div className="flex">
                                    <p className="flex-grow w-full pt-16 text-xl font-semibold text-blue-900">Supervised/ Unsupervised Learning</p>
                                    <img alt="deep learning img" src={ml_human_like_robot} className="w-24 h-24" />
                                </div>
                                <p className="text-gray-600 tex-sm">Develop future-ready business applications that learn and adapt with time and usage.</p>                        
                            </div>
                            
                            <div className="relative flex -mt-4">
                                <button className="absolute bottom-0 left-0 w-full text-xl font-extrabold text-left text-green-600">➔</button>
                                <p className="flex-grow font-semibold text-right text-gray-200 text-9xl">05</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section2