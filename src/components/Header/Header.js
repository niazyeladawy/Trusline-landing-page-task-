import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Group 3.png';
import './header.css'

const Header = () => {

    const [scrollm, setscrollm] = useState(false)

    useEffect(() => {
        onscroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 0) {
               
                setscrollm(true);
            }
            else {
                setscrollm(false);
            }
            
        }
    }, [])
    console.log(scrollm);

    return (
        <nav  className={scrollm ? "navbar  fixed-top navbar-expand-lg navbar-dark bg-dark ":"navbar  fixed-top navbar-expand-lg navbar-dark bg-transparent"}>
            <div className="container">
                <a className="navbar-brand" href="#"><img style={{ height: '50px' }} src={image} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">  ترست لاين                         </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#why"> لماذا ترست لاين؟</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">  آلية العمل</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">  تواصل معنا</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 d-flex align-items-center">

                        <li className='me-0 me-lg-5'>
                            <a className="nav-link rounded-pill  btn bg-white text-dark py-0 px-5" href="#"> دخول</a>
                        </li>
                        <li >
                            <a className="nav-link" href="#">  ENG</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header