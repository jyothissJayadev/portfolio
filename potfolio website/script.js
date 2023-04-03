let navDiv=document.querySelectorAll(".navDiv");
let navDivout=document.querySelectorAll(".navDivout");
let rightNav=document.querySelector(".rightNav");
let countNav=0;

navDivout.forEach((e,index)=>{
  e.addEventListener('mouseover',()=>{
    countNav=index;

  })
  window.addEventListener('mousemove',()=>{
    if(countNav==index){
      e.classList.add("navFocus")
      console.log("hello")
    }
    else{
      e.classList.remove("navFocus")
    }
  
  })
  e.addEventListener('click',()=>{
    rightNav.classList.remove("rightNavVissibe")
  })
})

navDivout.forEach((e,index)=>{
 
})



// Set the size and color of the mouse follower ring
const followerRadius = 50;
const followerColor = "#ff0000";

// Create a new div element for the follower
let follower=document.querySelector(".follower");
  


const sr=ScrollReveal({
  distance:"60px",
  duration:1800,
  reset:true
  
})

sr.reveal(`.text1Con1,.text2Con1`,
{origin:'left',
interval:200,
})

sr.reveal(`.rightCon1`,{
  origin:'right',
  interval:200
})
sr.reveal(``,{
  origin:'top',
  interval:100
})

// click the setting to open up the menu bar

let faGear=document.querySelector(".fa-gear");
let navClose=document.querySelector(".fa-arrow-right-from-bracket");
faGear.addEventListener('click',()=>{
  console.log("you clicked my setting");
  rightNav.classList.add("rightNavVissibe")
});
navClose.addEventListener('click',()=>{
  rightNav.classList.remove("rightNavVissibe");
})


//traslating of the box
// Get all project elements
const projects = document.querySelectorAll('.project1');

// Add mousemove event listener to each project element
projects.forEach((project) => {
  project.addEventListener('mousemove', (event) => {
    // Calculate rotation angles based on mouse position
    const xAxis = (window.innerWidth / 2 - event.pageX) / 40;
    const yAxis = (window.innerHeight / 2 - event.pageY) / 40;
    // Apply 3D transform to project element
    project.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  // Add mouseleave event listener to each project element
  project.addEventListener('mouseleave', () => {
    // Reset 3D transform on mouse leave
    project.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
});

// Add perspective property to parent element for better 3D effect
const parentElement = document.querySelector('.projects-container');





// button showmore funtion
let project2=document.querySelectorAll(".project2");
let btnpro2=document.querySelector(".showMore__project");
function showmore(){
  console.log("clicked on show moe")
project2.forEach((e)=>{
  e.classList.toggle("none")

})
if (btnpro2.innerHTML === "Show more") {
  btnpro2.innerHTML = "Show Less";
} else {
  btnpro2.innerHTML = "Show more";
}
}