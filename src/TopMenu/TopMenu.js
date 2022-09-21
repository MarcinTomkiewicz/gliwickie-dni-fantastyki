import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { BoldText } from "../utils/BoldText";

export const TopMenu = () => {
  return (
    <nav className="top__bar">
      <a href="https://gliwickiednifantastyki.pl"><img src={process.env.PUBLIC_URL + "/gdf-logo.png"}
            alt="Logo Gliwickich Dni Fantastyki"
            className="media__logo" /></a>
        <Nav variant="pills">
          <Button variant="warning" as={Link} to="/buy_ticket" className="no__underline" style={{marginRight: "10px"}}><BoldText value="Kup Bilet!" /></Button>
          <NavDropdown title="Konwent" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/about" className="no__underline">O Gliwickich Dniach Fantastyki</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/place" className="no__underline">Czas i Miejsce</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/rules" className="no__underline">Regulamin Gliwickich Dni Fantastyki</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/parents" className="no__underline">Dla rodziców</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Program" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/agenda" className="no__underline">Program Konwentu</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/blocks" className="no__underline">Bloki Programowe</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/the_game" className="no__underline">Gra konwentowa</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cosplay" className="no__underline">Regulamin Konkursu Cosplay</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/junior" className="no__underline">Junior Cosplay Show</NavDropdown.Item>
            <NavDropdown.Divider style={{backgroundColor: "#fff", height: "2px"}}/>
            <NavDropdown.Item as={Link} to="/submit_event" className="no__underline">Zgłoszenia atrakcji</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Atrakcje" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/vips" className="no__underline">Goście VIP</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/concerts" className="no__underline">Koncerty</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cool_things" className="no__underline">Atrakcje stałe</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/clubs" className="no__underline">Kluby i stowarzyszenia</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Wystawcy" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/vendors" className="no__underline">Regulamin wystawców</NavDropdown.Item>
            <NavDropdown.Divider style={{backgroundColor: "#fff", height: "2px"}}/>
            <NavDropdown.Item as={Link} to="/submit_vendor" className="no__underline">Zgłoszenia wystawców</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Pomoc przy GDF" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/fun_stuff" className="no__underline">Regulamin helperów</NavDropdown.Item>
            <NavDropdown.Divider style={{backgroundColor: "#fff", height: "2px"}}/>
            <NavDropdown.Item as={Link} to="/submit_helper" className="no__underline">Zgłoszenia helperów</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Media" id="nav-dropdown">
          <NavDropdown.Item as={Link} to="/media" className="no__underline">Media o Gliwickich Dniach Fantastyki</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/press" className="no__underline">Biuro Prasowe</NavDropdown.Item>
            <NavDropdown.Divider style={{backgroundColor: "#fff", height: "2px"}}/>
            <NavDropdown.Item as={Link} to="/media_entrance" className="no__underline">Akredytacje Medialne</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </nav>
  );
};
