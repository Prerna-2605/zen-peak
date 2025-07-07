import React from 'react'
import bgimg from '../assets/png/section1.png'
import logo from '../assets/svg/logo.svg'
import Button from './common/Button'

const Hero = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat pb-[596px] ' style={{backgroundImage: `url(${bgimg})`}}>
        <div className="max-w-[1140px] mx-auto px-3 pt-[99px] ">
            <img src={logo} alt="logo" className='mx-auto mb-[28.92px] ' />

            <h1 className='italic font-light text-[75px] text-white leading-[130%] text-center max-w-[1032px] mx-auto mb-10 '>
                Exploring <span className='font-simple font-bold '>Crypto and Primary</span> Market Strategies
            </h1>

            <div className='text-center '>
                <Button
                text='Contact Us'
                className='py-[25px] px-[50px] '
                />
            </div>
        </div>
    </div>
  )
}

export default Hero