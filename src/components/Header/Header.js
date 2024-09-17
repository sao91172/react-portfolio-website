import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import "../global.css"

const Header = () => {
    return(
    //     <div className="nav-bar">
    //     <div className="frame">
    //       <a href="/"><h2 className="navigation-elements">Home</h2></a>
    //       <h2 className="navigation-elements">About</h2>
    //       <h2 className="navigation-elements">Work</h2>
    //       <h2 className="navigation-elements-sayHello">Say Hello!</h2>
    //     </div>
    //   </div>


    <div className="nav-bar">
      <div className="frame">
        <NavLink exact to="/"><h2 className="navigation-elements">Home</h2></NavLink>
        <h2 className="navigation-elements">About</h2>
        <h2 className="navigation-elements">Work</h2>
        <NavLink exact to="/contact"><h2 className="navigation-elements-sayHello">SayHello!</h2></NavLink>

        {/* <NavLink to="/about"><h2 className="navigation-elements">About</h2></NavLink>
        <NavLink to="/work"><h2 className="navigation-elements">Work</h2></NavLink>
        <NavLink to="/sayhello"><h2 className="navigation-elements-sayHello">Say Hello!</h2></NavLink> */}
      </div>
    </div>
    )

}
export default Header;