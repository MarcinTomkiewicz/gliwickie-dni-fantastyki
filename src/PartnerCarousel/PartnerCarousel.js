import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export const PartnerCarousel = ({ type }) => {
  const [partnerType, setPartnerType] = useState(type);

  console.log(partnerType);
  return (

    <Carousel controls="false" fade>
      <Carousel.Item>
      <img
      src={process.env.PUBLIC_URL + '/Fb_Cover_GDF.png'}
      alt="First slide"
    />
      </Carousel.Item>
    </Carousel>
  );
};
