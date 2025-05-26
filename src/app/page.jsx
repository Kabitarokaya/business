import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Navbar/Banner'
import Whatwedo from './Component/Navbar/Whatwedo'
import Howwe from './Component/Navbar/Howwe'
import Whoweinvest from './Component/Navbar/Whoweinvest'

function page() {
  return (
    <>
      <div className="app">
        <Navbar />
       <Banner />
       <Whatwedo/>
       <Howwe/>
       <Whoweinvest/>
      </div>
 
    </>
  )
}

export default page
