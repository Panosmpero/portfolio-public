import React from "react";

const Social = () => {
  return (
    <div className="social">
      <a 
       href="https://www.facebook.com/panos.mpero"
       id="profile-link"
       target="_blank"
       rel="noopener noreferrer"
       ><i className="fab fa-facebook-square"></i></a>    
    <a 
       href="https://github.com/Panosmpero"
       id="profile-link"
       target="_blank"   
       rel="noopener noreferrer"   
       ><i className="fab fa-github"></i
      ></a>
    <a 
       href="https://www.freecodecamp.org/panosbero"
       id="profile-link"
       target="_blank"
       rel="noopener noreferrer"
       ><i className="fab fa-free-code-camp"></i
      ></a>
    <a 
       href="https://www.linkedin.com/in/panagiotis-berovalis-18353619a/"
       id="profile-link"
       target="_blank"
       rel="noopener noreferrer"
       ><i className="fab fa-linkedin"></i
      ></a>
    </div>
  );
};

export default Social;
