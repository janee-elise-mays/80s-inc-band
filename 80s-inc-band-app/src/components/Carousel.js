import React from "react";
import {Carousel} from '3d-react-carousal';
import image3 from '../images/hair.jpg';
import image4 from '../images/hands.jpg';
import image5 from '../images/guitar.jpg';
import image6 from '../images/jump.jpg';
import image7 from '../images/salute.jpg';

function Photos() {

    let slides = [
        <img  src={image3} alt="black and white photo guitarist/800/300/" />,
        <img  src={image4} alt="photo of crowd/800/300/" />,
        <img  src={image5} alt="closeup photo of guitar/800/300/" />,
        <img  src={image6} alt="image of band member jumping/800/300/" />,
        <img  src={image7} alt="image of guitarist salute/800/300/" />   ];

    return (
        <Carousel slides={slides} autoplay={false}/>
    )
}

export default Photos;