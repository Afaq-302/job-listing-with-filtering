import React from "react";
import Image from "next/image";

const Card = () => {
    return <>
        <div className="Card-component relative  h-[120px] mx-32 my-8 bg-white rounded-lg shadow-lg px-6 py-3 overflow-hidden group">
            <div className="absolute inset-0 border-l-4 border-transparent group-hover:border-[#5aa5a1] transition-all duration-300"></div>
            <div className="grid grid-cols-4">
                <div className=" col-span-2 gap-6 flex flex-row ">
                    <Image width={90} height={90} src={"images/photosnap.svg"} alt="card-component-image"
                    />
                    <div className="flex flex-col justify-center details-box ">
                        <div className="features-box flex gap-3">
                            <h4 className="text-[#6e9c99] text-[14px] font-bold">Photosnap</h4>

                            <div className="flex flex-row items-center">
                                <span className="text-white rounded-lg bg-[#6c9f9e] py-[2px] px-[6px] text-[12px] font-semibold">NEW!</span>
                                <span className="text-white rounded-lg bg-black ml-2 py-[2px] px-[6px] text-[12px] font-semibold">FEATURED</span>
                            </div>
                        </div>
                        <h3 className="text-[#2a3533] font-bold text-[18px]">Senior Frontend Developer</h3>
                        <div className="flex gap-4">
                            <li className="text-[#828b8c] list-none text-[14px] font-semibold">1d ago</li>
                            <li className="text-[#828b8c] text-[14px] font-semibold">Full Time</li>
                            <li className="text-[#828b8c] text-[14px] font-semibold">USA only</li>
                        </div>
                    </div>
                </div>

                <div className="tags-box col-span-2 flex flex-row-reverse items-center px-4 py-4">
                    <span class="font-semibold text-[#5aa5a7] px-2 py-1 bg-[#eef8f7] rounded-md mx-1">Frontend</span>
                </div>
            </div>

        </div>


    </>
}

export default Card;
