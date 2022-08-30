import React from 'react'
import ClientsSlider from '../Slider/ClientsSlider'



const Clients = () => {
    return (
        <section className='py-5 '>
            <div className='container'>
                <div className='section-head mb-5'>
                    <span ></span>
                    <h2 className=' mb-3'>عمـلاؤنـا</h2>
                </div>
                <ClientsSlider/>
                
            </div>
        </section>
    )
}

export default Clients