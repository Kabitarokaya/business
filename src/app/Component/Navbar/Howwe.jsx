import React from 'react'

function Howwe() {
    return (
        <>
            <section className="py-8 text-white bg-[#00CAF9]">
                <div className="container  mx-auto">
                    <div className="mx-auto w-[700px] text-center  py-8">
                        <h2 className='text-[24px] font-bold text-white '>Our difference</h2>
                        <h1 className='text-[32px] text-[#1F57CB] font-bold py-4'>Fair capital, hassle free</h1>

                        <p className='text-[18px]'>Our mission is to level the playing field for early stage growth capital.
                            We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation.</p>
                    </div>
                    <div className="py-9  gap-8 grid sm:grid-cols-1 lg:grid-cols-3">
                        <div className="bg-white  sm:w-full lg:w-[400px] h-[400px] text-center rounded-[20px] p-6">
                            <img className='mx-auto w-[100px]' src="https://digital-business-next.vercel.app/_next/image?url=%2FOurDiff%2FFrame-0.png&w=256&q=75" alt="" />

                            <h1 className='text-[#221577] text-[32px] py-2 font-bold'>Data Driven</h1>
                            <p className='text-[#8682BA] text-[18px] py-4'>Our mission is to level the playing field for early stage growth capital. We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation</p>
                        </div>
                        <div className="bg-white sm:w-full lg:w-[400px] h-[400px] text-center rounded-[20px] p-6">
                            <img className='mx-auto w-[100px]' src="https://digital-business-next.vercel.app/_next/image?url=%2FOurDiff%2FFrame-1.png&w=256&q=75" alt="" />

                            <h1 className='text-[#221577] text-[32px] py-2 font-bold'>flexible funding</h1>
                            <p className='text-[#8682BA] text-[18px] py-4'>Funding that flexes as revenue grows with transparent costs and does not require dilution, personal guarantees or pitch decks</p>
                        </div>
                        <div className="bg-white sm:w-full lg:w-[400px] h-[400px] text-center rounded-[20px] p-6">
                            <img className='mx-auto w-[100px]' src="https://digital-business-next.vercel.app/_next/image?url=%2FOurDiff%2FFrame-2.png&w=256&q=75" alt="" />

                            <h1 className='text-[#221577] text-[32px] py-2 font-bold'>value accelerating</h1>
                            <p className='text-[#8682BA] text-[18px] py-4'>On demand expertise to supercharge growth in areas that are hard to access for early stage founders</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-5">
                <div className="container mx-auto">
                    <div className="mx-auto w-[700px] text-center">
                        <h1 className='text-[#52E0FD] text-[19px] py-4'>How it works</h1>
                        <h1 className='text-[#221577] text-[42px] font-bold py-3 capitalize'>Unlocking potential along the growth journey</h1>


                    </div>

                    <div className="mx-auto sm:w-[400px] lg:w-[900px] py-6">
                        <div className="grid grid-rows-3 gap-8">
                            <div className="rounded-[20px] bg-[#F6F7FB]">
                                <div className="flex items-center justify-between px-4">
                                    <div >
                                        <p className='text-[18px] text-[#8D89BA] py-3'>01</p>
                                        <h2 className='text-[#221577] font-bold text-[32px] py-2'>Connect</h2>
                                        <p className='text-[18px] text-[#8D89BA] py-3'>Register and qualify for funding in less than 5 mins. Connect revenue and marketing platforms you already use.</p>
                                    </div>
                                    <div>
                                        <img src="https://digital-business-next.vercel.app/_next/image?url=%2FhowItWorks%2FFrame-0.png&w=256&q=75" alt="" className="w-[150px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[20px] translate-x-[-20%] bg-[#F6F7FB]">
                                <div className="flex items-center justify-between px-4">
                                    <div >
                                        <p className='text-[18px] text-[#8D89BA] py-3'>02</p>
                                        <h2 className='text-[#221577] font-bold text-[32px] py-2'>Get Funded</h2>
                                        <p className='text-[18px] text-[#8D89BA] py-3'>
                                            Get a term sheet with upto 3 funding offers. Select option that best suits and complete onboarding to receive funds in days</p>
                                    </div>
                                    <div>
                                        <img src="https://digital-business-next.vercel.app/_next/image?url=%2FhowItWorks%2FFrame-1.png&w=256&q=75" alt="" className="w-[150px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[20px] bg-[#F6F7FB]">
                                <div className="flex items-center justify-between px-4">
                                    <div >
                                        <p className='text-[18px] text-[#8D89BA] py-3'>01</p>
                                        <h2 className='text-[#221577] font-bold text-[32px] py-2'>Support Growth</h2>
                                        <p className='text-[18px] text-[#8D89BA] py-3'>
                                            Access curated feed of actionable insights and on demand execution expertise. Auto qualify for follow on funding as you grow.</p>
                                    </div>
                                    <div>
                                        <img src="https://digital-business-next.vercel.app/_next/image?url=%2FhowItWorks%2FFrame-2.png&w=256&q=75" alt="" className="w-[150px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Howwe
