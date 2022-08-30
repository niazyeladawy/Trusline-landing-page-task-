import React from 'react'
import './services.css'
import { FaUsers } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import { BiTrendingUp } from "react-icons/bi";
import { BsShield } from "react-icons/bs";

const Services = () => {
    return (
        <section id='services' className='py-5'>
            <div className='container'>
                <div className='bg-white services-content py-5 shadow-lg'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='section-head'>
                                <span ></span>
                                <h2 className='text-white mb-3'>الخدمات والحلول</h2>
                                <p className='mb-4'>نقدم خدمات وحلول احترافية في مجال الأمن السيبراني</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='service-item d-flex justify-content-between mb-4'>
                                <div className='text-center service-icon'>
                                    <FaUsers size={50} color='#019FFE' />
                                    <h4>الفريق الأحمر</h4>
                                </div>
                                <div className='vLine'></div>
                                <p>مراجعة الكود المصدري<br /> للتطبيق في محاولة لتحديد<br /> وإزالة نقاط الضعف المتعلقة <br />بالأمان.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='service-item d-flex justify-content-between mb-4'>
                                <div className='text-center service-icon'>
                                     <BiTrendingUp size={50} color='#019FFE' />  
                                    <h4>تقييم <br/>الضعف

                                    </h4>
                                </div>
                                <div className='vLine'></div>
                                <p>مراجعة الكود المصدري<br /> للتطبيق في محاولة لتحديد<br /> وإزالة نقاط الضعف المتعلقة <br />بالأمان.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='service-item d-flex justify-content-between mb-4'>
                                <div className='text-center service-icon'>
                                    <BsShield size={50} color='#019FFE' />
                                    <h4>المصادر <br/>الأمنية</h4>
                                </div>
                                <div className='vLine'></div>
                                <p>مراجعة الكود المصدري<br /> للتطبيق في محاولة لتحديد<br /> وإزالة نقاط الضعف المتعلقة <br />بالأمان.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='service-item d-flex justify-content-between mb-4'>
                                <div className='text-center service-icon'>
                                    <FaCode size={50} color='#019FFE' />
                                    <h4>مراجعة كود<br/> المصدر

                                    </h4>
                                </div>
                                <div className='vLine'></div>
                                <p>مراجعة الكود المصدري<br /> للتطبيق في محاولة لتحديد<br /> وإزالة نقاط الضعف المتعلقة <br />بالأمان.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='service-item d-flex justify-content-between mb-4'>
                                <div className='text-center service-icon'>
                                    <FaDesktop size={50} color='#019FFE' />
                                    <h4>فحص الموقع <br/>والجوال

                                    </h4>
                                </div>
                                <div className='vLine'></div>
                                <p>مراجعة الكود المصدري<br /> للتطبيق في محاولة لتحديد<br /> وإزالة نقاط الضعف المتعلقة <br />بالأمان.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services