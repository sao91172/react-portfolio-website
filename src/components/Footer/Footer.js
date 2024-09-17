import React from 'react';
import "./Footer.css"
import LinkedIn from '../img/linkedin.svg';
import GitHub from '../img/vector.svg'

const Footer = () => {

    // return (
    //   <footer class="footer">
    //   <div class="div">EMAIL</div>
    //   <div class="text-wrapper-2">CONNECT</div>
    //   <p class="p">© 2024 by Sarah Orji</p>
    //   <a href="mailto:sarah.2fyee@gmail.com" target="_blank" rel="noopener noreferrer">
    //     <div class="text-wrapper-3">sarah.2fyee@gmail.com</div>
    //   </a>
    //   <a href = "https://www.linkedin.com/in/sarah-orji-54619b106/"><img class="linkedin-icon" alt = "linkedin-icon" src={LinkedIn}/></a>
    //   <a href = " https://github.com/sao91172?tab=repositories"><img class="github-icon" alt = "github-icon" src={GitHub}/></a>
    // </footer>
    // )

    return(
      <footer class="footer">
      <div className="column">
          <div class="email">EMAIL</div>
          <a href="mailto:sarah.2fyee@gmail.com" target="_blank" rel="noopener noreferrer" class="email-link">sarah.2fyee@gmail.com</a>
      </div>
      <div class="column">
          <div class="connect">CONNECT</div>
          <div class="icons">
          <a href = "https://github.com/sao91172?tab=repositories"><img class="github-icon" alt = "github-icon" src={GitHub}/></a>
          <a href = "https://www.linkedin.com/in/sarah-orji-54619b106/"><img class="linkedin-icon" alt = "linkedin-icon" src={LinkedIn}/></a>
          </div>
      </div>
      <div class="p">© 2024 by Sarah Orji</div>
  </footer>
    )
}
export default Footer;