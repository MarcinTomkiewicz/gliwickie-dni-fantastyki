import { LazyLoadImage } from "react-lazy-load-image-component";

import { guestsVip } from "../utils/backend";
import "bootstrap/dist/css/bootstrap.min.css";
import { BoldText } from "../utils/BoldText";

export const Guests = () => {
  return (
    <>
      <h1>Goście VIP</h1>
      {guestsVip.map((guest, i) => {
        return (
          <div key={guest.surname} className="inner__wrapper--top">
            <h3>
              <BoldText value={guest.name + " " + guest.surname} />
            </h3>
            <hr className="hr__content"></hr>
            <div>
              <LazyLoadImage
                src={guest.photo}
                alt={guest.name + " " + guest.surname}
                className={
                  i % 2 === 0 ? "guests__photo--left" : "guests__photo--right"
                }
              />
              {guest.descr.map((descr) => {
                return <div key={descr}>{descr}</div>;
              })}
              {guest.fanpage !== "" ? (
                <div>
                  <BoldText value="Fanpage: " />
                  <a
                    href={guest.fpLink}
                    rel="noreferrer"
                    target="_blank"
                    className="link-light"
                  >
                    {guest.fanpage}
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
