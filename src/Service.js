import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'

const Service = () => {
  return (
    <>
    <div className="my-5 text-center">
      <h1>Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            {
              Sdata.map((val)=>
              <Cards key={val.id}{...val}/>
              )
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Service