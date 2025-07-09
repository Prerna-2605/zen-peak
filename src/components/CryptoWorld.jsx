import React from 'react'
import SubHeading from './common/SubHeading'
import Descrpition from './common/Description'
import bgimg from '../assets/png/section4.png'
import { Crypto_World } from '../utils/helper'

const CryptoWorld = () => {
    return (
        <div className='bg-[#F7F3F0] pb-[145px] '>
            <div>
                <div className='max-w-[1140px] mx-auto px-3 '>
                    <SubHeading
                        className='max-w-[735px] mx-auto text-[#5A5656] capitalize text-center mb-[15px] '
                        text1='Let’s together'
                        class1='italic '
                        text2='make the crypto world'
                        class2='font-bold '
                        text3='great!'
                        class3='italic '
                    />

                    <Descrpition
                        text='Pretium id amet at iaculis sit orci enim. Fames in eget neque vitae iaculis diam. Malesuada adipiscing integer tempor natoque accumsan et.'
                        className='max-w-[675px] mx-auto text-center text-[#6F6D6C] leading-[150%] mb-[68px] '
                    />
                </div>
            </div>
            <div className='bg-center bg-no-repeat py-[25px] ' style={{ backgroundImage: `url(${bgimg})` }}>
                <div className='max-w-[838px] mx-auto border-[3px] border-[#A68272] rounded-[17px] py-[38px] px-[42px] bg-[#FFFFFF] grid grid-cols-2 gap-x-[25px] gap-y-[35px] '>
                    {Crypto_World.map((items, index) => (
                        <div key={index} className='border rounded-2xl py-5 px-[23px] flex items-center gap-[23px] '>
                            <div className='bg-[#A68272] size-[73px] rounded-[14px] flex items-center justify-center shadow-brown '>
                                <items.icon/>
                            </div>
                            <div>
                                <p className='font-bold text-2xl mb-[9px] '>
                                    {items.name}
                                </p>
                                <a href={`mailto:${items.mail}`} className='font-normal text-base text-[#717171] leading ' >
                                    {items.mail}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CryptoWorld