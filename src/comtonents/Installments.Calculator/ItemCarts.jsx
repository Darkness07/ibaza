import React from 'react'
import itemCart from '../../DataBase/itemCart'

export default function ItemCarts({Bag, kours}) {

    // filter///////////////////////////
    let lol2=[];
    itemCart.map((item, index)=> {
        Bag.map((i, index)=> {
            if(item.id === Bag[index].id){
                let lol3={}
                lol3.id=Bag[index].id-1;
                lol3.Quantity=1
                lol3.Color=item.colors[0].title
                lol3.Memory=item.Memory[0].title
                lol2[Bag[index].id-1]=lol3
            }
        })
        console.log(Bag);
    })
    // filter///////////////////////////

    return (
        <div className='ItemCarts Fav-Ins-block'>
            {Bag.map(obj=>
                <div className='itemCart'>
                    <div className="img">
                        <img src={itemCart[obj.id].img} alt="" />
                    </div>
                    <div className="itemCartLeft">
                        <button>Изменить</button>
                        <p className='h4'>Iphone 14 Pro</p>
                        <div>
                            <p>Цена $: {itemCart[obj.id].price}</p>
                            <p>Цена сом: {itemCart[obj.id].price*kours}</p>
                            <p>Цвет: {obj.Color}</p>
                            <p>Память: {obj.Memory}</p>
                        </div>
                    </div>
                    {/* {itemCart[obj].id} */}

                </div>    
            )}
        </div>
    )
}
