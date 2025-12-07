import React from 'react'
import './Navbar.css';
import bavan from '../assets1/Bavanlogoupdated.jpg'
export default function Home() {
    return (
        <>
            <div className='home  container text-white' id='home'>
                <div className='bavan row'>
                    <div className=' class  col-lg-8 col-md-8 col-sm-12'>
                        <h1 className='h1h'>Im Bavaneeswar.K</h1><br></br>
                        <p className='p1h'><strong>Aspiring Frontend Developer</strong></p>
                        <p>I am a passionate and self-driven Full Stack Developer in progress, with a strong foundation in HTML, CSS, JavaScript, and React, and currently expanding my expertise in Core Java, Advanced Java, and Spring Boot. I hold a BSc in Information Technology and have hands-on experience building responsive web applications, working with APIs, and creating clean, user-friendly interfaces.</p>
                        <div className='icons d-flex'>
                            <a className='href2' href='https://www.linkedin.com/in/bavaneeswaran-k-a17689316/'><i class="fa-brands fa-linkedin"></i></a>
                            <a className='href3' href='https://github.com/bavaneeswaran49'><i class="fa-brands fa-github"></i></a>
                            <a className='href4' href='mailto:bavaneeswaran49@gmail.com'><i className="fa-solid fa-message"></i></a>
                        </div>
                        <a href='#skills' className='href1'><p className='button'>View Projects</p></a>

                    </div>
                    <div className='class1  col-lg-3 col-md-3 col-sm-12'>
                        <img src={bavan} alt='bavanpic' className='mx-4'></img>
                    </div>
                </div>
            </div>
        </>
    )
}