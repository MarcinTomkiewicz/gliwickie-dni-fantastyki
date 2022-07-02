import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const [content, setContent] = useState("")

  const handleSelect = (eventKey) => {
    return setContent(`Kliknięto ${eventKey}`);
  };
  
  return (
    <div className="wrapper">
      <nav className="top__bar">
        <div className="menu">
          {/* <ul className="menu__items">
            <li>Konwent</li>
            <li>Program</li>
            <li>Goście</li>
            <li>Zgłoszenia wystawców</li>
            <li>Zgłoszenia programu</li> */}
          <Nav variant="pills" onSelect={handleSelect}>
            <Nav.Item >
              <Nav.Link eventKey="Konwent" href="#/home">
                Konwent
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Program" title="Item">
                Program
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Goście">Goście</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Zgłoszenia wystawców">Zgłoszenia wystawców</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Zgłoszenia programu">Zgłoszenia programu</Nav.Link>
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
          {/* </ul> */}
        </div>
      </nav>
      <main>
        <div className="content">
            {content}
        </div>
      </main>
      <footer>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
          nunc, posuere vitae enim nec, mollis finibus nisl. Cras malesuada,
          purus a pellentesque blandit, massa sem rhoncus velit, non commodo sem
          elit id elit. Morbi semper mattis enim. Cras felis lorem, faucibus in
          congue a, imperdiet ut dolor. Nulla non lorem nulla. Vivamus quis odio
          purus. Phasellus pellentesque elit urna, non posuere velit rutrum
          aliquam. Phasellus et ex in tortor congue scelerisque. Nullam
          fermentum magna vel augue vestibulum mattis. Sed at magna vestibulum,
          hendrerit ipsum eu, aliquam odio.
        </div>
      </footer>
    </div>
  );
}

export default App;
