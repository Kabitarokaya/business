"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { BsListNested } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [mobilemenuopen, setMobilemenuopen] = useState(false)
    return (
        <>
            <nav>
                <div className="container sm:hidden lg:flex items-center p-6 font-[500] text-white justify-between mx-auto">

                    {/* left side */}
                    <div className="cursor-pointer font-[500]">
                        <Link href="/"><img src="https://go.demo.nextjstemplates.com/images/logo/logo-light.svg" alt="" className="w-[200px]" /></Link>
                    </div>
                    {/*right side  */}
                    <div className="lg:flex sm:hidden gap-8 uppercase items-center justify-center text-[16px]">

                        <ul className=' flex gap-4'>
                            <Link href=""><li>What we do</li></Link>
                            <Link href=""><li>How it works</li></Link>
                            <Link href=""><li>who we invest</li></Link>
                            <Link href=""><li>Testimonials</li></Link>
                        </ul>
                        <div className='text-[#000] bg-[#54f3a6] px-8 py-3 text-[16px] capitalize rounded-full'>Get funded</div>


                    </div>

                </div>

                <div className="container lg:hidden sm:flex items-center p-6 font-[500] text-white justify-between mx-auto">
                    <div className="cursor-pointer  font-bold">
                        <Link href="/"><img src="https://go.demo.nextjstemplates.com/images/logo/logo-light.svg" alt="" className="w-[200px]" /></Link>
                    </div>

                    <div className='flex '>

                        {!mobilemenuopen ? (
                            <BsListNested className='size-[34px] text-white ' onClick={() => setMobilemenuopen(true)} />
                        )
                            : (
                                <RxCross2 className='size-[32px] text-white' onClick={() => setMobilemenuopen(false)} />)

                        }

                        <div className='fixed top-[10%] py-20 px-20 aa  w-[100%] h-[100vh] box-border left-0   flex-col z-[99] text-[20px] bg-[#533fd7]' style={{ transform: mobilemenuopen && "translateX(0%)" }}>
                            <ul className=' flex flex-col gap-4'>
                                <Link href="/Whatwedo/"><li className='mb-8 border-b border-[#6a55f8] pb-4'>What we do</li></Link>
                                <Link href="/how it work/"><li className='mb-8 border-b border-[#6a55f8] pb-4'>How it works</li></Link>
                                <Link href=""><li className='mb-8 border-b border-[#6a55f8] pb-4'>who we invest</li></Link>
                                <Link href=""><li className='mb-8 border-b border-[#6a55f8] pb-4'>Testimonials</li></Link>
                            </ul>
                            <div className='text-[#000] bg-[#54f3a6] text-center w-full py-3.5 mt-4 text-[16px] capitalize rounded-full'>Get funded</div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
Navbar