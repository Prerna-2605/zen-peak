import React from 'react'
import SubHeading from './common/SubHeading'
import bgimg from '../assets/webp/section4.webp'
import { Our_team } from '../utils/helper'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'

const Team = () => {
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
                            <div className='flex gap-[13px] items-center absolute top-[13.87px] left-[13.31px] '>
                                <div className='size-17 bg-[#A68272] rounded-[1.66px] flex items-center justify-center cursor-pointer hover:scale-105 transition-[scale] duration-200 '>
                                    <div className='border-[3px] border-white w-[28.58px] '></div>
                                    <div className='border-[3px] border-white w-[28.58px] rotate-90 absolute '></div>
                                </div>

                                <p className='font-medium text-base text-white uppercase '>
                                    Show Bio
                                </p>


                            </div>
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full mb-5 "
                            />
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