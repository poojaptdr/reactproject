import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const Contact = () => {


  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

  const inputEvent=(e)=>{
    const {name, value} = e.target
    setData((preVal)=>{
      return{...preVal, [name]: value,}
    })
  }

  const formSubmit=(e)=>{
   e.preventDefault();
   alert(`${data.fullname}`)
  }


  return (
    <>
        <div className="my-5 text-center">
          <h1>Contact Us</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
     <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" 
        name='fullname'
        value={data.fullname}
        onChange={inputEvent}
        placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text"
        name='phone'
        value={data.phone}
        onChange={inputEvent}
         placeholder="Mobil Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
        name='email'
        value={data.email}
        onChange={inputEvent}
         placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} 
          name='msg'
        value={data.msg}
        onChange={inputEvent}
        />
      </Form.Group>
      <button className='btn btn-outline-primary'>
        Submit
      </button>
    </Form>
 
    </div>
  </div>
</div>
    </>
  )
}

export default Contact