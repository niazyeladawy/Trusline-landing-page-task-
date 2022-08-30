import React from 'react'
import news1 from '../../assets/news-01_P9BGRtW.png';
import news2 from '../../assets/news-02_6kJ7lqm.png';
import news3 from '../../assets/news-03_HC7vMli.png';
import './news.css'
import { FaLongArrowAltLeft } from 'react-icons/fa';

const News = () => {
    return (
        <section id='news' className='py-5 bg-black mt-5'>
            <div className='container'>
                <div className='section-head mb-5'>
                    <span ></span>
                    <h2 className='text-white mb-3'>الأخبار</h2>

                </div>
                <div className='newscontent'>
                    <div className='newsitem d-flex align-items-center mt-3'>
                        <div className='position-relative me-4 newsimagecontainer'>
                            <img className='rounded-4' src={news3} alt="" />
                            <div className='newsoverlay rounded-4'></div>
                        </div>

                        <div className='newsitemcontent'>
                            <h3 className='text-white'>الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية

                            </h3>
                            <p>شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات
                            </p>

                            <a href="#">اقرأ المقال <FaLongArrowAltLeft /> </a>
                        </div>
                    </div>
                    <div className='newsitem d-flex  align-items-center mt-3'>
                        <div className='position-relative me-4 newsimagecontainer'>
                            <img className='rounded-4' src={news2} alt="" />
                            <div className='newsoverlay rounded-4'></div>
                        </div>

                        <div className='newsitemcontent'>
                            <h3 className='text-white'>الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية

                            </h3>
                            <p>شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات
                            </p>

                            <a href="#">اقرأ المقال <FaLongArrowAltLeft /> </a>
                        </div>
                    </div>
                    <div className='newsitem d-flex align-items-center mt-3'>
                        <div className='position-relative me-4 newsimagecontainer'>
                            <img className='rounded-4' src={news1} alt="" />
                            <div className='newsoverlay rounded-4'></div>
                        </div>

                        <div className='newsitemcontent'>
                            <h3 className='text-white'>الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية

                            </h3>
                            <p>شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات
                            </p>

                            <a href="#">اقرأ المقال <FaLongArrowAltLeft /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News