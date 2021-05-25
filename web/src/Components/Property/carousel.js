import React from 'react';
import './styles.css';
import { Carousel } from 'react-bootstrap'
import ImageNotAvailable from '../../Images/ImageNotAvailable.jpg'

export default function PropertyCarousel({ type, images }) {
    return (
        <Carousel fade className={`${type}`}>
            {images ? images.map((url, index) => {
                return <Carousel.Item>
                    <img
                        className={`d-block ${type}`}
                        src={url}
                        alt={`Image ${index}`}
                    />
                </Carousel.Item>
            }) : <Carousel.Item><img src={ImageNotAvailable} className={`d-block ${type}`} /></Carousel.Item>}
        </Carousel>
    )
}