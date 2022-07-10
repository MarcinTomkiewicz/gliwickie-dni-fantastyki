import { clubs } from "../utils/backend";
import "bootstrap/dist/css/bootstrap.min.css";
import { BoldText } from "../utils/BoldText";

export const Clubs = () => {
  return (
    <>
      <h1>Kluby i stowarzyszenia</h1>
      {clubs.map((club, i) => {
        if (i % 2 === 0) {
          return (
            <div key={club.name} className="inner__wrapper--top">
              <h3>
                <BoldText value={club.name} />
              </h3>
              <hr className="hr__content"></hr>
              <div>
                <img src={club.photo} className="guests__photo--left" />
                {club.descr.map((descr) => {
                  return <div key={descr}>{descr}</div>;
                })}
              {club.fanpage !== "" ? (
                <div>
                  <BoldText value='Fanpage: ' /><a href={club.fpLink} target="_blank" className='link-light'>
                    {club.fanpage}
                  </a>
                </div>
              ) : (
                ""
              )}
              </div>
            </div>
          );
        }
        if (i % 2 === 1) {
          return (
            <div key={club.name} className="inner__wrapper--top">
              <h3>
                <BoldText value={club.name} />
              </h3>
              <hr className="hr__content"></hr>
              <div>
                <img src={club.photo} className="guests__photo--right" />
                {club.descr.map((descr) => {
                  return <div key={descr}>{descr}</div>;
                })}
                {club.fanpage !== "" ? (
                <div>
                  <BoldText value='Fanpage: ' /><a href={club.fpLink} target="_blank" className='link-light'>
                    {club.fanpage}
                  </a>
                </div>
              ) : (
                ""
              )}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
