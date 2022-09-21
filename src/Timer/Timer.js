import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Timer = () => {
  const [timeTable, setTimeTable] = useState([]);
  const [fullTime, setFullTime] = useState("");

  const handleClick = () => {
    const date = new Date();
    setFullTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`);
  };

  useEffect(() => {
    return setTimeTable((prev) => [...prev, fullTime]);
  }, [fullTime]);

console.log(timeTable);

  return (
    <>
      <Button variant="success" onClick={handleClick}>
        Ludź
      </Button>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Lp.</th>
          <th style={{ textAlign: "center" }}>Godzina</th>
        </tr>
        {timeTable.map((row, i) => {
            if (row === '') {
                return;
            }
          return (
          <tr>
            <td>{i}</td>
            <td style={{ textAlign: "center" }}>{row}</td>
          </tr>
          )
        })}
      </table>
    </>
  );
};
