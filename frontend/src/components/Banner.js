import React from 'react'
import './Navbar.css'

import logo from '../Image/undraw.png'
const Banner = () => {
  return (
   
    <section className=" d-flex justify-content-center mt-5" id="Home">
      
      
  <div className="container ">
    <div className="row">
    <div classNAme="h-50"  style={{ color:"white"}}>
            {" "}
            <h5> about me</h5>
          </div>
          <div classNAme="h-50" style={{ color:"white"}}>
            {" "}
            <h5> about me</h5>
          </div>
          <div classNAme="h-50" style={{ color:"white"}}>
            {" "}
            <h5> about me</h5>
          </div>
          
      <div className="col  p-5  mt-5 text-center text-md-start ">
        <h5> WELCOME TO MY WORLD </h5>
        <h1>
          {" "}
          I'm Laraib Rayeen <br />
          <span className='text-primary'> Full Stack Developer. </span>
          <br /> Based in INDIA 🕳  {" "}
        </h1>
        
        {/* <a  type="button" className="btn btn-outline-dark mylink" data-mdb-ripple-color="dark" href="#">
            Download Resume
          </a> */}
      </div >
      <div  className='banner  col mt-5'>

      </div>
    </div>
  </div>
</section> 


  )
} 
export default Banner 