import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import image from '../images/k.jpeg';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={image}
                alt="avatar"
                style={{height: '400px'}}
                 />
            </div>
            <h2 style={{paddingTop: '1em'}}>Kushal Sojitra</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hii,I am Kushal.I am Full Stack Developer,my experince is beggingner for this filed.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Surat,Gujarat,India</p>
            <h5>Phone</h5>
            <p>(+91) 7069108043</p>
            <h5>Email</h5>
            <p>krushalsojitra043@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2020}
              schoolName="VEER NARMAD SOUTH GUJARAT UNIVERSITY"
              schoolDescription="My graduation"
               />

               <Education
                 startYear={2020}
                 schoolName="PARUL UNIVERSITY"
                 schoolDescription="My post graduation"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>
              <Experience
                // startYear={2012}
                // endYear={2016}
                // jobName="Second Job"
                // jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="React Js"
                progress={85}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                      skill="Mongo Db"
                      progress={70}
                      />
                        <Skills
                          skill="Firebase"
                          progress={70}
                          />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
