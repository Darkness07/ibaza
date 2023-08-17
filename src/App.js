import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import Home from './Routes/Home';
import Catalog from './Routes/Catalog';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './Routes/ProductCard';
import itemCart from './DataBase/itemCart';
import Ordering from './Routes/Ordering';
import Header from './comtonents/Header';
import HeaderMedia from './comtonents/HeaderMedia';
import Footer from './comtonents/Footer';
import FooterMedia from './comtonents/FooterMedia';
import FavorableInstallments from './Routes/FavorableInstallments';
import Contact from './Routes/Contact';
import Error from './Routes/Error';
import Bag from './Routes/Bag';
import Confirmation from './Routes/Confirmation';

function App() {
  let Bag_item=[
    {
      id:1,
      Quantity:1,
    },
    {
      id:2,
      Quantity:1
    },
    {
      id:3,
      Quantity:1
    },
  ]
  let kours = 87.30;

  const [darkMode,setDarkMode] = useState(true);

  function onClickDarkmode(){setDarkMode(!darkMode)}
  
  return (
    <div className="App" >
       <BrowserRouter>
       
        <Header darkMode={darkMode} />

        <HeaderMedia darkMode={darkMode}/>
        <Routes>
          <Route element={<Home darkMode={darkMode} />} path="/" />
          <Route element={<Catalog darkMode={darkMode} />} path="/Catalog" />
          <Route path="/Catalog/Details/:id" element={<ProductCard  darkMode={darkMode} />}/>
          <Route path="/Catalog/Details/Ordering/:id" element={<Ordering addCart={itemCart} darkMode={darkMode} Bag={Bag_item}/>}/>
          <Route path="/Catalog/Details/Installments" element={<FavorableInstallments darkMode={darkMode} Bag={Bag_item} kours={kours}/>}/>
          <Route path="/Contacts/" element={<Contact darkMode={darkMode} />}/>
          <Route path="/Error" element={<Error darkMode={darkMode}  />}/>
          <Route path="/Catalog/Confirmation" element={<Confirmation darkMode={darkMode} kours={kours} Bag={Bag_item}/>}/>
          <Route path="/Bag" element={<Bag darkMode={darkMode} kours={kours} Bag={Bag_item}/>}/>
        </Routes>

        <Footer darkMode={darkMode}/>
        <FooterMedia darkMode={darkMode}/>

       </BrowserRouter>
    
    </div>
  );
}

export default App;