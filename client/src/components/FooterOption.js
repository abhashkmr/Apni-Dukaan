import React from 'react'


function FooterOption({Icon , title}) {
    return (
        <div className="border-black rounded-lg mx-2  flex flex-col items-center hover:text-blue-500">
            {Icon && <Icon />}
            {/* <p className = "text-black text-xs object-contain "> {title}</p> */}
        </div>
    )
}

export default FooterOption;
