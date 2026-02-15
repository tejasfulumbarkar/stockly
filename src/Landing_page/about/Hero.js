import React from 'react'
import './Hero.css'
import { CiLinkedin } from "react-icons/ci";

import Lottie from "lottie-react";
import about_lottie from "../../assets/about_lottie.json";

function Hero() {
    return (
        <div className='container about-hero'>
            <div className='row lottie_box '>
                <Lottie animationData={about_lottie} />
            </div>
            <div className='row'>
                <h1 className='fs-3 text-center'>We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology.</h1>

                <hr className='hr-style'></hr>
                <div className='row hero-p' >
                    <div className='col-6'>
                        <p>
                            We kick-started operations on the 1st of January, 2026 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Stockly.
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.


                        </p>
                    </div>
                    <div className='col-6'>
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

                            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

                            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.

                        </p>
                    </div>

                </div>
            </div>

            {/* people */}

            <div className='row people_h1'>
                <h1 className='fs-3 text-center'>Developer</h1>


                <div className='row hero-p' >
                    <div className='col-6 left_people_col'>
                        <div className='people_image' style={{ backgroundImage: "url('/media/images/tejasimage.png')" }}>
                            {/* <img/> */}
                        </div>

                    </div>
                    <div className='col-6'>
                        <p>
                            
                            Tejas is a full stack developer who enjoys building clean, user friendly, and scalable web applications. He works across frontend and backend technologies, turning ideas into real products with strong focus on performance and usability. He is continuously learning, experimenting, and improving his craft to create better digital experiences.
                        </p>

                        <p>
                            Connect on :  <a href='https://www.linkedin.com/in/tejasfulumbarkar88/'><CiLinkedin className='iconig me-3' /></a> 
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Hero;
