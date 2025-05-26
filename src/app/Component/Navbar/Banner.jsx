import React from 'react'
import { LuMail } from "react-icons/lu";
function Banner() {

  return (
    <>
      <section className='lg:h-[120vh] sm:h-[160vh]  w-[100%] py-10  overflow-hidden bg-[#533fd7] text-white'>
        <div className="container h-[80vh] px-20 justify-between gap-10 items-center sm:flex-wrap lg:flex pt-36 mx-auto ">
          <div className='left'>
            <div className="grid grid-cols-3  ">
              <div className=" bg-[#0be4d1] w-24 rounded-[999px] h-60  overflow-hidden delay-[0.1]">
                <img className='w-[100%] object-cover h-[50%] scale-[2] mt-20'  src="https://digital-business-next.vercel.app/hero/person1.jpg" alt="" />

              </div>
              <div className=" bg-[#fde490] w-24 rounded-[999px] h-60  animate-bounce transform translate-y-[-25%] overflow-hidden delay-[0.3]">
                <img className='w-[100%] object-cover h-[50%] scale-[2] mt-20'  src="https://digital-business-next.vercel.app/hero/person2.jpg" alt="" />

              </div>
              <div className=" bg-[#00c9f7] w-24 rounded-[999px]  duration-100 h-60 overflow-hidden delay-[0.2]">
                <img className='w-[100%] object-cover h-[50%] scale-[2] mt-20'  src="https://digital-business-next.vercel.app/hero/person3.jpg" alt="" />

              </div>

            </div>

            <div className="grid grid-cols-3  mt-20 ">
              <div className=" bg-[#83D1E0] w-24 rounded-[999px] h-60 animate-bounce overflow-hidden delay-[0.2]">
                <img  className='w-[100%] object-cover h-[50%] scale-[2] mt-20' src="https://digital-business-next.vercel.app/hero/person4.jpg" alt="" />

              </div>
              <div className=" bg-[#FE8856] w-24 rounded-[999px] h-60  translate-y-[-25%] overflow-hidden  delay-[0.3]">
                <img className='w-[100%] object-cover h-[50%] scale-[2] mt-20'  src="https://digital-business-next.vercel.app/hero/person5.jpg" alt="" />

              </div>
              <div className=" bg-[#0BE4D1]  w-24 rounded-[999px] h-60  animate-bounce  overflow-hidden delay-[0.25]">
                <img className='w-[100%] object-cover h-[50%] scale-[2] mt-20'  src="https://digital-business-next.vercel.app/hero/person6.jpg" alt="" />

              </div>

            </div>

          </div>
          <div className='right'>

            <div className='text-start'>
              <h1 className='text-[40px] text-[#54F3A6] font-[700]'>Redefine How</h1>
              <p className='text-[40px] text-[#54F3A6] font-bold'>You grow your</p>
              <p className='text-[40px] font-bold text-white'>Digital Business</p>
              <p className='text-[19px] text-white '>Revenue based funding and execution support designed for early stage founders
              </p>
            </div>
            <div className='flex my-6 items-center justify-between w-[500px] h-[70px] rounded-full bg-white px-3'>
              <div className='flex items-center'><LuMail className='size-[30px] pr-2 text-[#909090]' /><input type="email" name='email' placeholder='Enter email' className=' outline-none text-black w-[300px]' /> </div>
              <button className='w-[120px] py-3  my-1 text-white rounded-full bg-[#00CAF9]'>Get Funded</button>

            </div>
          </div>
        </div>
      </section>

      <section className="lg:-mt-24 py-10 sm:mt-10">
        <div className="container mx-auto">
         <div className='flex items-center overflow-hidden justify-center'>
           <video  className='lg:w-[90%] sm:w-[100%] rounded-[40px]  z-[1]'
          loop muted autoPlay controls=""
           src="https://digital-business-next.vercel.app/video.mp4"></video>
         </div>
        </div>
      </section>

    </>
  )
}

export default Banner
