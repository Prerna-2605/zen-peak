import React from 'react'
import asset from '../assets/webp/asset.webp'
import SubHeading from './common/SubHeading'
import Description from './common/Description'

const Asset = () => {
    return (
        <div className='bg-[#F7F3F0] pb-[139px] '>
            <div className='max-w-[1140px] mx-auto px-3 py-[45px] rounded-2xl bg-[#A68272] '>
                <div className='flex flex-wrap items-center '>
                    <div className='w-1/2 flex justify-center '>
                    <img src={asset} alt="image" />
                    </div>

                    <div className='w-1/2 px-3 '>
                        <SubHeading
                            className='mb-[15px] text-white '
                            text1='Institutional'
                            class1='italic '
                            text2='Asset Allocation in'
                            class2='font-bold '
                            text3='Crypto'
                            class3='italic '
                        />

                        <Description
                            text='Pulvinar scelerisque viverra at donec nunc orci ullam corper Penatibus crasigula praesent dictum fames suscipit nam. '
                            className='leading-[150%] mb-[25px] text-[#E4D9D4] max-w-[500px] '
                        />

                        <div className='flex gap-[15px] max-w-[491px] items-center '>
                            <div className='border-[3px] border-white h-[92px] rounded-[115px] '></div>
                            <div>
                                <p className='font-bold text-[20px] text-[#EDE6E3] mb-[10px] '>
                                    Consectetur sagittis
                                </p>
                                
                                <Description
                                    text='Fermentum praesent vel adipiscing eget dictum. Risus id tellus mauris lorem ornare titor a neque nullam libero nunc eget.'
                                    className='leading-[150%] text-[#E4D9D4] '
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asset