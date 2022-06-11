import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg text-white navbar-dark bg-dark shadow-sm px-lg-3">
            <div className="container-fluid">
                {/* brand logo */}
                <div className='d-flex align-items-center justify-content-center'>
                    <Link className="navbar-brand me-0" to="/home">
                        <p className='fw-bold logo mt-2'>Jannat Nury</p>
                    </Link>

                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navbar items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Get In Touch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>

                        <li className="nav-item active">
                          <a type='button' className="nav-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1hr5usEjS_7DVl54IVJ4a90ZVSK9X78Hv/view?usp=sharing">Get Resume</a>
                           
                        </li>
                        <li className="nav-item">
                            <a type='button' className="nav-link" target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/jannat-nury-6aa671141/"><i className="ico text-white pe-1 fab fa-linkedin-in"></i></a>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/products"><i className="ico text-white fab fa-facebook-f"></i></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;