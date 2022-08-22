export const Footer = () => {
  return (
    <footer>
      <div className="d-flex flex-row justify-content-evenly align-items-center">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/logo 4.png"}
            alt="Logo Gliwickich Dni Fantastyki"
            className="footer__photo"
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div></div>
          <div>&copy; by Gliwickie Dni Fantastyki 2022</div>
          <div>14-16 października 2022</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>Arena Gliwice</div>
          <div>Akademicka 50</div>
          <div>44-100 Gliwice</div>
        </div>
      </div>
      {/* <div className="d-flex flex-column justify-content-around align-items-center">
        <div className="d-flex justify-content-around">
          <div>&copy; by Gliwickie Dni Fantastyki 2022</div>
          <div>Arena Gliwice</div>
        </div>
        <div className="d-flex justify-content-around">
          <div>14-16 października 2022</div>
          <div>Akademicka 50</div>
        </div>
        <div className="d-flex justify-content-around">
          <div></div>
          <div>44-100 Gliwice</div>
        </div>
      </div> */}
    </footer>
  );
};
