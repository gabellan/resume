import React, { Component } from 'react';


class Content extends Component {
  render() {
    return (
      <div className="main-wrapper">
          
          <section className="section summary-section">
              <h2 className="section-title"><i className="fa fa-user"></i>Objective</h2>
              <div className="summary">
                  <p>Co-op Computer Engineering Trainee</p>
              </div>
          </section>
          
          <section className="section experiences-section">
              <h2 className="section-title"><i className="fa fa-briefcase"></i>Education</h2>
              
              <div className="item">
                  <div className="meta">
                      <div className="upper-row">
                          <h3 className="job-title">B.E. in Computer Engineering</h3>
                          <div className="time">Present</div>
                      </div>
                      <div className="company">Stevens Institute of Technology, Hoboken, NJ</div>
                  </div>
                  <div className="details">
                   <p><strong>GPA:</strong> 2.739</p>
                   <p><strong>Course Work:</strong> Engineering Graphics, Engineering Design 1-5, Intro to Entrepreneurial Thinking, Introduction to Programming, Calculus 1-3, Discrete Math, Circuits &amp; Systems, Microprocessor Systems, Computer Algorithms &amp; Data Structures, Material Processing</p>
                  </div>
              </div>
              
          </section>

          <section className="section experiences-section">
              <h2 className="section-title"><i className="fa fa-briefcase"></i>Work Experiences</h2>
              
              <div className="item">
                  <div className="meta">
                      <div className="upper-row">
                          <h3 className="job-title">Estimating Co-op</h3>
                          <div className="time">January ‘17-May ‘17</div>
                      </div>
                      <div className="company">Hunter Roberts Construction Group, New York, NY</div>
                  </div>
                  <div className="details">
                    <ul>
                      <li>Took quantity take-off’s in different architectural, structural and MEP systems several buildings and projects.</li>  
                      <li>Reviewed subcontractor trade proposals and leveled proposals to meet necessary design.</li>
                      <li>Supported the electrical estimator by assisting in all electrical aspects of different building such as hotels, apartments and labs.</li>
                    </ul>
                  </div>
              </div>
              
              <div className="item">
                  <div className="meta">
                      <div className="upper-row">
                          <h3 className="job-title">Maintenance Coordinator</h3>
                          <div className="time">September ’15-December ‘15</div>
                      </div>
                      <div className="company">Dr. Pepper Snapple Group, Carteret, NJ</div>
                  </div>
                  <div className="details">
                    <ul>
                      <li>Input and analyzed data on a daily basis to meet the requirements of the plants’ business teams</li>
                      <li>Facilitated maintenance planning meetings and impact workshops.</li>
                      <li>Supported preventative maintenance and work order systems.</li>
                      <li>Responsible for system maintenance, upgrades, and overall operation.</li>
                    </ul>
                  </div>
              </div>
              


          </section>
          
         <section className="section experiences-section">
             <h2 className="section-title"><i className="fa fa-briefcase"></i>Leadership Experiences</h2>
             
             <div className="item">
                 <div className="meta">
                     <div className="upper-row">
                         <h3 className="job-title">Chartering Member | Public Relations | Membership Chair</h3>
                         <div className="time">April ’16-Present</div>
                     </div>
                     <div className="company">Omega Phi Beta Sorority, Inc., Hoboken, NJ</div>
                 </div>
                 <div className="details">
                  <ul>
                     <li>Chartered a multicultural organization to provide an outlet for diverse women on campus.</li>  
                     <li>RFacilitated a social media campaign whose purpose was to allow people to embrace their cultural roots.</li>
                     <li>Involved on a national scale as a member of the marketing committee.</li>
                  </ul>
                 </div>
             </div>
             
         </section>
          
          <section className="skills-section section">
              <h2 className="section-title"><i className="fa fa-rocket"></i>Skills</h2>
              <div className="skillset">        
                <p><strong>Hardware:</strong> PC Based Systems. MAC Based Systems</p>
                <p><strong>Software::</strong> MATLab, SolidWorks, Adobe: Photoshop, Illustrator, Microsoft Office: Word, Excel, PowerPoint, Visual Studio, Publisher, C++, OnScreen Takeoff</p>
                  
              </div>  
          </section>
          
      </div>
    );
  }
}

export default Content;