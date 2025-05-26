import React from 'react'

function Whatwedo() {

  return (
    <div>
      <section className="py-9 bg-[rgb(239,239,239)]">
        <div className="container  transition-all duration-150 opacity-1 text-center mx-auto">
          <div className='text-center mx-auto  w-[800px]'>
            <h2 className='py-4 text-[#21D8FC] text-[24px]'>What we do</h2>
            <h1 className='text-[42px] text-[#221577]'>Empowering founders with non dilutive capital and execution expertise
            </h1>
            <p className='text-[#867EB5] text-[22px] py-3'>Here is how we can evaluate</p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 sm:my-3 gap-8 mt-20">
            <div className='shadow border px-5 rounded-[30px]'>
              <h1 className='text-[#221577] text-[30px] py-4'>Blue Adnavces</h1>
              <p className='text-[#221577] text-[22px]'>Fund recurring growth expenses e.g. customer acquisition, inventory</p>


              <div className='grid grid-cols-3  px-10 h-[50vh]'>
                <div className="shadow h-[200px]   border w-[180px]  text-center rounded-[20px]">
                  <img className='mx-auto' src="https://digital-business-next.vercel.app/_next/image?url=%2Ffeatures%2FFrame-0.png&w=128&q=75" alt="" />
                  <p className='text-[#221577] text-[20px] py-3'>3x monthly revenue</p>
                </div>
                <div className="shadow  h-[200px] ml-5 border w-[180px] px-3 translate-y-[40%] text-center rounded-[20px]">
                  <img className='mx-auto' src="https://digital-business-next.vercel.app/_next/image?url=%2Ffeatures%2FFrame-1.png&w=128&q=75" alt="" />
                  <p className='text-[#221577] text-[20px] '>Flat fee of 6-12%</p>
                </div>
                <div className="shadow h-[250px] ml-9  border w-[180px] pr-4 text-center rounded-[20px]">
                  <img className='mx-auto' src="https://digital-business-next.vercel.app/_next/image?url=%2Ffeatures%2FFrame-2.png&w=128&q=75" alt="" />
                  <p className='text-[#221577] text-[20px] py-3'>Flexible repayments by revenue share</p>
                </div>
              </div>
            </div>

            <div className='shadow border rounded-[30px]'>
              <h1 className='text-[#221577] text-[30px] py-4'>Blue  Seed</h1>
              <p className='text-[#221577] text-[20px]'>Fund one-offs to scale e.g. product, hiring</p>


              <div className='grid grid-cols-3  px-10 h-[50vh]'>
                <div className="shadow h-[200px]   border w-[150px]   translate-y-[20%]  text-center rounded-[20px]">
                  <img className='mx-auto' src="https://digital-business-next.vercel.app/_next/image?url=%2Ffeatures%2FFrame-3.png&w=128&q=75" alt="" />
                  <p className='text-[#221577] text-[20px] py-3'>3-4 years repayment</p>
                </div>
                <div className="shadow  h-[200px]  border w-[170px] px-3 text-center rounded-[20px]">
                  <img className='mx-auto' src="https://digital-business-next.vercel.app/_next/image?url=%2Ffeatures%2FFrame-4.png&w=128&q=75" alt="" />
                  <p className='text-[#221577] text-[20px] '>$10-100k seed investment</p>
                </div>
                <div className="shadow h-[200px] ml-3  border w-[180px]  translate-y-[20%]  pr-4 text-center rounded-[20px]">
                  <img className='mx-auto' src="https://digital-business-next.vercel.app/_next/image?url=%2Ffeatures%2FFrame-5.png&w=128&q=75" alt="" />
                  <p className='text-[#221577] text-[20px] py-3'>2% of revenue up to 3X cap</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-6 bg-[#FFFFFF]">
        <div className="container mx-auto">

          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className='w-[450px]  '>
              <h1 className='text-[30px] py-4 font-bold text-[#221577]'>Blue Growth Support</h1>
              <p className='text-[#867EB5] text-[19px]'>Data Insights and full stack expertise to supercharge growth</p>
            </div>

            <div className=' py-4 '><p className='text-[#867EB5] text-[19px]'>
              Actionable data insights by connecting revenue, marketing and social media platforms</p>

              <p className='text-[#867EB5] text-[19px] '>On demand execution expertise at cost or revenue share across proposition design, engineering, marketing analytics, partnerships, brand, intellectual property, market expansion, talent management</p>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  )
}

export default Whatwedo
