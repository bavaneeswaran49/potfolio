import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css"
// import potfolio from '/assets/potfolio.png'
export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('project.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className='project container' id='project'>
        <h1>Projects</h1>
      </div>

      <div className="container">
        <div className='container row justify-content-around'>
          {projects.map((item, index) => (
            <div
              className="card col-sm-12 col-md-5 col-lg-3 m-3 p-0 "
              key={index}
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={item.projecttittle}
                className="card-img-top"
              />

              <div className="card-body">
                <h5 className="card-title text-light border-none">{item.projecttittle}</h5>
                <p className="card-text">{item.summary}</p>
              </div> {item.github && (
                <a href={item.github} className="btn btn-dark bg-dark" target="_blank">
                  GitHub
                </a>
              )}
              {item.live && (
                <a href={item.live} className="btn btn-dark  bg-dark border-none" target="_blank">
                  Live
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

