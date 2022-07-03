import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Footer } from "./Footer/Footer";
import { TopMenu } from "./TopMenu/TopMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Program } from "./Program/Program";
import { Home } from "./Home/Home";
import { PartnerCarousel } from "./PartnerCarousel/PartnerCarousel";

function App() {
  const [content, setContent] = useState("");

  return (
    <div className="wrapper">
      <TopMenu />
      <main>
        <Routes>
          <Route path="/program" element={<Program />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <aside>
          <PartnerCarousel type="patron" />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
