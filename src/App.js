import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Footer/Footer";
import { TopMenu } from "./TopMenu/TopMenu";
import { Route, Routes } from "react-router-dom";
import { Program } from "./Program/Program";
import { Home } from "./Home/Home";
import { PartnerCarousel } from "./PartnerCarousel/PartnerCarousel";

function App() {
  return (
    <div className="wrapper">
      <TopMenu />
      <main>
        <Routes>
          <Route path="/about" element={<Home />} />
          <Route path="/place" element={<Home />} />
          <Route path="/rules" element={<Home />} />
          <Route path="/parents" element={<Home />} />
          <Route path="/agenda" element={<Program />} />
          <Route path="/blocks" element={<Home />} />
          <Route path="/the_game" element={<Home />} />
          <Route path="/cosplay" element={<Home />} />
          <Route path="/submit_event" element={<Home />} />
          <Route path="/vips" element={<Home />} />
          <Route path="/clubs" element={<Home />} />
          <Route path="/conventions" element={<Home />} />
          <Route path="/vendors" element={<Home />} />
          <Route path="/submit_vendor" element={<Home />} />
          <Route path="/helpers" element={<Home />} />
          <Route path="/fun_stuff" element={<Home />} />
          <Route path="/submit_helper" element={<Home />} />
          <Route path="/media" element={<Home />} />
          <Route path="/press" element={<Home />} />
          <Route path="/media_entrance" element={<Home />} />
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
