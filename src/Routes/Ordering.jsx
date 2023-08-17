import React, { useState } from 'react'
import { json, useParams } from "react-router-dom";

import itemCart from '../DataBase/itemCart';
import Checkboxes from '../comtonents/Ordering/Checkboxes';
import ContactDetails from '../comtonents/Ordering/ContactDetails';
import Address from '../comtonents/Ordering/Address';
import YourOrder from '../comtonents/Ordering/YourOrder';
import CommentTo from '../comtonents/Ordering/CommentTo';
import Total from '../comtonents/Ordering/Total';

export default function Ordering({darkMode, Bag}) {
    const ParamId = useParams().id-1;

    return (
        <div className='Ordering'>
            <div className="Ssylka">
                <div className="block">
                    <p>Главная страница  / Каталог  </p>
                </div>
            </div>
            <div className="block">
                <h1>Оформление заказа</h1>
                <Checkboxes/> 
                <ContactDetails/>
                <Address />
                <YourOrder Bag={Bag}/>
                <CommentTo/>
                <Total/>

            </div>
      </div>
    )
}
