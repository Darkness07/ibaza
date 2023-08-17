import React from 'react'
import linkImg from '../../images/linkImg'
import { Link } from 'react-router-dom';

export default function Teaser() {
  return (
    <div className='Teaser'>
        <div className="background"></div>
        <div className="block">
            <h1>ВЫБЕРИ СВОЙ <br />iPHONE</h1>
            <div className="images">
                <div className="image">
                    <img src={linkImg.iPhone14} alt="" />
                    <a href="#">iPhone 14</a>
                </div>
                <div className="image">
                    <img src={linkImg.iPhone14Pro} alt="" />
                    <a href="#">iPhone 14 Pro</a>
                </div>
            </div>
            <Link to='/' className='info'>Посмотреть все</Link>

        </div>
    </div>
  )
}
