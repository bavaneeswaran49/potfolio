import '../App.css'
import './Navbar.css'
import { Link } from 'react-router-dom'
// import About from './About'
export default function Navbar() {
    return (
        <>
            <div className='bar container'>
                <nav className="navbar navbar-expand-lg navbar-main">

                    <div className="container navbar2 ">

                        <Link to="/" className=" col-lg-7 navbar-brand text-white mx-5">
                            Bavaneeswar K
                        </Link>

                        <button
                            className="navbar-toggler text-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className=" nav2 collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav2 navbar-nav ms-auto   ">

                                <li className="nav-item">
                                    {/* <Link to="/" >Home</Link> */}
                                    <a className="nav-link text-white weih" href='#home' >Home</a>
                                </li>

                                <li className="nav-item">
                                    {/* <Link to="/About" className="nav-link text-white weih">About</Link> */}
                                    <a className="nav-link text-white weih" href='#abt' >About</a>
                                </li>
                                <li className="nav-item">
                                    {/* <Link to="/Project" className="nav-link text-white weih">Projects</Link> */}
                                    <a href='#project' className='nav-link text-white weih'>Projects</a>
                                </li>
                                <li className="nav-item">
                                    {/* <Link to="/Skill" >Skills</Link> */}
                                    <a href='#skills' className="nav-link text-white weih">Skills</a>
                                </li>



                                <li className="nav-item">
                                    {/* <Link to="/Contact">Contact</Link> */}
                                    <a href='#contact'  className="nav-link text-white weih">Contact</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                </nav></div>
        </>
    )
}
