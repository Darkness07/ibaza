import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import itemCart from "../../../DataBase/itemCart";
import { Link } from "react-router-dom";
const GroupedCarousel = () => {
  const items = itemCart
  let quantityItem=8
  const [groups, setGroups] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    if(windowWidth>1050){
      quantityItem = 8
    }
    else if(windowWidth<500){
      quantityItem = 3
    }
    else if(windowWidth<900){
      quantityItem = 6
    }
    else if(windowWidth<1050){
      quantityItem = 6
    }

    const groupedItems = items.reduce((acc, item, index) => {
      const groupIndex = Math.floor(index / quantityItem);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(item);
      return acc;
    }, []);
    setGroups(groupedItems);
  }, []);
  const carouselItems = groups.map((group) => {
    const carouselGroup = group.map((item) => {
        return <Link className="itemCartOther" to={`/Catalog/Details/${item.id}`}>
                  <div className="itemCart">
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.price}$</p>
                    <p>{item.price*87} сом</p>
                  </div>
                </Link> 
    });
    return <Carousel.Item key={group.id}><div className="wrap">{carouselGroup}</div></Carousel.Item>;
  });
  return <Carousel>{carouselItems}</Carousel>;
};

export default GroupedCarousel;