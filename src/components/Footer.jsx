import React, { useEffect } from 'react'
import bgimg from '../assets/webp/footer.webp'
import logo from '../assets/svg/logo.svg'
import Description from './common/Description'
import { HashLink } from 'react-router-hash-link';
import { Footer_links, Nav_Link } from '../utils/helper'

const Footer = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load('particles-footer', '/particlesjs-config.json', function () { });
        }
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-center bg-cover bg-no-repeat relative ' style={{ backgroundImage: `url(${bgimg})` }}>
            <div
                id="particles-footer"
                className="absolute top-0 left-0 w-full h-full z-0"
            ></div>
            <div className='max-w-[1140px] mx-auto px-3 pt-15 sticky z-1 '>
                <img src={logo} alt="logo" className='max-w-[254px] w-full mx-auto mb-4 ' />

                <Description
                    text='Pulvinar scelerisque viverra at donec nunc orci ullam corper penatibus crasigula. '
                    className='leading-[150%] text-[#C1C1C1] max-w-[401px] mx-auto text-center mb-[25px] '
                />

                <div className='flex gap-5 max-w-[507px] mx-auto mb-[25px] '>
                    {Nav_Link.map((item, index) => (
                        // <NavLink to={`/#${item.link}`} smooth scroll className="text-white">
                        //     {item.name}
                        // </NavLink>
                        <HashLink key={index} smooth to={`/#${item.link}`} className='capitalize font-normal text-base text-white leading-[150%] ' >
                            {item.name}
                        </HashLink>
                    ))}
                </div>

                <div className='flex gap-[11px] justify-center mb-[50px] '>
                    {Footer_links.map((items, index) => (
                        <div key={index} className='size-10 flex items-center justify-center bg-[#A68272] rounded-full '>
                            <a href="">
                                <img src={items.icon} alt="icon" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-[18px] border-t border-[#565556] '>
                <div className='max-w-[1140px] mx-auto flex items-center justify-between '>
                    <a href="" className='font-normal text-base text-[#C1C1C1] ' >
                        Privacy Policy | Conditions
                    </a>

                    <Description
                        text='ZenPeak | Copyright©2024'
                        className='text-[#C1C1C1] '
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer