import React from 'react'
import profile from '../assets/profile.png'
import ps1 from '../assets/ps1.png'
import ps2 from '../assets/ps2.png'
import ps3 from '../assets/ps3.png'
import ps4 from '../assets/ps4.png'
import ps5 from '../assets/ps5.png'
import ps6 from '../assets/ps6.png'
import ps7 from '../assets/ps7.png'
import ps8 from '../assets/ps8.png'
import ps9 from '../assets/ps9.png'
import ps10 from '../assets/ps10.png'
import ps11 from '../assets/ps11.png'
import ps12 from '../assets/ps12.png'
import Footer from '../components/Footer'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
      });
    
      const variants = {
        hidden: { y: "10vw", opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };
    
  return (
    <>
<div className="about_container " id="possibility"
>


    <div className="about_section1">
    <motion.div className="about-image"    ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}>
      <img src={profile} alt="possibility" />
    </motion.div>
    <div className="about-content">
      <h1>Know Who <span>I'M</span> 
</h1>
     
      <p>I am <span>JYOTHISS JAYADEVAN</span> from <span>Banglore, India</span>. I am completing my graduation from Kristu jayanti college banglore with a Bachelors's degree in Computer Science and I'm looking for opportunities to grow and learn as a web developer with (<span> 2 yrs Experience </span>)</p>
      <h5 className='cursor'>❝ Bring <span>Ideas</span> To Life With <span>Code</span> While <span>Living</span> ,<span>Learning</span> ,
      <br/> and <span>Leveling Up</span>, One Day at a Time ❞</h5>
    </div>
    </div>

    <h1 className='about_skill'>PROFESSIONAL SKILLSET</h1>
<div className="about_section2">
  
    <div className="about_section2_box">
        <span>Javascript</span>
        <div><img src={ps1} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>ReactJs</span>
        <div><img src={ps2} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>NodeJs</span>
        <div><img src={ps3} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>MongoDb</span>
        <div><img src={ps4} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>Express</span>
        <div><img src={ps5} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>Html</span>
        <div><img src={ps6} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>Css</span>
        <div><img src={ps7} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>BootStrap</span>
        <div><img src={ps8} alt="" /></div>
    </div>

    <div className="about_section2_box">
        <span>Tailwind</span>
        <div><img src={ps9} alt="" /></div>
    </div>
    <div className="about_section2_box">
        <span>MaterialUi</span>
        <div><img src={ps10} alt="" /></div>
    </div>
    <div className="about_section2_box">
        <span>Git</span>
        <div><img src={ps11} alt="" /></div>
    </div>
    <div className="about_section2_box">
        <span>GitHub</span>
        <div><img src={ps12} alt="" /></div>
    </div>

</div>

<h2 className="about_other">Other Than Coding Find <span>Happiness</span>  In</h2>
<div className="about_section3">
    <ul>
        <li>✈ Parkour</li>
        <li>✈ Boxing</li>
        <li>✈ Martial Arts</li>
        <li>✈ Football</li>
    </ul>
</div>

  </div>
  <Footer/>
  </>
  )
}

export default About
