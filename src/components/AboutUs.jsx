import React from 'react'
import Button from './common/Button'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import circle from '../assets/png/section2.png'

const AboutUs = () => {
    return (
        <div id='about' className='bg-[#A68272] '>
            <div className='max-w-[1140px] mx-auto px-3 pt-[85px] pb-[62px] '>
                <div className="flex flex-wrap">
                    <div className="w-1/2 ">
                        <Button
                            text='About Us'
                            className='py-[5px] px-5 mb-[15px] '
                        />

                        <SubHeading
                            className='mb-[15px] text-white '
                            text1='Pioneering Crypto'
                            class1='italic '
                            text2='and Primary Market'
                            class2='font-bold '
                            text3='Ventures'
                            class3='italic '
                        />

                        <Description
                            text='ZenPeak Capital is a forward-thinking venture firm specializing in innovative investments within the realms of cryptocurrency and primary markets. With a keen eye on emerging trends and disruptive technologies, we are dedicated to identifying and nurturing high-potential opportunities that yield both financial returns and transformative impact.'
                            className='mb-[10px] text-[#E4D9D4] '
                        />

                        <Description
                            text='At ZenPeak Capital, we harness strategic investment to fuel positive change and drive growth. Focusing on established crypto assets and emerging primary market ventures, our experienced team crafts a diversified portfolio primed for long-term success.'
                            className='text-[#E4D9D4] '
                        />
                    </div>

                    <div className="w-1/2 px-3 flex items-center justify-end">
                        <img src={circle} alt="image" draggable='false' className='max-w-[471px] w-full ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs