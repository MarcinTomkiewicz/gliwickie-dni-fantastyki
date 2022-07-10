import { guestsVip } from "../utils/backend";
import "bootstrap/dist/css/bootstrap.min.css";
import { BoldText } from "../utils/BoldText";

export const Guests = () => {
  return (
    <>
      <h1>Goście VIP</h1>
      {guestsVip.map((guest, i) => {
        if (i % 2 === 0) {
          return (
            <div key={guest.surname} className="inner__wrapper--top">
              <h3>
                <BoldText value={guest.name + " " + guest.surname} />
              </h3>
              <hr className="hr__content"></hr>
              <div>
                <img src={guest.photo} className="guests__photo--left" />
                {guest.descr.map((descr) => {
                  return <div key={descr}>{descr}</div>;
                })}
              {guest.fanpage !== "" ? (
                <div>
                  <BoldText value='Fanpage: ' /><a href={guest.fpLink} target="_blank" className='link-light'>
                    {guest.fanpage}
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
            <div key={guest.surname} className="inner__wrapper--top">
              <h3>
                <BoldText value={guest.name + " " + guest.surname} />
              </h3>
              <hr className="hr__content"></hr>
              <div>
                <img src={guest.photo} className="guests__photo--right" />
                {guest.descr.map((descr) => {
                  return <div key={descr}>{descr}</div>;
                })}
                {guest.fanpage !== "" ? (
                <div>
                  <BoldText value='Fanpage: ' /><a href={guest.fpLink} target="_blank" className='link-light'>
                    {guest.fanpage}
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
