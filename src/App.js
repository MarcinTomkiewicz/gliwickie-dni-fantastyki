import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Footer/Footer";
import { TopMenu } from "./TopMenu/TopMenu";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Program } from "./Program/Program";
import { Home } from "./Home/Home";
import { PartnerCarousel } from "./PartnerCarousel/PartnerCarousel";
import { SubmitEvent } from "./SubmitEvent/SubmitEvent";
import { Guests } from "./Guests/Guests";
import { useEffect } from "react";
import { guestsVip, pageTitles } from "./utils/backend";
import { Clubs } from "./Clubs/Clubs";
import { Conventions } from "./Conventions/Conventions";
import { HelperForm } from "./HelperForm/HelperForm";
import { VendorForm } from "./VendorForm/VendorForm";

function App() {
  let location = useLocation();

  useEffect(() => {
    pageTitles.forEach((page) => {
      if (page.name === location.pathname)
        document.title = `${page.title} | Gliwickie Dni Fantastyki`;
    });
  });

  return (
    <div className="wrapper">
      <TopMenu />
      <main>
        <div className="content">
          <Routes>
            <Route path="/about" element={<Home />} />
            <Route path="/place" element={<Home />} />
            <Route path="/rules" element={<Home />} />
            <Route path="/parents" element={<Home />} />
            <Route path="/agenda" element={<Program />} />
            <Route path="/blocks" element={<Home />} />
            <Route path="/the_game" element={<Home />} />
            <Route path="/cosplay" element={<Home />} />
            <Route path="/submit_event" element={<SubmitEvent />} />
            <Route path="/vips" element={<Guests />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/conventions" element={<Conventions />} />
            <Route path="/vendors" element={<Home />} />
            <Route path="/submit_vendor" element={<VendorForm />} />
            <Route path="/helpers" element={<Home />} />
            <Route path="/fun_stuff" element={<Home />} />
            <Route path="/submit_helper" element={<HelperForm />} />
            <Route path="/media" element={<Home />} />
            <Route path="/press" element={<Home />} />
            <Route path="/media_entrance" element={<Home />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        <aside>
          <PartnerCarousel type="patron" />
        </aside>
      </main>
      <Footer />;
    </div>
  );
}

export default App;
