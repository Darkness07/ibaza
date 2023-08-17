import React from 'react'
import Income from '../comtonents/Confirmation/Income'
import Passport from '../comtonents/Confirmation/Passport'
import itemCart from '../DataBase/itemCart'
import linkImg from '../images/linkImg'

export default function Confirmation({Bag}) {
  return (
    <div className='Confirmation'>
        <div className="Ssylka">
            <div className="block">
                <p>Главная страница  / Каталог</p>
            </div>
        </div>
        <div className="block ConfirmationBlock">
            <h1>Покупка в рассрочку</h1>
            <div className="ConfirmationLeft">
                <div className="itemCarts">
                {Bag.map(i =>

                    <div className='itemCart'>
                        <div className="img"><img src={itemCart[i.id].img} alt="" /></div>

                        <div className="itemCartLeft">
                            <p className="h4">{itemCart[i.id].title}</p>
                            <div className='price'>
                                <p>Цена устройства</p>
                                <span className='usd'>$ 590. 00</span>
                                <div className="som">51625 сом</div>
                            </div>
                            <div className="term">
                                <p>Срок кредита</p>
                                <span>на 3 месяца(ев)</span>
                            </div>
                        </div>
                    </div>

                )}
                </div>

            </div>
            <div className="ConfirmationRight"> 
                <div className="ConfirmationBlock">
                    <p className="h4">Заполнить заявку</p>
                    <p>Пожалуйста, заполните все поля для подтверждения вашего заказа</p>
                    <div className="inputs">
                        <input placeholder='Имя' type="text" name="Confirm"/>
                        <input placeholder='Фамилия' type="text" name="Confirm"/>
                        <input placeholder='Номер телефона' type="tel" name="Confirm"/>
                        <input placeholder='Email' type="email" name="Confirm"/>
                    </div>
                    <Passport/>
                    <Income/>
                </div> 

            </div>

        </div>
    </div>
  )
}
