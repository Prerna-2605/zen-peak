import React, { useState } from 'react'
import bgimg from '../assets/webp/section5.webp'
import SubHeading from './common/SubHeading'
import { Portfolio } from '../utils/helper'
import Description from './common/Description'

const Invest = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div id='portfolio'>
            <div className='bg-[#F7F3F0] bg-center bg-cover bg-no-repeat pt-[92.5px] ' >
                <div className="max-w- mx-auto px-3">
                    <SubHeading
                        className='text-[#5A5656] max-w-[738px] pb-11 text-center mx-auto '
                        text1='Invest'
                        class1='font-bold '
                        text2='Cryptocurrency'
                        class2='italic '
                        text3='Portfolio'
                        class3='font-bold '
                    />
                </div>
            </div>
            <div className='bg-[#F7F3F0] bg-center bg-cover bg-no-repeat pb-[41px] ' style={{ backgroundImage: `url(${bgimg})` }} >
                <div className='max-w-[631px] mx-auto py-[21px] px-[25px] bg-[#DFBCA6] border-[3px] border-[#A68272] rounded-[17px] flex flex-col gap-[21px]'>
                    {Portfolio.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div key={index} className='w-full transition-all duration-400 ease-in-out'>
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`bg-white w-full text-left flex flex-col gap-[15px] items-start px-[26px] py-[26px] transition-all duration-300 ease-in-out cursor-pointer ${isOpen ? 'rounded-[16px] border border-[#A68272] ' : 'rounded-full border-transparent '}`}
                                >
                                    <div className='flex items-start gap-[19px]'>
                                        <img
                                            src={item.icon}
                                            alt="icon"
                                            className={`transition-transform duration-300 w-[60px] ${isOpen ? 'scale-125' : 'scale-100'} ${index === 0 ? 'max-w-full' : 'max-w-[50px]'}`} />
                                        
                                        <div className='flex flex-col justify-center '>
                                            <p className='font-bold text-2xl capitalize text-[#3D3B3B]'>
                                                {item.name}
                                            </p>

                                            <div
                                                className={`text-[#5A5656] text-base font-normal leading-[24px] max-w-[470px] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-[300px]' : 'opacity-0 max-h-0 overflow-hidden'
                                                    }`}
                                            >
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>


                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Invest