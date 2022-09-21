import { LazyLoadImage } from "react-lazy-load-image-component";
import { funStuff } from "../utils/backend";
import { BoldText } from "../utils/BoldText";

export const CoolStuff = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h1>Stałe atrakcje Gliwickich Dni Fantastyki 2022</h1>
      {funStuff.map((fun, i) => {
        if (fun.name === "") {
          return;
        }
        return (
          <div key={fun.name} className="inner__wrapper--top">
            <h3>
              <BoldText value={fun.name} />
            </h3>
            <hr className="hr__content"></hr>
            <div style={{ width: "100%" }}>
              <LazyLoadImage
                src={fun.photo}
                alt={fun.name}
                className={i % 2 === 0 ? "guests__photo--left" : "guests__photo--right"}
              />
              {fun.descr.map((descr) => {
                return <div key={descr}>{descr}</div>;
              })}
              {fun.fanpage !== "" ? (
                <div>
                  <BoldText value="Fanpage: " />
                  <a href={fun.fpLink} rel="noreferrer" target="_blank" className="link-light">
                    {fun.fanpage}
                  </a>
                </div>
              ) : (
                ""
              )}
              {fun.webpage !== "" ? (
                <div>
                  <BoldText value="Strona internetowa: " />
                  <a href={fun.webpage} rel="noreferrer" target="_blank" className="link-light">
                    {fun.webpage}
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
