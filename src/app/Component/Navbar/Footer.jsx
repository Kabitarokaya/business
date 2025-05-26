import React from 'react'
import { LuMail } from "react-icons/lu";

function Footer() {
    return (
        <>
            <footer className='bg-[#533FD7] text-white py-7 mt-8'>
                <div className="container mx-auto  text-center">
                    <div className="border-b py-4 border-[#7766e8]">

                        <h1 className='text-[42px] py-4'>Get Funded Today!</h1>
                        <div className='flex my-6 items-center mx-auto w-[500px] h-[70px] rounded-full bg-white px-3'>
                            <div className='flex items-center'><LuMail className='size-[30px] pr-2 text-[#909090]' /><input type="email" name='email' placeholder='Enter email' className=' outline-none text-black w-[300px]' /> </div>
                            <button className='w-[120px] py-3  my-1 text-white rounded-full bg-[#00CAF9]'>Get Funded</button>

                        </div>
                    </div>
                    <div className="border-b py-6 my-3  border-[#7766e8]">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-5">
                            <h2>Home</h2>
                            <h1>what we do</h1>
                            <h1>how it works</h1>
                            <h2>who we invest in</h2>
                            <h2>testimonials</h2>
                        </div>

                    </div>
                    <h2 className='text-[18px] pt-7'>Made with ❤️ by ZAINKEEPSCODE</h2>

                </div>
            </footer>
        </>
    )
}

export default Footer
