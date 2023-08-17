import React, { useEffect, useState } from 'react';
import { json, useParams } from "react-router-dom";
import { getTrackBackground } from 'react-range';
import { Carousel } from 'react-bootstrap';
import WithBuy from '../comtonents/ProdudtCard/WithBuy';
import { Link } from 'react-router-dom';
import itemCart from '../DataBase/itemCart';

export default function ProductCard({ darkMode, onClickDarkmode}) {
    const params = useParams();
    const [data, setData] = useState({});
    const ProductId = (params.id)-1;
    const [Characteristics, setCharacteristics]=useState(false)
    function activeCharacteristics(){setCharacteristics(!Characteristics)}
    console.log(itemCart[ProductId]);
    let CarouselMediaImages=itemCart[ProductId].images; 
    // itemCart[ProductId].images.map((obj ,index)=>{CarouselMediaImages[index]=obj})
    let CarouselMediaItem=[itemCart[ProductId].img, ...CarouselMediaImages];

  return (
    <div className='ProductId'>

        <div className="Ssylka">
            <div className="block">
                <p>Главная страница  / Каталог  / {itemCart[ProductId].title}</p>
            </div>
        </div>
        <div className="ProductIdMain">
            <div className="block">
                <div className="ProductIdMainleft">
                    <div className="price">
                        <h2 className='title'>{itemCart[ProductId].title}</h2>
                        <div>
                            <p className='som'>{(itemCart[ProductId].price)*82} сом</p>
                            <p className='usd'>$ {itemCart[ProductId].price}</p>
                        </div>
                    </div>
                    <div className="Color">
                        <p>Цвет</p>
                        {itemCart[ProductId].colors.map((item, index)=>
                            <button indexColor={`${index}`}>
                                <span className='buttonColor'
                                style={{
                                    background:item.color,
                                }}
                                ></span>
                                {item.title}
                            </button>
                        )}
                    </div>
                    <div className="Memory">
                        <p>Память</p>
                        <div className="MemoryBlock">
                            {itemCart[ProductId].Memory.map((item)=>
                                <button className=''>
                                    {item.title}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={`Characteristics ${Characteristics?"active":""}`}>
                        <div className="CharacteristicsBlock">
                        <button onClick={activeCharacteristics} className={`${Characteristics?"active":""}`}>
                            Характеристики 
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.71667 4.36667C3.62778 4.36667 3.54178 4.35 3.45867 4.31667C3.37511 4.28333 3.30556 4.23889 3.25 4.18333L0.183333 1.11667C0.0611109 0.994445 0 0.838889 0 0.65C0 0.461111 0.0611109 0.305555 0.183333 0.183333C0.305555 0.0611109 0.461111 0 0.65 0C0.838889 0 0.994445 0.0611109 1.11667 0.183333L3.71667 2.78333L6.31667 0.183333C6.43889 0.0611109 6.59444 0 6.78333 0C6.97222 0 7.12778 0.0611109 7.25 0.183333C7.37222 0.305555 7.43333 0.461111 7.43333 0.65C7.43333 0.838889 7.37222 0.994445 7.25 1.11667L4.18333 4.18333C4.11667 4.25 4.04444 4.29711 3.96667 4.32467C3.88889 4.35267 3.80556 4.36667 3.71667 4.36667Z" fill="black"/>
                            </svg>
                        </button>
                        <div className={`showElement ${Characteristics?"active":""}`}>
                            {itemCart[ProductId].Characteristics}
                        </div>

                        </div>
                    </div>
                    <div className="Basket">
                        <button>Добавить в корзину 
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25.5" cy="25.5" r="18.5" fill="#0000FF"/>
                                <circle cx="25.5" cy="25.5" r="22" stroke="black" stroke-opacity="0.05" stroke-width="7"/>
                                <line x1="20" y1="26" x2="32" y2="26" stroke="white" stroke-width="0.923077"/>
                                <line x1="26.0001" y1="20" x2="26.0001" y2="32" stroke="white" stroke-width="0.923077"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="center"><img src={itemCart[ProductId].img} alt="" /></div>
                <div className="ProductIdMainright">
                    {itemCart[ProductId].images.map(item=>
                            <img src={item} alt="" />
                    )}
                </div>
            </div>
            <div className="block">
                <Link to={`/Catalog/Details/Ordering/${itemCart[ProductId].id}`}>
                    <button className='bottoBtn buy'>Купить</button>
                </Link>
                <Link to={`/Catalog/Details/Installments`}><button className='bottoBtn installment'>Оформить рассрочку</button></Link>
            </div>
        </div>
        <div className="ProductIdMain__Media">
            <div className="block">
                    <Carousel className='CarouselItems'>
                        {CarouselMediaItem.map((item, index) => 
                            <Carousel.Item>
                                <div className={`itemCart`}>
                                    <img src={item} alt="" />
                                </div>
                            </Carousel.Item> )}
                    </Carousel>

                    <div className="ProductIdMainleft">
                        <div className="price">
                        <h2 className='title'>{itemCart[ProductId].title}</h2>
                        <div>
                            <p className='som'>{(itemCart[ProductId].price)*82} сом</p>
                            <p className='usd'>$ {itemCart[ProductId].price}</p>
                        </div>
                        </div>
                        <div className="Color">
                        <p>Цвет</p>
                        {itemCart[ProductId].colors.map((item, index)=>
                            <button indexColor={`${index}`}>
                                <span className='buttonColor'
                                style={{
                                    background:item.color,
                                }}
                                ></span>
                                {item.title}
                            </button>
                        )}
                        </div>
                        <div className="Memory">
                        <p>Память</p>
                        <div className="MemoryBlock">
                            {itemCart[ProductId].Memory.map((item)=>
                                <button className=''>
                                    {item.title}
                                </button>
                            )}
                        </div>
                        </div>

                        <div className="bottoBtnBlock">
                            <Link to={`/Catalog/Details/Ordering/${itemCart[ProductId].id}`}>
                                <button className='bottoBtn buy'>Купить</button>
                            </Link>
                            <button className='bottoBtn installment'>Оформить рассрочку</button>
                        </div>
                        <div className="Basket">
                            <button>Добавить в корзину 
                                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25.5" cy="25.5" r="18.5" fill="#0000FF"/>
                                    <circle cx="25.5" cy="25.5" r="22" stroke="black" stroke-opacity="0.05" stroke-width="7"/>
                                    <line x1="20" y1="26" x2="32" y2="26" stroke="white" stroke-width="0.923077"/>
                                    <line x1="26.0001" y1="20" x2="26.0001" y2="32" stroke="white" stroke-width="0.923077"/>
                                </svg>
                            </button>
                        </div>
                        <div className={`CharacteristicsMedia ${Characteristics?"":"active"}`}>
                            <div className="CharacteristicsBlockMedia">
                                <button onClick={activeCharacteristics} className={`${Characteristics?"active":""}`}>
                                    Характеристики 
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.71667 4.36667C3.62778 4.36667 3.54178 4.35 3.45867 4.31667C3.37511 4.28333 3.30556 4.23889 3.25 4.18333L0.183333 1.11667C0.0611109 0.994445 0 0.838889 0 0.65C0 0.461111 0.0611109 0.305555 0.183333 0.183333C0.305555 0.0611109 0.461111 0 0.65 0C0.838889 0 0.994445 0.0611109 1.11667 0.183333L3.71667 2.78333L6.31667 0.183333C6.43889 0.0611109 6.59444 0 6.78333 0C6.97222 0 7.12778 0.0611109 7.25 0.183333C7.37222 0.305555 7.43333 0.461111 7.43333 0.65C7.43333 0.838889 7.37222 0.994445 7.25 1.11667L4.18333 4.18333C4.11667 4.25 4.04444 4.29711 3.96667 4.32467C3.88889 4.35267 3.80556 4.36667 3.71667 4.36667Z" fill="black"/>
                                    </svg>
                                </button>
                                <div className={`showElementMedia ${Characteristics?"":"active"}`}>
                                    <div className="div">
                                        {itemCart[ProductId].Characteristics}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="BuyWith">
            <div className="block">
                <h1>С этим товаром покупают</h1>
                <WithBuy/>

            </div>
        </div>

    </div>
  )
}
