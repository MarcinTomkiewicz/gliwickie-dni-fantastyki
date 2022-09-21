export const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-center">
      <div className="d-flex flex-row justify-content-evenly align-items-center">
        <div>
        <a href="https://gliwickiednifantastyki.pl"><img
            src={process.env.PUBLIC_URL + "/logo 4.png"}
            alt="Logo Gliwickich Dni Fantastyki"
            className="footer__photo"
          /></a>
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
      <div className="mt-4" style={{alignSelf: "center", fontSize: "0.8rem"}}>Kontakt z webmasterem: <a href="mailto:webmaster@gliwickiednifantastyki.pl" className="footer__a">webmaster@gliwickiednifantastyki.pl</a></div>
    </footer>
  );
};
