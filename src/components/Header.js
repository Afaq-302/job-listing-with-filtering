/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
    return (
        <div className="h-full bg-[--dark-cyan]">
            <img
                className="w-full"
                src="images/bg-header-desktop.svg"
                alt="headerImage"
            />
        </div>
    )
}

export default Header;