import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'
import TopNav  from '../TopNav'

function HomePage() {
    return (
        <>
        {/* react fragment */}
<TopNav/>
<Hero/> 
<Awards/>
<Stats/>
<Pricing/>
<Education/>
<OpenAccount/>
<Footer/>

      
        </>

      );
}

export default HomePage;