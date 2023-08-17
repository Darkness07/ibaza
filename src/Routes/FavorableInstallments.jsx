import itemCart from '../DataBase/itemCart'
import React, { useEffect, useState } from 'react';
import { json, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import ItemCarts from '../comtonents/Installments.Calculator/ItemCarts';
import BankTerms from '../comtonents/Installments.Calculator/BankTerms';
import Loan from '../comtonents/Installments.Calculator/Loan';
import CalculateLoan from '../comtonents/Installments.Calculator/CalculateLoan';
import Consult from '../comtonents/Installments.Calculator/Consult';
import Result from '../comtonents/Installments.Calculator/Resilt';
export default function FavorableInstallments({darkMode, Bag, kours}) {
  // const params = useParams();
  // const [data, setData] = useState({});
  // const ProductId = (params.id)-1;
  // const [Characteristics, setCharacteristics]=useState(false)
  // function activeCharacteristics(){setCharacteristics(!Characteristics)}
  // let CarouselMediaImages=[]; itemCart[ProductId].images.map((obj ,index)=>{CarouselMediaImages[index]=obj})
  // let CarouselMediaItem=[itemCart[ProductId].img, ...CarouselMediaImages];
  return (
    <div className='FavorableInstallments'>
      <div className="Ssylka">
          <div className="block">
              <p>Главная страница  / Рассрочка </p>
          </div>
      </div>

      <div className="block">
        <h1>Выгодная рассрочка <br /> только у нас</h1>
        <div className="InstallmentsBlocks">
          <ItemCarts Bag={Bag} kours={kours}/>
          <BankTerms/>
          <Loan/>
          <CalculateLoan/>
          <Consult/>
          <Result/>
        </div>
      </div>
    </div>
  )
}
