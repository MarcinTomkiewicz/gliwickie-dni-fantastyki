import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export const PartnerCarousel = ({ type }) => {
  const [partnerType, setPartnerType] = useState(type);

  console.log(partnerType);
  return (
    <img src={process.env.PUBLIC_URL + '/Plakat_GDF.png'} className="aside__photo"/>
  );
};
