import React, {useState, useEffect} from 'react'
import itemComment from '../../DataBase/itemComment'
import Carousel from 'react-bootstrap/Carousel';


const GroupedCarousel = () => {
    const items = itemComment
    let quantityItem=3
    const [groups, setGroups] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
  
      if(windowWidth>1050){
        quantityItem = 3
      }
      else if(windowWidth<500){
        quantityItem = 1
      }
      else if(windowWidth<1050){
        quantityItem = 2
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
          return  <div className={`Comment`}>
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.year} года</p>
                    <p className='p'>{item.title}</p>
                    <a href="#">Читать еще</a>
                  </div>
      });
      return <Carousel.Item className='CarouselItem' key={group.id}><div className="wrap">{carouselGroup}</div></Carousel.Item>;
    });
    return <Carousel>{carouselItems}</Carousel>;
  };


export default function Comments() {
    let i = 0
  return (
    <div className='Comments'>
        <div className="block">
        <h1>Отзывы</h1>
        <GroupedCarousel/>
            {/* <Carousel>
                {itemComment.map(obj=>
                    <Carousel.Item className='CarouselItem'>
                        <div className="wrap">
                            {obj.map(obj2=>{
                                    i++
                                    return(
                                        <div className={`Comment`}>
                                            <img src={obj2.img} alt="" />
                                            <h3>{obj2.name}</h3>
                                            <p>{obj2.year} года</p>
                                            <p className='p'>{obj2.title}</p>
                                            <a href="#">Читать еще</a>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </Carousel.Item>
                )}
            </Carousel> */}
        </div>
    </div>
  )
}
