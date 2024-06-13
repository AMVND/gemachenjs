import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../img/logo/banner.jpg';

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src= {banner1} className="d-block w-100" alt='first banner'/>
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= {banner1} className="d-block w-100" alt='second banner'/>
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;