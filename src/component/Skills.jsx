import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Skills() {
  const [skill, setSkill] = useState([]);
  const [tool, setTool] = useState([]);
  const [up, setUp] = useState([]);
  useEffect(() => {
    fetch('/skill.json')
      .then(response => response.json())
      .then(data => {
        setSkill(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    fetch('/tool.json')
      .then(response => response.json())
      .then(data => {
        setTool(data);
        console.log(data);
      })
  }, [])
  useEffect(() => {
    fetch('/upcoming.json')
      .then(response => response.json())
      .then(data => {
        setUp(data);
        console.log(data);
      })
  }, [])
  return (
    <div className='container'>
      <div className='skill' >
        <h1 className='skilllll' id='skills'>SKILLS</h1>
      </div>
      <div className='container'> <div className='row skill-list '>
        {skill.map((item, index) => (
          <div className='col-lg-4 col-md-5 col-sm-8 index' key={index}>{item.skills}</div>
        ))}
      </div>
      </div>
      <div className='Tool'>
        <h1>TOOLS</h1>
      </div>
      <div className='contauner'>
        <div className='row skill-list'>
          {tool.map((item, index) => (
            <div className='col-lg-4 col-md-5 col-sm-8 indexo' key={index}>
              {item.tool}
            </div>
          ))}
        </div>
      </div>
      <div className='Tool'>
        <h1>Under Process</h1>
      </div>
      <div className='container'>
        <div className='row skill-list'>
          {up.map((item, index) => (
            <div className='col-lg-4 col-md-5 col-sm-8 indexo' key={index}>
              {item.up}
            </div>
          ))}
        </div>
      </div>
      <div className='container'>
        <div className='footer' id='contact'>
          <h1 className='text'>Contact</h1>
        </div>
        <div className='iconss d-flex'>
          <a className='href5' href='https://www.linkedin.com/in/bavaneeswaran-k-a17689316/'><i class="fa-brands fa-linkedin"></i></a>
          <a className='href5' href='https://github.com/bavaneeswaran49'><i class="fa-brands fa-github"></i></a>
          <a className='href5' href='mailto:bavaneeswaran49@gmail.com'><i className="fa-solid fa-message"></i></a>
        </div>
        <p className='twe'><strong>call </strong>   +(91) 8248386613</p>
      </div>
    </div>

  );
}