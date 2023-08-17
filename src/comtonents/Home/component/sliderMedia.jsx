import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import linkImg from '../../../images/linkImg';
import { Link } from 'react-router-dom';

export default function SliderMedia() {
  return (
    <div className='SliderMedia'>
        <div className="block">
            <h1>ВЫБЕРИ СВОЙ <br /> iPHONE</h1>
            <div className='class'>
                <Carousel>
                    <Carousel.Item>
                        <div className="image">
                            <img src={linkImg.iPhone14} alt="" />
                            <a href="#">iPhone 14</a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="image">
                            <img src={linkImg.iPhone14Pro} alt="" />
                            <a href="#">iPhone 14</a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Link to='/' className='info'>Посмотреть все</Link>
        </div>
    </div>
  )
}
