import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    const emailAddress='jyothissjsm@gmail.com';
    const phoneNumber='9778253982'
  return (
    <div className='footer'>
       <div className="footer-content">
      <div className="footer_Links">
        <a className="fotter_link" href='https://www.instagram.com/jyothiss___/'><InstagramIcon/></a>
        <a className="fotter_link"  href='https://www.linkedin.com/in/jyothiss-jayadevan-2ab238254/'><LinkedInIcon/></a>
        <a className="fotter_link"  href='https://github.com/jyothissJayadev?tab=repositories'><GitHubIcon/></a>
        <a className="fotter_link"  href='mailto:jyothissjsm@gmail.com'><EmailIcon/></a>
      </div>
      <div className="footer_contact">
      <p> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
      <p> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
      </div>

      </div>

      <p className='footer_copy'>&copy; 2024 Jyothiss. All rights reserved.</p>
    </div>
  )
}

export default Footer
