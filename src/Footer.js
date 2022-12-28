import React from 'react'

const date = new Date().toLocaleDateString()
console.log(date)

const Footer = () => {
  return (
    <>
      <footer className='bg-light text-center my-5 py-5'>
    <p>©️ {date} WebTech. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  )
}

export default Footer
