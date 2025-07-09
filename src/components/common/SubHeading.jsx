import React from 'react'

const SubHeading = ({ text1 = '', class1 = '', text2 = '', class2 = '', text3 = '', class3 = '', className = '' }) => {
    return (
        <h2 className={`font-light text-[64px] leading-[130%] ${className} `}>
            <span className={`${class1}`}>{text1}</span> <span className={`${class2}`}>{text2}</span> <span className={`${class3}`}>{text3}</span>
        </h2>
    )
}

export default SubHeading