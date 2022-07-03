import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Route, Router } from "react-router-dom";

export const TopMenu = () => {
  return (
    <nav className="top__bar">
        <Nav variant="pills">
          <NavDropdown title="Konwent" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/about" class="no__underline">O Gliwickich Dniach Fantastyki</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/place" class="no__underline">Czas i Miejsce</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/parents" class="no__underline">Dla rodziców</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link eventKey="Program" as={Link} to="/program" title="Item">
              Program
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Goście" as={Link} to="/guests">
              Goście
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="Zgłoszenia wystawców"
              as={Link}
              to="/exhibitors"
            >
              Zgłoszenia wystawców
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Zgłoszenia programu" as={Link} to="/agenda">
              Zgłoszenia programu
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Reklama na Konwencie" id="nav-dropdown">
            <NavDropdown.Item eventKey="6.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="6.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="6.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="6.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </nav>
  );
};
