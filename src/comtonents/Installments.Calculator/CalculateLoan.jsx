import React, { useState } from 'react'

export default function CalculateLoan() {
    const [CountrySelectionFirst, setCountrySelectionFirst]=useState(false)
    const [CountrySelectionSecond, setCountrySelectionSecond]=useState(false)
    function activeCountrySelectionFirst(){setCountrySelectionFirst(!CountrySelectionFirst)}
    function activeCountrySelectionSecond(){setCountrySelectionSecond(!CountrySelectionSecond)}
    const [CountrySelectionActiveFirst, setCountrySelectionActiveFirst] = useState('Онлайн');
    const [CountrySelectionActiveSecond, setCountrySelectionActiveSecond] = useState('DOSCREDOBANK');
    const countriesFirst=[
        'Онлайн',
        'Онлайн',
    ]
    const countriesSecond=[
        'DOSCREDOBANK',
        'DOSCREDOBANK',
    ]
    function activeCountrySelectionbtnFirst(item){
        setCountrySelectionActiveFirst(item.target.innerHTML)
        console.log(item.target.innerHTML);
        activeCountrySelectionFirst();
    }
    function activeCountrySelectionbtnSecond(item){
        setCountrySelectionActiveSecond(item.target.innerHTML)
        console.log(item.target.innerHTML);
        activeCountrySelectionSecond();
    }
  return (
    <div className='CalculateLoan Fav-Ins-block'>
        <p className="h4">Рассчитать кредит</p>


        <div className={`input CalculateLoanMain ${CountrySelectionFirst?"":"active"}`}>
            <p>Выберите опцию</p>
            <div className="CalculateLoanMainBlock ">
                <button onClick={activeCountrySelectionFirst} className={`button  ${CountrySelectionFirst?"active":""}`}>
                    {CountrySelectionActiveFirst} 
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.71667 4.36667C3.62778 4.36667 3.54178 4.35 3.45867 4.31667C3.37511 4.28333 3.30556 4.23889 3.25 4.18333L0.183333 1.11667C0.0611109 0.994445 0 0.838889 0 0.65C0 0.461111 0.0611109 0.305555 0.183333 0.183333C0.305555 0.0611109 0.461111 0 0.65 0C0.838889 0 0.994445 0.0611109 1.11667 0.183333L3.71667 2.78333L6.31667 0.183333C6.43889 0.0611109 6.59444 0 6.78333 0C6.97222 0 7.12778 0.0611109 7.25 0.183333C7.37222 0.305555 7.43333 0.461111 7.43333 0.65C7.43333 0.838889 7.37222 0.994445 7.25 1.11667L4.18333 4.18333C4.11667 4.25 4.04444 4.29711 3.96667 4.32467C3.88889 4.35267 3.80556 4.36667 3.71667 4.36667Z" fill="black"/>
                    </svg>
                </button>
                <div className={`showElementMedia ${CountrySelectionFirst?"":"active"}`}>
                    <div className="div">
                        {countriesFirst.map(item=>
                            <button Country={item} onClick={activeCountrySelectionbtnFirst}>
                                {item}
                            </button>    
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className={`input CalculateLoanMain ${CountrySelectionSecond?"":"active"}`}>
            <p>Выбрать банк</p>
            <div className="CalculateLoanMainBlock ">
                <button onClick={activeCountrySelectionSecond} className={`button ${CountrySelectionSecond?"active":""}`}>
                    {CountrySelectionActiveSecond} 
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.71667 4.36667C3.62778 4.36667 3.54178 4.35 3.45867 4.31667C3.37511 4.28333 3.30556 4.23889 3.25 4.18333L0.183333 1.11667C0.0611109 0.994445 0 0.838889 0 0.65C0 0.461111 0.0611109 0.305555 0.183333 0.183333C0.305555 0.0611109 0.461111 0 0.65 0C0.838889 0 0.994445 0.0611109 1.11667 0.183333L3.71667 2.78333L6.31667 0.183333C6.43889 0.0611109 6.59444 0 6.78333 0C6.97222 0 7.12778 0.0611109 7.25 0.183333C7.37222 0.305555 7.43333 0.461111 7.43333 0.65C7.43333 0.838889 7.37222 0.994445 7.25 1.11667L4.18333 4.18333C4.11667 4.25 4.04444 4.29711 3.96667 4.32467C3.88889 4.35267 3.80556 4.36667 3.71667 4.36667Z" fill="black"/>
                    </svg>
                </button>
                <div className={`showElementMedia ${CountrySelectionSecond?"":"active"}`}>
                    <div className="div">
                        {countriesSecond.map(item=>
                            <button Country={item} onClick={activeCountrySelectionbtnSecond}>
                                {item}
                            </button>    
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className="input Term">
            <p>Срок</p>
            <input type="text"  placeholder='Срок'/>
        </div>
        <div className="input initial">
            <p>Первоначальный взнос</p>
            <input type="text"  placeholder='Взнос'/>
        </div>
    </div>
  )
}
