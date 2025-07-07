import React from 'react'

const Description = ({ className = '', text = '' }) => {
    return (
        <p className={`font-simple font-normal text-base leading-[150%] ${className} `}>
            {text}
        </p>
    )
}

export default Description