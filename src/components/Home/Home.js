import React from 'react'
import image from '../../assets/home.png'
import './home.css'

const Home = () => {
    return (
        <div id='home' className='vh-100 ' style={{ 
            backgroundImage: ` linear-gradient(179.96deg, rgba(0, 0, 0, 0.83) 16.76%, rgba(0, 0, 0, 0.97) 67.5%, #000000 103.33%), url("${image}")`,
          }} >
            <div className='home-content text-white d-flex flex-column  justify-content-center h-100 align-items-center'>
                <h1 className='mb-3 text-center'>ترست لاين تقدم لأعمالك الحماية </h1>
                <p className='px-5 px-md-0'>ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول الأمن السيبراني.</p>
                <button className='rounded-pill btn px-5 text-white py-3 mt-5'>تواصل معنا</button>
            </div>
        </div>
    )
}

export default Home