import React from 'react';


import './navbar.css'




const Navbar = () => {

  const weMakeItEasyFor=" We make it easy for you to manage your company accesses"
  const withBrickshareWeG="Thanks to our platform you will be able to digitalise the incorporation documents of your company and manage actions in your company based on the rules depicted in those."

  return (
    <div className="bachainLandingPage">
      <div className='headerheroimage'>
      
        <div className="logo">
           <div className="brickshare"><p>BAChain</p><br/></div>
           </div>
          
          <div className="text">
          <div className="projects"><p>Projects</p></div>
          <div className="howItWorks"><p>How it works</p></div>
          <div className="aboutUs"><p>Technology</p></div> 
          <div className="blog"><p>Security</p></div>
</div>
        <div className="heroimage">
          <div className='patrickTomasso42162Copy2'>
            <div className='maskCopy85ab14ab'>
           
            </div>
              <div className='patrickTomasso42162Copy2'>
                <div className='maskCopy'></div>
                
                </div>
                </div>
                </div>
      
             
            <div className='textbox'>
              <div className='rectangle19'>

              </div>
              {/*<div className='freetrialbuttonCopy'>
                <div className='seeProjects0ed37987'>
                  See Projects
                </div>
  </div>*/}
                
                  <div className='weMakeItEasyFor'>
                {weMakeItEasyFor}
                </div>
                <div className='withBrickshareWeG'>{withBrickshareWeG}</div>
                
                
   </div>
                
              <div className='signinfreetrialbutton2dd4bbc3'>
                <div className='rectangle3b4044ddf'></div>
                <div className='rectangle31989e46d'>
               
                </div>
                <div className='signInc7115893'>Sign in</div>
                <div className='freeTriala4e67d34'>Sign up</div>
              </div>
              <div className='signinfreetrialbutton'><div className='rectangle31989e46d'></div>
                <div className='rectangle3Copy'></div>
                <div className='signIn'>Sign in</div>
                <div className='freeTrail'>Sign up</div>

           </div>
           </div>
           </div>
         
            
     
     

 
  )
};

export default Navbar;