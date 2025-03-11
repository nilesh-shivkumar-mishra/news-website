import React, { Component } from "react";
import  "./Navbar.css" // we import navbar file which contain Navbar ka css
import { Link } from "react-router-dom"; // we import Link tag from react router dom instend of href we use link


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`Nav max1 m`}>
          <div className={`nav-left`}>
            <span>UNTIL GO</span>
            <span>
            <ul className={`ul`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/business">Business</Link> </li>
              <li><Link to="/entertainment">Entertainment</Link></li>
              <li><Link to="/general">General</Link></li>
              <li><Link to="/health">Health</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/technology">Technology</Link></li>
            </ul>
            </span>
          </div>

          <div className={`nav-right`}>
          <form action="/search.html" method="get">
          <input placeholder="search here" className={`form-input`} name="query" type="text" />
          <button className={`search-button`}>search</button>
          </form>
          
          </div>
        </nav>
      </div>
    );
  }
}
