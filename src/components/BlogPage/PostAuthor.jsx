import React from 'react'
import AuthorImg from "../../assets/Images/author-picture.png"
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { IoIosLink } from 'react-icons/io';


export default function PostAuthor() {
    return (
        <>
            <div className='container'>
                <div className='py-[32px] ps-[40px] bg-[#b27409] rounded-[10px] mb-[100px] w-[904px] mx-auto'>
                    <div className='flex gap-[32px]'>
                        <div className='w-[72px]'>
                            <img src={AuthorImg} className='w-[72px] h-[72px] min-w-[72px] rounded-[200px]' alt="" />
                        </div>
                        <div className='w-[600px]'>
                            <h3 className="text-white text-2xl font-bold font-[Inria] capitalize leading-normal mb-[4px]">Leslie Alexander</h3>
                            <p className="text-white text-base font-normal font-[Inter] mb-[16px]">Solar energy specialist</p>
                            <p className="text-white text-lg font-normal font-['Inter']">Leslie Alexander is a distinguished Solar Energy Specialist at the forefront of the renewable energy revolution. With a passion for sustainable technology and a commitment to addressing the global energy crisis, Leslie has dedicated her career to advancing the field of solar energy.</p>
                        </div>
                        <div className=' w-[100px]'>
                            <p className="text-white text-sm font-normal font-['Inter'] text-end">Share</p>
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
        </>

    )
}
