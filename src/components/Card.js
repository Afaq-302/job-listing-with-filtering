import React from "react";
import Image from "next/image";



const Card = ({ data, onFilterClick }) => {

    function handleFilterClick(value) {
        onFilterClick(value)
    }


    // { "id": 1, "company": "Photosnap", "logo": "./images/photosnap.svg", "new": true, "featured": true, "position": "Senior Frontend Developer", "role": "Frontend", "level": "Senior", "postedAt": "1d ago", "contract": "Full Time", "location": "USA Only", "languages": ["HTML", "CSS", "JavaScript"], "tools": [] }
    console.log(data);
    // const filteredData = filter ? data.filter(item => item.role === filter) : data;
    return <>
        {data.map((job, index) => (
            <div key={index} className="Card-component relative  h-[120px] mx-32 my-8 bg-white rounded-lg shadow-lg px-6 py-3 overflow-hidden group">

                <div className="absolute w-[5px] inset-0 border-l-4 border-transparent group-hover:border-[#5aa5a1] transition-all duration-300"></div>

                <div className="grid grid-cols-4">
                    <div className=" col-span-2 gap-6 flex flex-row ">
                        <Image width={90} height={90} src={job.logo} alt="card-component-image"
                        />
                        <div className="flex flex-col justify-center details-box ">
                            <div className="features-box flex gap-3">
                                <h4 className="text-[--dark-cyan] text-[14px] font-bold">{job.company}</h4>

                                <div className="flex flex-row items-center">
                                    {job.new && <span className="text-white rounded-lg bg-[--dark-cyan] py-[2px] px-[6px] text-[12px] font-semibold">NEW!</span>}
                                    {job.featured && <span className="text-white rounded-lg bg-black ml-2 py-[2px] px-[6px] text-[12px] font-semibold">FEATURED</span>}
                                </div>
                            </div>
                            <h3 className="text-[#2a3533] font-bold text-[18px] my-1 cursor-pointer hover:text-[--dark-cyan]">{job.position}</h3>
                            <div className="flex gap-4">
                                <li className="text-[#828b8c] list-none text-[14px] font-semibold">{job.postedAt}</li>
                                <li className="text-[#828b8c] text-[14px] font-semibold">{job.contract}</li>
                                <li className="text-[#828b8c] text-[14px] font-semibold">{job.location}</li>
                            </div>
                        </div>
                    </div>

                    <div className="tags-box col-span-2 flex flex-row items-center justify-end px-4 py-4">
                        <span className="font-semibold text-[--dark-cyan] px-2 py-1 bg-[--light-cyan] rounded-md mx-1 cursor-pointer hover:text-white hover:bg-[--dark-cyan]"
                            onClick={() => handleFilterClick(job.role)}
                        >{job.role}</span>
                        <span className="font-semibold text-[--dark-cyan] px-2 py-1 bg-[--light-cyan] rounded-md mx-1 cursor-pointer hover:text-white hover:bg-[--dark-cyan]"
                            onClick={() => handleFilterClick(job.level)}
                        >{job.level}</span>

                        {job.tools.map((tool, index) => (
                            <div key={index} className="font-semibold text-[--dark-cyan] px-2 py-1 bg-[--light-cyan] rounded-md mx-1 cursor-pointer hover:text-white hover:bg-[--dark-cyan]" onClick={() => handleFilterClick(tool)}>{tool}</div>
                        ))}

                        {job.languages.map((language, index) => (
                            <span key={index}
                                onClick={() => handleFilterClick(language)}
                                className="font-semibold text-[--dark-cyan] px-2 py-1 bg-[--light-cyan] rounded-md mx-1 cursor-pointer hover:text-white hover:bg-[--dark-cyan]" >
                                {language}
                            </span>
                        ))}

                    </div>
                </div>

            </div >
        ))}


    </>
}

export default Card;
