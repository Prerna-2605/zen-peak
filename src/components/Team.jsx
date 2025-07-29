import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import bgimg from '../assets/webp/section4.webp'
import { Our_team } from '../utils/helper'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'

const Team = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleBio = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id='team' className='team bg-[#F7F3F0] bg-center bg-no-repeat pb-[92.5px] ' style={{ backgroundImage: `url(${bgimg})` }} >
            <div className='max-w-[1140px] mx-auto px-3 '>
                <SubHeading
                    className='!text-[#5A5656] '
                    text1='Meet'
                    class1='italic '
                    text2='With Our'
                    class2='font-bold '
                    text3='Team'
                    class3='italic '
                />
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={24}
                >
                    {Our_team.map((member, i) => (
                        <SwiperSlide
                            key={i}
                            className='rounded-sm transition-all duration-500 relative '
                        >
                            <div
                                onClick={() => toggleBio(i)}
                                className='flex gap-[13px] items-center absolute top-[13.87px] left-[13.31px] z-1 '>
                                <div className={`size-17 bg-[#A68272] rounded-[1.66px] flex items-center justify-center cursor-pointer hover:scale-105 transition-[scale] duration-200 ${openIndex === i ? 'shadow-lg' : ''} `}>
                                    <div className='border-[3px] border-white w-[28.58px] '></div>

                                    <div className={`border-[3px] border-white w-[28.58px] absolute transition-all duration-300 ${openIndex === i ? 'rotate-180' : 'rotate-90 '} `}></div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <p
                                        className={`font-medium text-base text-white uppercase transition-all duration-300 ease-in-out ${openIndex === i ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}
                                    >
                                        Show Bio
                                    </p>
                                    <p
                                        className={`font-medium text-base text-white uppercase absolute top-0 left-0 right-0 transition-all duration-300 ease-in-out ${openIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                                    >
                                        Hide Bio
                                    </p>
                                </div>
                            </div>

                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full mb-5 "
                            />

                            <div
                                className={`absolute left-0 top-0 w-full h-full bg-[#A68272] px-[35px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${openIndex === i ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                            >
                                <p className="font-medium text-base text-white mb-[21px] ">
                                    Bio
                                </p>

                                <p className="font-normal text-base text-[#E4D9D4] leading-[150%] text-center ">
                                    {member.bio}
                                </p>
                            </div>

                            <p className="text-base font-bold mb-[5px] ">
                                {member.name}
                            </p>

                            <p className="font-normal text-base text-[#535363] ">
                                {member.job}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Team