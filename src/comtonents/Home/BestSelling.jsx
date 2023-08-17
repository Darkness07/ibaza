import React from 'react'
import itemCart from '../../DataBase/itemCart'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import GroupedCarousel from './component/GroupedCarousel';

export default function BestSelling() {
  return (
    <div className='BestSelling'>
      <div className="block">
        <h1>Лучшие продажи</h1>
            <GroupedCarousel/>
            <Link to='/Catalog' className='block_btn'>Открыть каталог</Link>
      </div>
    </div>
  )
}