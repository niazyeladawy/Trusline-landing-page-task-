import React from 'react';
import logo from '../../assets/Group 3.png'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='py-5 bg-black' id='footer'>
            <div className='container border-top '>
                <div className='d-flex justify-content-between mt-4 footer-content'>
                    <div className='mb-3 m-md-0'>
                        <img src={logo} alt="" />
                        <p className='mt-4 mb-0'>واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564</p>
                        <p className='mt-0'>Trustline - جميع الحقوق محفوظة 2022</p>
                    </div>
                    <ul className='list-unstyled mb-3 m-md-0'>
                        <li><a href="#">للشركات
                        </a></li>
                        <li><a href="#">للباحثين</a></li>
                        <li><a href="#">بيانات التواصل</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                    </ul>
                    <div >
                        <a href="#" className='me-4 text-white'><FaLinkedinIn size={30} /></a>
                        <a href="#" className=' text-white'><FaTwitter size={30} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer