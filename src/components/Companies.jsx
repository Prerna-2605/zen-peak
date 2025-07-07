import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Company } from '../utils/helper';

const Companies = () => {
    return (
        <div className='bg-[#F7F3F0] pt-16 pb-[162px] '>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                speed={6000}
                autoplay={{
                    delay: 0, // no pause between slides
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 }
                }}
            >
                {Company.map((items, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex justify-center items-center py-[22px] px-4 '>
                            <img src={items.image} alt={items.alt} className='grayscale hover:grayscale-0 transition-all duration-300 ' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Companies