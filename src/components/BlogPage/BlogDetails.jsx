import React from 'react'
import BlogDetailsImg from '../../assets/Images/blog-details-img.png'
import Star from "../../assets/Images/Stars.png"
import FeatureSolerImg from "../../assets/Images/feature-soler-img.png"
import AuthorImg from "../../assets/Images/author-2-img.png"
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'

export default function BlogDetails() {
    return (
        <>
            <div className='container '>

                <div className='relative'>
                    <div className='absolute h-[653px] top-0 left-0 right-0 z-[-1] rounded-[32px] bg-[#B27409] ' >
                        <img src={Star} alt="" className='' />
                    </div>

                    <div className='flex gap-[65px]'>
                        <div className='w-[25%] text-white'>
                            <div className='text-center h-[500px] flex justify-center items-end'>
                                <div>
                                    <div className='mb-[16px]' >
                                        <img src={AuthorImg} alt="" className='w-14 h-14 rounded-[200px] mx-auto' />
                                    </div>
                                    <h4 className="text-white text-base font-bold mb-[4px] font-['nria] capitalize leading-normal">Leslie Alexander</h4>
                                    <p className="text-white text-sm font-normal font-[Inter]">Designation</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[43%]'>
                            <div className="blog-head pt-[70px]">
                                <h2 className="text-center text-white text-[40px] font-bold font-[Inria] mb-[20px]">Harnessing the Power of the Sun: Exploring the World of Solar Energy</h2>
                                <div className="mb-[70px]">
                                    <ul className='flex justify-center'>
                                        <li className="text-white text-sm font-normal font-[Inter]">9 min read</li>
                                        <li className="text-white text-sm font-normal font-[Inter]">December 11, 2023</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='pb-[68px]'>
                                <img className='w-[800px] h-[532px] rounded-3xl mx-auto' src={BlogDetailsImg} alt="" />
                            </div>

                            <div className="text-[#795d2b] text-lg font-normal font-[Inter] mb-[68px]">
                                <p>In a world increasingly concerned with environmental sustainability and the search for renewable energy sources, solar power has emerged as a shining star. Harnessing the power of the sun, solar energy offers a clean and inexhaustible solution to our growing energy needs. <br />This article delves into the fascinating world of solar energy, exploring its mechanisms, benefits, and the transformative impact it can have on our planet.</p>
                            </div>

                            <div className='mb-[64px]'>
                                <h2 className="text-[#b27409] text-3xl font-bold font-[Inria] leading-[46px] mb-[32px]">The Basics of Solar Energy</h2>
                                <div className='flex flex-col gap-[32px]'>
                                    <div>
                                        <h4 className="text-[#b27409] text-2xl font-bold font-[Inria] capitalize leading-normal mb-[24px]"><span className='mr-[10px]'>1.</span> Photovoltaic Cells</h4>
                                        <ul className='list-disc ml-[24px] '>

                                            <li className="text-[#795d2b] text-lg font-normal font-[Inter] mb-[24px]">Solar panels are made up of photovoltaic (PV) cells that convert sunlight into electricity.</li>

                                            <li className="text-[#795d2b] text-lg font-normal font-[Inter]">When sunlight hits the PV cells, it excites electrons, generating an electric current.</li>

                                        </ul>

                                    </div>
                                    <div>
                                        <h4 className="text-[#b27409] text-2xl font-bold font-[Inria] capitalize leading-normal mb-[24px]"><span className='mr-[10px]'>2.</span>Solar Thermal Systems</h4>
                                        <ul className='list-disc ml-[24px] '>
                                            <li className="text-[#795d2b] text-lg font-normal font-[Inter]">Concentrated solar power (CSP) systems use mirrors or lenses to focus sunlight onto a small area, producing heat that can then be used to generate electricity.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-[#b27409] text-2xl font-bold font-[Inria] capitalize leading-normal mb-[24px]"><span className='mr-[10px]'>3.</span>Net Metering</h4>
                                        <ul className='list-disc ml-[24px] '>
                                            <li className="text-[#795d2b] text-lg font-normal font-[Inter]">Solar energy systems often incorporate net metering, allowing users to sell excess electricity back to the grid, promoting energy efficiency.</li>
                                        </ul>

                                    </div>
                                </div>

                            </div>

                            <div className='mb-[100px]'>
                                <div className='mb-[64px]'>
                                    <img src={FeatureSolerImg} alt="" className='h-[460px] rounded-2xl' />
                                </div>
                                <h4 className="text-[#b47810] text-3xl font-bold font-[Inria] leading-[46px] mb-[32px]">The Future of Solar Energy</h4>
                                <p className='text-[#795d2b] text-lg font-normal font-[Inter]'>As technology advances, the potential for solar energy continues to grow. Innovations in materials, storage, and efficiency are making solar power more accessible and affordable for individuals and businesses alike.
                                    Governments and organizations worldwide are investing in solar research and development, recognizing its pivotal role in creating a sustainable future.
                                    Harnessing the power of the sun through solar energy represents a significant stride towards a cleaner, more sustainable future. As we explore and invest in this remarkable technology, we move closer to a world where our energy needs are met without compromising the health of our planet.
                                    Solar energy is not just a technological advancement; it is a beacon of hope for a greener, more sustainable world.</p>
                            </div>


                        </div>

                        <div className='w-[25%] text-white'>

                            <div className='flex h-[600px] items-end'>
                                <div>
                                    <p className="text-white text-sm font-normal font-[Inter] text-start">Share</p>
                                    <ul className='text-white flex gap-[16px] flex-col items-end mt-[24px]'>
                                        <li>
                                            <a href="" className='text-[20px]'><FaTwitter /></a>
                                        </li>
                                        <li>
                                            <a href="" className='text-[20px]'><FaLinkedin /></a>
                                        </li>
                                        <li>
                                            <a href="" className='text-[20px]'><FaFacebookF /></a>
                                        </li>
                                        <li>
                                            <a href="" className='text-[20px]'><IoIosLink /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
