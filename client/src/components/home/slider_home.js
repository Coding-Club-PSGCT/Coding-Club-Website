import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../css/eventScreen.css';
import articles from '../../assets/img/articles2.jpg';
import contribute from '../../assets/img/contribute.jpg';
import events from '../../assets/img/events.jpg';
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade:true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        
        const get_slider = ()=>{
            return [events,articles,contribute]
            .map((url,index)=>{
                return (<div key={index} className="slider-image">
                   <img src={url} alt={"slider content"}/>
                </div>);
            });
        }
        return (
            <div className="scroller-home">
            <Slider {...settings}>
                {get_slider()}
            </Slider>
            </div>
            );
        }
}
