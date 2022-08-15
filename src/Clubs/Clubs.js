import { clubs } from "../utils/backend";
import "bootstrap/dist/css/bootstrap.min.css";
import { BoldText } from "../utils/BoldText";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Clubs = () => {
  return (
    <>
      <h1>Kluby i stowarzyszenia</h1>
      {clubs.map((club, i) => {
        return (
          <div key={club.name} className="inner__wrapper--top">
            <h3>
              <BoldText value={club.name} />
            </h3>
            <hr className="hr__content"></hr>
            <div>
              <LazyLoadImage
                src={club.photo}
                className={
                  i % 2 === 0 ? "guests__photo--left" : "guests__photo--right"
                }
              />
              {club.descr.map((descr) => {
                return <div key={descr}>{descr}</div>;
              })}
              {club.fanpage !== "" ? (
                <div>
                  <BoldText value="Fanpage: " />
                  <a
                    href={club.fpLink}
                    target="_blank"
                    rel="noreferrer"
                    className="link-light"
                  >
                    {club.fanpage}
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
