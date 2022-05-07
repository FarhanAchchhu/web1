import React, { Component } from "react";

class Section5 extends Component{
    render(){
        return(
            <div className="w-full space-x-8 md:flex py-16">
                <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 space-y-3 md:w-1/2 md:space-y-10 md:px-20">
                    <p className="w-full text-4xl font-semibold tracking-wide text-left text-gray-700">Building everything you need for your business</p>
                    
                    {/* under md */}
                    <div className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="712" height="542" viewBox="0 0 712 542"> <defs> <style> .cls-1 fillRule = "evenodd"  </style> </defs> <clipPath id="clipShape2"> <path class="item__clippath" d=""></path> <path fill="" d=""> <animate repeatCount="indefinite" attributeName="d" dur="3s" values="M405,0C562.4,0,854.441,272.758,630,365,456.674,436.234,481.068,563.915,325,539-158.454,461.819,7,5.4,129,57,273.968,118.313,247.6,0,405,0Z;M405,0C570.256,4.24,832.675,201.341,647.272,374.324,540.822,473.644,481.068,563.915,325,539-158.454,461.819,7,105.4,129,57,275.308-1.045,247.651-4.039,405,0Z;M405,0C562.4,0,854.441,272.758,630,365,456.674,436.234,481.068,563.915,325,539-158.454,461.819,7,5.4,129,57,273.968,118.313,247.6,0,405,0Z"></animate> </path> </clipPath> <g class="item__deco"> <use xlinkHref="#deco2"></use> </g> <g clip-path="url(#clipShape2)"> <image class="item__img" xlinkHref="http://ailab.jwsthemeswp.com/wp-content/uploads/2020/11/imagecoverpng.jpg" x="0" y="-99" height="800px" width="800px"></image> </g> </svg>
                    </div>
                    
                    <p className="text-sm text-gray-500">AI Lab is an artificial intelligence company that excels in visual recognition, solving real-world problems for businesses.</p>

                    <div className="flex space-x-3">
                        <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><g><path d="m504.855 210.343-97.855-60.143v-135.2c0-8.284-6.716-15-15-15h-272c-8.284 0-15 6.716-15 15v135.2l-97.854 60.143c-4.434 2.725-7.138 7.554-7.146 12.758s2.683 10.04 7.108 12.778l97.892 60.559v200.562c0 8.284 6.716 15 15 15h272c8.284 0 15-6.716 15-15v-200.562l97.892-60.559c4.426-2.738 7.116-7.574 7.108-12.778s-2.712-10.034-7.145-12.758zm-369.855-180.343h242v101.762l-113.145-69.541c-4.818-2.961-10.891-2.961-15.709 0l-113.146 69.541zm242 136.975v112.744l-121 74.854-121-74.854v-112.744l121-74.368zm-333.421 56.189 61.421-37.75v75.746zm333.421 258.836h-242v-167.004l113.108 69.972c2.418 1.495 5.155 2.243 7.892 2.243 2.736 0 5.474-.748 7.892-2.243l113.108-69.972zm30-220.84v-75.746l61.421 37.75z"></path><path d="m226 437c0 8.284 6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15z"></path><path d="m248.558 135.416-65.333 37.333c-4.673 2.671-7.558 7.641-7.558 13.023v74.666c0 5.383 2.885 10.353 7.558 13.023l65.333 37.333c2.306 1.317 4.874 1.977 7.442 1.977s5.137-.659 7.442-1.977l65.333-37.333c4.673-2.671 7.558-7.641 7.558-13.023v-74.666c0-5.383-2.885-10.353-7.558-13.023l-65.333-37.333c-4.611-2.635-10.273-2.635-14.884 0zm-42.891 76.204 35.333 20.191v40.113l-35.333-20.19zm65.333 60.304v-40.113l35.333-20.19v40.113zm20.1-86.151-35.1 20.056-35.1-20.057 35.1-20.057z"></path></g></svg>
                        <div className="space-y-2">
                            <p className="text-gray-800 font-semibold text-lg ">Augmented Reality</p>
                            <p className="text-sm text-gray-500">It is a discipline that focuses on the interaction between data science and human language</p>
                        </div>
                    </div>

                    <div className="flex space-x-3">
                        <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><g><path d="m15 90c8.284 0 15-6.716 15-15v-45h45c8.284 0 15-6.716 15-15s-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15z"></path><path d="m497 0h-60c-8.284 0-15 6.716-15 15s6.716 15 15 15h45v45c0 8.284 6.716 15 15 15s15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"></path><path d="m497 422c-8.284 0-15 6.716-15 15v45h-45c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"></path><path d="m75 482h-45v-45c0-8.284-6.716-15-15-15s-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m487.421 265.998c5.09-5.693 5.09-14.302 0-19.995-1.181-1.321-29.406-32.714-71.597-64.485-51.827-39.028-100.46-60.771-144.824-64.814v-101.704c0-8.284-6.716-15-15-15s-15 6.716-15 15v101.704c-44.364 4.042-92.997 25.786-144.824 64.813-42.191 31.771-70.415 63.164-71.597 64.485-5.09 5.693-5.09 14.302 0 19.995 1.181 1.321 29.406 32.714 71.597 64.485 51.827 39.027 100.46 60.771 144.824 64.814v101.704c0 8.284 6.716 15 15 15s15-6.716 15-15v-101.704c44.364-4.043 92.997-25.786 144.824-64.814 42.191-31.771 70.416-63.164 71.597-64.484zm-31.928-9.991c-13.596 13.728-40.622 39.316-74.179 62.361 9.391-18.791 14.686-39.971 14.686-62.368 0-22.363-5.279-43.514-14.645-62.285 33.525 23.032 60.543 48.584 74.138 62.292zm-184.493-47.705c20.264 6.387 35 25.352 35 47.698s-14.736 41.311-35 47.698zm-30 95.396c-20.264-6.387-35-25.353-35-47.698s14.736-41.311 35-47.698zm95-47.698c0-38.984-28.036-71.526-65-78.569v-30.403c53.583 7.339 95 53.406 95 108.973s-41.417 101.634-95 108.973v-30.403c36.964-7.045 65-39.587 65-78.571zm-95-108.973v30.403c-36.964 7.043-65 39.585-65 78.569s28.036 71.526 65 78.569v30.403c-53.583-7.339-95-53.406-95-108.973s41.417-101.632 95-108.971zm-184.493 108.966c13.596-13.728 40.623-39.316 74.179-62.36-9.391 18.791-14.686 39.971-14.686 62.367 0 22.363 5.28 43.514 14.644 62.285-33.524-23.031-60.542-48.584-74.137-62.292z"></path></g></svg>
                        <div className="space-y-2">
                            <p className="text-gray-800 font-semibold text-lg ">Augmented Reality</p>
                            <p className="text-sm text-gray-500">It is a discipline that focuses on the interaction between data science and human language</p>
                        </div>
                    </div>
                </div>

                <div className="md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="712" height="542" viewBox="0 0 712 542"> <defs> <style> .cls-1 fillRule = "evenodd"  </style> </defs> <clipPath id="clipShape2"> <path class="item__clippath" d=""></path> <path fill="" d=""> <animate repeatCount="indefinite" attributeName="d" dur="3s" values="M405,0C562.4,0,854.441,272.758,630,365,456.674,436.234,481.068,563.915,325,539-158.454,461.819,7,5.4,129,57,273.968,118.313,247.6,0,405,0Z;M405,0C570.256,4.24,832.675,201.341,647.272,374.324,540.822,473.644,481.068,563.915,325,539-158.454,461.819,7,105.4,129,57,275.308-1.045,247.651-4.039,405,0Z;M405,0C562.4,0,854.441,272.758,630,365,456.674,436.234,481.068,563.915,325,539-158.454,461.819,7,5.4,129,57,273.968,118.313,247.6,0,405,0Z"></animate> </path> </clipPath> <g class="item__deco"> <use xlinkHref="#deco2"></use> </g> <g clip-path="url(#clipShape2)"> <image class="item__img" xlinkHref="http://ailab.jwsthemeswp.com/wp-content/uploads/2020/11/imagecoverpng.jpg" x="0" y="-99" height="800px" width="800px"></image> </g> </svg>
                </div>
            </div>
        )
    }
}

export default Section5