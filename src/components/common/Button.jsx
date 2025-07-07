import React from 'react'

const Button = ({text='', className='' }) => {
  return (
    <button className={`font-simple text-lg font-medium text-white border border-white rounded-full hover:scale-[1.025] active:scale-95 transition-all duration-200 cursor-pointer ${className}`}>
        {text}
    </button>
  )
}

export default Button