import { LazyLoadImage } from "react-lazy-load-image-component";

import { guestsVip } from "../utils/backend";
import "bootstrap/dist/css/bootstrap.min.css";
import { BoldText } from "../utils/BoldText";

export const Guests = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a id="up"></a>
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
                className={i % 2 === 0 ? "guests__photo--left" : "guests__photo--right"}
              />
              {guest.descr.map((descr) => {
                return <div key={descr}>{descr}</div>;
              })}
              {guest.fanpage !== "" ? (
                <div>
                  <BoldText value="Fanpage: " />
                  <a href={guest.fpLink} rel="noreferrer" target="_blank" className="link-light">
                    {guest.fanpage}
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
            <div class="mt-2" style={{ textAlign: "right", width: "100%" }}>
              <button style={{ border: "0", background: "unset" }} className="footer__a" onClick={goToTop}>
                Powrót do góry
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
