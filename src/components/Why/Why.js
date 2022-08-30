import React from 'react';
import './why.css';
import img from '../../assets/Mask group.png';
import shield from '../../assets/shielldh.png';
import shield2 from '../../assets/Mask groupdasd.png'
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const Why = () => {
    return (
        <section id='why' className='bg-black py-5'>
            <div className='container'>
                <div className='section-head'>
                    <span ></span>
                    <h2 className='text-white mb-3'>لماذا ترست لاين؟</h2>
                    <p className='mb-4'>نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى  <br />لرفع مستوى الأمن في جميع الكيانات والمؤسسات</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='item item1 d-flex flex-column justify-content-end ' style={{ backgroundImage: `url("${shield}")`, backgroundRepeat: "no-repeat", backgroundPosition: 'right', backdropFilter: 'blur(73.2834px);' }}>
                            <h3 className='text-white'>نوفر مستوى عالي من الحماية.</h3>
                            <p className='mb-4'>تعرف أكثر على دورنا في توفير الحماية.</p>
                        </div>
                        <div className='item item2 mt-4 py-4' >
                            <div className='programs  ms-5 position-relative'>
                                <div className='program program1 d-flex py-3 px-4 align-items-center'>
                                    <div className='me-4'>
                                        <FaChevronRight />
                                        <FaChevronLeft />
                                    </div>
                                    <span>البرامج المعلـقة</span>

                                </div>
                                <div className='program program2 d-flex py-3 px-4 mt-3 align-items-center'>
                                    <div className='me-4'>
                                        <FaChevronRight />
                                        <FaChevronLeft />
                                    </div>
                                    <span>البرامج المعلـقة</span>
                                </div>
                                <div className='program program3 d-flex py-3 px-4 align-items-center'>
                                    <div className='me-4'>
                                        <FaChevronRight />
                                        <FaChevronLeft />
                                    </div>
                                    <span>جمـيع البرامـج</span>
                                </div>
                            </div>
                            <div className='text-center mt-3'>
                                <h3 className='text-white'>نكون الشريك الموثوق لعملائنا.</h3>
                                <p className='mb-4'>نقدم خدمات وحلول احترافية في مجال الأمن السيبراني. </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='item p-4 pe-0 item3 mb-4 overflow-hidden mt-4 mt-lg-0' >
                            <h3 className='text-white'>نقدم خدمات فعالة.</h3>
                            <p className='mb-4'>نسعى لتقليل المخاطر على مستوى المؤسسات </p>
                            <div className='text-end'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='item p-4 pe-0 item4 d-flex align-items-center' style={{ backgroundImage: `url("${shield2}")`, backgroundRepeat: "no-repeat", backgroundPosition: 'left' ,height:'190px' }}>
                            <h3 className='text-white'>نتقدم بخطوة على التهديدات<br/> السيبرانية ونقاط الضعف.</h3>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why