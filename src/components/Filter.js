import React from "react";

const FilterBox = () => {
    return <>
        {/* FILTER BOX CONTAINER */}
        <div className="filter-box flex flex-row items-center justify-between relative bottom-[34px] h-[70px] px-6 py-3 mx-32 bg-white rounded-lg shadow-lg">
            {/* FILTER BOX ITEMS CONATINER */}
            <div className='flex flex-row items-center'>
                {/* FILTER BOX ITEM */}
                <div className='filter-box-item'>
                    <span className='font-semibold text-[#5aa5a7] px-2 py-1 bg-[#eef8f7] rounded-l-md '>Frontend</span>
                    <span className='bg-[#5ba4a3] px-3 py-1 text-white font-semibold rounded-r-md cursor-pointer hover:bg-[#293737]'>X</span>
                </div>
            </div>

            <div className='clear'>
                <span className='font-semibold text-[#5aa5a7] cursor-pointer hover:underline'>Clear</span>

            </div>

        </div>
    </>
}

export default FilterBox;