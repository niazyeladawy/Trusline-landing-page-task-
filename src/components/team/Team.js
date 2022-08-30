import React from 'react'
import image1 from '../../assets/mohammad-rahmani-_Fx34KeqIEw-unsplash.png'
import image2 from '../../assets/charlesdeluvio-Lks7vei-eAg-unsplash.png'
import './team.css'

const Team = () => {
    return (
        <section id='team' className='py-5'>
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <div className='position-relative me-2 d-none d-lg-block'>
                        <img src={image1} className="img-fluid rounded-4" alt="" />
                        <div className='team-firstover rounded-4'>

                        </div>
                    </div>
                    <div className='position-relative d-none d-lg-block'>
                        <img src={image2} className="img-fluid rounded-4" alt="" />
                        <div className='team-secondover rounded-4'>

                        </div>
                    </div>

                    <div className='section-head'>
                        <span ></span>
                        <h2 className=' mb-4'>فريقـنا</h2>
                        <p className='mb-0 '>في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات قادمة.
                        </p>
                        <p className='mb-4'>يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team