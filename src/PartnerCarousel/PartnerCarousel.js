import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export const PartnerCarousel = ({ type }) => {
  const [partnerType, setPartnerType] = useState(type);

  return (
    <img
      src={process.env.PUBLIC_URL + "/gdf2022-banner.png"}
      alt="Banner Gliwickich Dni Fantastyki"
      className="aside__photo"
    />
  );
};
