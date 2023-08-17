import React,{useState, useEffect} from 'react';
import itemCart from '../DataBase/itemCart';
import MySlider from '../comtonents/Catalog/MySlider';
import { Carousel, CarouselItem } from 'react-bootstrap';
import CatalogCarousel from '../comtonents/Catalog/CatalogCaroudel';

export default function Catalog({darkMode}) {
  const [value, setValue] = useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };


  return (
    <div className='Catalog'>
      <div className="Ssylka">
        <div className="block">
          <p>Главная страница  / Каталог</p>
        </div>
      </div>
      <div className="CatalogMain">
        <div className="block">
          <div className="wrapper">
            <div className="filter">
              <div className="filterBlock">
                <div className="Checkboxes">
                  <div className='iPhone'>
                    <input name='iPhone' id='iPhone' type="checkbox" />
                    <label htmlFor="iPhone">iPhone</label>
                  </div>
                  <div className='Аксессуары'>
                    <input name='Аксессуары' id='Аксессуары' type="checkbox" />
                    <label htmlFor="Аксессуары">Аксессуары</label>
                  </div>
                  <div className='TradeIniPhone'>
                    <input name='TradeIniPhone' id='TradeIniPhone' type="checkbox" />
                    <label htmlFor="TradeIniPhone">Trade In iPhone</label>
                  </div>
                </div>
                <MySlider/>
              </div>
            </div>
            <CatalogCarousel />
          </div>
          {/* <CatalogCarousel/> */}
          
        </div>
      </div>
    </div>
  )
}



