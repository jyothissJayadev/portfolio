import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectData from '../components/projectsData.json'

const Project = () => {
  return (
    <div>
        <main className="portfolio container">
        {/* Display the page header */}
        <div className="port_head">
            <span>View My Work</span>
            <h1 className='portfolio_heading'> PORTFOLIO</h1>
        </div>
      

        <div className="row">
          {/* Display the list of projects */}
          {
        projectData.map((project) => (
    <ProjectCard key={project.id} title={project.title} image={project.image} color={project.bgcolor} />
  ))}
        </div>
      </main>
   
       
    </div>
  )
}

export default Project
