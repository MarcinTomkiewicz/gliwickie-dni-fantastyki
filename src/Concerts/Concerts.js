import { LazyLoadImage } from "react-lazy-load-image-component";
import { concerts } from "../utils/backend";
import { BoldText } from "../utils/BoldText";

export const Concerts = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h1>Koncerty na Gliwickich Dniach Fantastyki 2022</h1>
      {concerts.map((concert, i) => {
        if (concert.name === "") {
          return;
        }
        return (
          <div key={concert.name} className="inner__wrapper--top">
            <h3>
              <BoldText value={concert.name} />
            </h3>
            <hr className="hr__content"></hr>
            <div style={{ width: "100%" }}>
              <LazyLoadImage
                src={concert.photo}
                alt={concert.name}
                className={i % 2 === 0 ? "guests__photo--left" : "guests__photo--right"}
              />
              {concert.descr.map((descr) => {
                return <div key={descr}>{descr}</div>;
              })}
              <div>
                <BoldText value="Data i godzina: " />
                {concert.date}
              </div>
              {concert.fanpage !== "" ? (
                <div>
                  <BoldText value="Fanpage: " />
                  <a href={concert.fpLink} rel="noreferrer" target="_blank" className="link-light">
                    {concert.fanpage}
                  </a>
                </div>
              ) : (
                ""
              )}
              {concert.webpage !== "" ? (
                <div>
                  <BoldText value="Strona internetowa: " />
                  <a href={concert.webpage} rel="noreferrer" target="_blank" className="link-light">
                    {concert.webpage}
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
