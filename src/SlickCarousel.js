import React from "react";
import Slider from "react-slick";
import {list} from "./data";
import {FaQuoteRight} from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SlickCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };
      const people = list;
      return (
        <div className="slick-container">
            <Slider {...settings}>
            {people.map((person)=>{
                const {id,image,name,title,quote} = person;
                return (<article key={id}>
                    <img src={image} alt={name} className="person-img" />
                    <h5 className="name">{name}</h5>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon"/>
                </article>);
            })}
            </Slider>
        </div>
      );
}

export default SlickCarousel;