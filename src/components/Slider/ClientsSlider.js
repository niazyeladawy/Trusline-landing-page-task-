import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/zid-logo.png';
import img2 from '../../assets/logo-01.png';
import img3 from '../../assets/logo-03.png';
import './slider.css'

export default class ClientsSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                
                <Slider {...settings}>
                    <div className=" ">
                        <div className="slideritem">
                            <img className="img-fluid " src={img1} alt="" />
                        </div>

                    </div>

                    <div className=" ">
                        <div className="slideritem">
                            <img className="img-fluid " src={img2} alt="" />
                        </div>

                    </div>
                    <div className=" ">
                        <div className="slideritem">
                            <img className="img-fluid " src={img3} alt="" />
                        </div>

                    </div>
                    <div className=" ">
                        <div className="slideritem">
                            <img className="img-fluid " src={img3} alt="" />
                        </div>

                    </div>
                    <div className=" ">
                        <div className="slideritem">
                            <img className="img-fluid " src={img3} alt="" />
                        </div>

                    </div>
                    <div className=" ">
                        <div className="slideritem">
                            <img className="img-fluid " src={img3} alt="" />
                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
}