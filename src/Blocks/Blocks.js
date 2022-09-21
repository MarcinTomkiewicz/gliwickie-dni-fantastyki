import { Table } from "react-bootstrap";

export const Blocks = () => {
  return (
    <>
      <h1>Bloki Programowe</h1>
      <Table bordered>
        <thead style={{ backgroundColor: "#6D111E", color: "#fff" }}>
          <tr>
            <th style={{ width: "18%" }}>Nazwa bloku</th>
            <th style={{ width: "13%" }}>Sala</th>
            <th colSpan={3}>Zakres</th>
          </tr>
        </thead>
        <tbody className="table__striped">
        <tr>
            <td>Scena główna</td>
            <td>Mała Arena</td>
            <td colSpan={3}>Goście VIP, Konkursy cosplay, Koncerty</td>
          </tr>
          <tr>
            <td>Esport i Retro</td>
            <td>Sala eventowa 1</td>
            <td colSpan={3}>Komputery, konsole, gry muzyczne</td>
          </tr>
          <tr>
          <td>Blok panelowy</td>
          <td>Sala eventowa 2</td>
          <td colSpan={3}>Panele dyskusyjne, prelekcje, warsztaty</td>
        </tr>
          <tr>
            <td>Blok Fantastyki Pisanej</td>
            <td>Loża nr 1</td>
            <td colSpan={3}>Blok Literacki, Fantastyczny oraz Sci-Fi</td>
          </tr>
          <tr>
            <td>Blok Audio-Wizualny</td>
            <td>Loża nr 2</td>
            <td colSpan={3}>Blok Mangi, Anime, Filmowy oraz Gier Wideo</td>
          </tr>
          <tr>
            <td>Blok Eksperymentów</td>
            <td>Loża nr 3</td>
            <td colSpan={3}>Blok Naukowy, Warsztatowy</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
