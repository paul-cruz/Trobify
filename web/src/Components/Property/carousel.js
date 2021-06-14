import React from 'react';
import './styles.css';
import { Carousel } from 'react-bootstrap'
import ImageNotAvailable from '../../Images/ImageNotAvailable.jpg'

export default function PropertyCarousel({ type, images }) {
    return (
        <Carousel fade className={`${type}`}>
            {images ? images.map((url, index) => {
                return <Carousel.Item key={index}>
                    <img
                        className={`d-block ${type}`}
                        src={url}
                        alt={`Property ${index}`}
                    />
                </Carousel.Item>
            }) : <Carousel.Item><img src={ImageNotAvailable} className={`d-block ${type}`} alt="Not found" /></Carousel.Item>}
        </Carousel>
    )
}