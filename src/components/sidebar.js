import React, { Component } from 'react';
import profile from '../profile.jpg'


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
          <div className="profile-container">
              <img className="profile" src={profile} width="150" height="150" alt="" />
              <h1 className="name">Glen Anna Abellana</h1>
              <h3 className="tagline">Computer Engineering Student</h3>
          </div>
          
          <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
                  <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">gabellan@stevens.edu</a></li>
                  <li className="phone"><i className="fa fa-phone"></i><a href="tel:201-956- 8359">201-956- 8359</a></li>
                  <li className="linkedin"><i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/glen-anna-abellana-8522ab11b" target="_blank">linkedin.com/in/gabellan</a></li>
              </ul>
          </div>

          <div className="interests-container container-block">
              <h2 className="container-block-title">Activities</h2>
              <ul className="list-unstyled interests-list">
                  <li>Omega Phi Beta Sorority, Inc.</li>
                  <li>Multicultural Greek Council: President, Cooperative Education,</li>
                  <li>BRIDGE Program: Tutor Counselor/ Resident Assistant</li>
                  <li>Society of Hispanic Professional Engineers</li>
                  <li>SLatin American Association: Social Chair</li>
                  <li>Filipino Association of Stevens Tech: External Relations</li>
              </ul>
          </div>
          
      </div>
    );
  }
}

export default Sidebar;