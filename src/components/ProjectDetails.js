import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import projectData from '../components/projectsData.json';

const ProjectDetails = () => {


  const { ProjectName } = useParams(); 
  const project = projectData.find((p) => p.title.toLowerCase() === ProjectName);
  const {title,technologies,body,github,deployed,type,date,image1}=project


  return (
    <>
   <div className="Detail">
    <h1 className='Detail_Heading'>{title}</h1>
    <div className="Detail_container">
    <div className="bottom_detail">Created on:{date}</div>

      <div className="Detail_imgCon">

        <img src={image1} alt="" />s
      </div>
      <div className="Detail_content">
      <div className="top_detail">{type}</div>
        <div className="Detail_Lang">
   
        {technologies.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
        </div>
        <div className="Detail_desc">
          <p> {`${body}`} </p>
           </div>
        <div className="Detail_buttons">
          <Link to={github}  className="Detail_button Detail_link">Source<FiArrowUpRight className='btn_up'/></Link>
          <Link to={deployed}  target="_blank" className="Detail_button Detail_Site">Site<FiArrowUpRight className='btn_up'/></Link>
          <Link to={`/project`} className="Detail_button Detail_Back">Back<FiArrowUpRight className='btn_up'/></Link>
        </div>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default ProjectDetails
