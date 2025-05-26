import React from 'react'

function Whoweinvest() {
    return (
        <>

            <section className="py-5  bg-[#533FD7] text-white">
                <div className="container  py-8 mx-auto">
                    <div className="grid  sm:grid-cols-1 items-center gap-8 lg:grid-cols-2">
                        <div>
                            <p className='text-[#00CAF9] text-[19px] py-4'>Who we invest in  </p>
                            <h1 className='text-[24px] text-white'> Digital businesses
                                with early traction</h1>
                            <h1 className='text-[#FEE590] text-[19px] py-5'> Digital Business Model</h1>
                            <p> Digital business model e.g. SaaS, subscription, D2C, apps</p>
                            <h1 className='text-[19px] text-[#FEE590] py-4'>  Revenue Generating</h1>
                            <p>                    Revenue generating for 6 months, $1k in monthly recurring revenue
                            </p>
                            <h1 className='text-[19px] text-[#FEE590] py-4'>   Support Growth</h1>
                            <p>                    Industry expertise: Fintech, Health, Deep tech, B2B software
                            </p>
                            <h1 className='text-[19px] text-[#FEE590] py-4'>  International Expansion</h1>
                            <p>                    Registered in Australia and Singapore (initially) with appetite for international expansion
                            </p>
                        </div>
                        <div className='overflow-hidden'>
                            <img className='w-full transform transition-all hover:animate-bounce duration-300 overflow-hidden' src="https://digital-business-next.vercel.app/persons.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-[#FAFAFB]">
                <div className="container mx-auto">
                    <div className='text-center mx-auto w-[700px] py-4'>
                        <h4 className='text-[#00CAF9] text-[19px] py-3'>Testimonials</h4>
                        <h1 className='text-[42px] text-[#221577] font-bold py-3 capitalize'>Access capital that complements traditional funding options</h1>
                        <p className='text-[#B18CB5] text-[19px] py-3'>What people say about us</p>
                    </div>
                    <div className="py-9  gap-8 grid sm:grid-cols-1 lg:grid-cols-3">
                        <div className="bg-white  sm:w-full lg:w-[400px] h-[400px] text-center rounded-[20px] p-6">
                            <img className='mx-auto  py-4' src="https://digital-business-next.vercel.app/apos.svg" alt="" />

                            <h1 className='text-[#221577] text-[32px] py-2 font-bold'>Data Driven</h1>
                            <p className='text-[#8682BA] text-[18px] py-4'>Our mission is to level the playing field for early stage growth capital. We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation</p>
                        </div>
                        <div className="bg-white sm:w-full lg:w-[400px] h-[400px] text-center rounded-[20px] p-6">
                            <img className='mx-auto  py-4' src="https://digital-business-next.vercel.app/apos.svg" alt="" />

                            <h1 className='text-[#221577] text-[32px] py-2 font-bold'>flexible funding</h1>
                            <p className='text-[#8682BA] text-[18px] py-4'>Funding that flexes as revenue grows with transparent costs and does not require dilution, personal guarantees or pitch decks</p>
                        </div>
                        <div className="bg-white sm:w-full lg:w-[400px] h-[400px] text-center rounded-[20px] p-6">
                            <img className='mx-auto  py-4' src="https://digital-business-next.vercel.app/apos.svg" alt="" />

                            <h1 className='text-[#221577] text-[32px] py-2 font-bold'>value accelerating</h1>
                            <p className='text-[#8682BA] text-[18px] py-4'>On demand expertise to supercharge growth in areas that are hard to access for early stage founders</p>
                        </div>
                    </div>

            
        

        </div>
            </section>
        </>
    )
}

export default Whoweinvest
