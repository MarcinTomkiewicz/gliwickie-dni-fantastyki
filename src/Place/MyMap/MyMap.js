import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import { BoldText } from "../../utils/BoldText";

export const MyMap = ({ zoom, center, children }) => {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { zoom, center, gestureHandling: "cooperative" }));
    }
  }, [ref, map]);

  return (
    <>
      <h1>Gliwickie Dni Fantastyki 2022</h1>
      <div className="d-flex flex-column justify-content-start w-100">
        <div>
          <BoldText value="Data: " />
          14.10.2022 - 16.10.2022
        </div>
        <div>
          <BoldText value="Godziny: " />
          <ul className="d-flex flex-column justify-content-start align-items-start p-0" style={{ listStyle: "none" }}>
            <li>14.10.2022 (piątek): 15:00 - 01:00</li>
            <li>15.10.2022 (sobota): 09:00 - 01:00</li>
            <li>16.10.2022 (niedziela): 09:00 - 16:00</li>
          </ul>
        </div>
        <div>
          <BoldText value="Miejsce: " />
          Arena Gliwice
        </div>
        <div>
          <BoldText value="Adres: " />
          Akademicka 50
        </div>
        <div>
          <BoldText value="Miasto: " />
          Gliwice
        </div>
      </div>
      <div ref={ref} style={{ width: "100%", height: "60vh" }} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};
