import React from 'react'
import web from '../src/image/undraw.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
AOS.init();

const Home = () => {
  return (
    <>
    <section id='headers'>
        <div className="container-fluid">
         <div className="row">
          <div className="col-10 mx-auto d-flex flex-wrap">
            <div className="col-sm-12 col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Grow your business with <strong className='text-primary'>Pooja Patidar</strong></h1>
                <h2 className='my-3'>We are the team of talented developer making websites</h2>
                <div className="mt-3">
                    <NavLink to="/service" className='btn btn-outline-primary rounded-pill fw-bold'>
                        Get Started
                    </NavLink>
                </div>
            </div>
             <div className="col-sm-12  col-md-6 col-lg-6 order-1 order-lg-2" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               <img className='img-fluid animated' src={web} alt='' />
             </div>

          </div>
         </div>
        </div>
    </section>
    </>
  )
}

export default Home