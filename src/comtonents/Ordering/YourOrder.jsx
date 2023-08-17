import React from 'react'
import itemCart from '../../DataBase/itemCart'
import Quantity from './YourOrder/Quantity';
import linkImg from '../../images/linkImg';
export default function YourOrder({Bag}) {

    //filter///////////////////////////
    // let lol2=[];
    // itemCart.map((item, index)=> {
    //     Bag.map((i, index)=> {
    //         if(item.id === Bag[index]){
    //             let lol3={}
    //             lol3.id=Bag[index]-1;
    //             lol3.Quantity=1
    //             lol2[Bag[index]-1]=lol3
    //         }
    //     })
    //     console.log(lol2);
    // })
    //filter///////////////////////////
    return (
        <div className='YourOrderMain'>
            <p className="h4">Ваш заказ</p>
            <div className='YourOrder'>
                {Bag.map(i =>

                    <div className='itemCart'>

                        <div className="img"><img src={itemCart[i.id].img} alt="" /></div>

                        <div className='titleOther'>
                            <div className="title">{itemCart[i.id].title}</div>
                        </div>
                        
                        <Quantity quantity={i.Quantity}/>

                        <p className="price">
                            <span className='usd'>${itemCart[i.id].price}</span>
                            <span className='som'>{itemCart[i.id].price*87} сом</span>
                        </p>

                        <button className='delete'><img src={linkImg.Dlelete} alt="" /></button>

                    </div>

                )}
            </div>
        </div>
    )
}