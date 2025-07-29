import React, { useEffect } from 'react'
import bgimg from '../assets/webp/footer.webp'
import logo from '../assets/svg/logo.svg'
import Description from './common/Description'
import { HashLink } from 'react-router-hash-link';
import { Footer_links, Nav_Link } from '../utils/helper'
import { Link } from 'react-router-dom';

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

    const year = new Date().getFullYear();

    return (
        <div className='pt-[72.5px] bg-[#F7F3F0] '>
            <div className='bg-center bg-cover bg-no-repeat relative ' style={{ backgroundImage: `url(${bgimg})` }}>
                <div
                    id="particles-footer"
                    className="absolute top-0 left-0 w-full h-full z-0"
                ></div>

                <div className='max-w-[1140px] mx-auto px-3 pt-15 sticky z-1 '>
                    <HashLink smooth to={'/#home'} >
                        <img src={logo} alt="logo" className='max-w-[254px] w-full mx-auto mb-4 ' />
                    </HashLink>

                    <Description
                        text='Pulvinar scelerisque viverra at donec nunc orci ullam corper penatibus crasigula. '
                        className='leading-[150%] text-[#C1C1C1] max-w-[401px] mx-auto text-center mb-[25px] '
                    />

                    <div className='flex gap-5 max-w-[507px] mx-auto mb-[25px] '>
                        {Nav_Link.map((item, index) => (
                            <HashLink key={index} smooth to={`/#${item.link}`} className='group capitalize font-normal text-base text-white leading-[150%] relative hover:scale-105 hover:-translate-y-1 transition-all duration-300 ' >
                                {item.name}

                                <span className='absolute w-0 h-[1.5px] bg-white left-0 -bottom-[2px] rounded-full group-hover:w-full transition-all duration-300 ' ></span>
                            </HashLink>
                        ))}
                    </div>

                    <div className='flex gap-[11px] justify-center mb-[50px] '>
                        {Footer_links.map((items, index) => (
                            <a key={index} href={items.link} className='hover:-translate-y-1 hover:scale-105 transition-all duration-300 '>
                                <div className='size-10 flex items-center justify-center bg-[#A68272] rounded-full '>

                                    <img src={items.icon} alt="icon" />

                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className='py-[18px] border-t border-[#565556] sticky z-1 '>
                    <div className='max-w-[1140px] mx-auto flex items-center justify-between '>
                        <a href="/" className='font-normal text-base text-[#C1C1C1] ' >
                            Privacy Policy | Conditions
                        </a>

                        <Description
                            text={`ZenPeak | Copyright©${year}`}
                            className='text-[#C1C1C1] '
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer