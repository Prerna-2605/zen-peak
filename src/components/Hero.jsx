import React from 'react'
import bgimg from '../assets/webp/section1.webp'
import logo from '../assets/svg/logo.svg'
import Button from './common/Button'

const Hero = () => {
  return (
    <div id='home' className='bg-cover bg-center bg-no-repeat pb-[650px] ' style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="max-w-[1140px] mx-auto px-3 pt-[99px] ">
        <img src={logo} alt="logo" className='mx-auto mb-[28.92px] ' />

        <h1 className='font-light text-[75px] text-white leading-[130%] text-center max-w-[1032px] mx-auto mb-10 '>
          <span className='italic '>Exploring</span> <span className='font-simple font-bold '>Crypto and Primary</span> <span className='italic' >Market Strategies</span>
        </h1>

        <div className='text-center '>
          <Button
            text='Contact Us'
            className='!text-[20px] py-[25px] px-[50px] '
          />
        </div>
      </div>
    </div>
  )
}

export default Hero