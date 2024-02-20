import React from 'react'
import Footer from '../components/Footer'
import pdf from '../assets/jyothiss-cv.pdf'
import pdfimg from '../assets/jyothiss-cv.jpg'



const Resume = () => {
  return (
    <>
    <div className='resume'>
      <a  className="resume_click"href={pdf}>View Pdf</a>
  <div className="resume_pdf">
<div className="resume">
  <img src={pdfimg} alt="couldnot render" />
</div>
  </div>
    </div>
    <Footer/>
    </>
  )
}

export default Resume
