import "bootstrap/dist/css/bootstrap.min.css";
// import GA4React from "ga-4-react";
import { Footer } from "./Footer/Footer";
import { TopMenu } from "./TopMenu/TopMenu";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./Home/Home";
import { PartnerCarousel } from "./PartnerCarousel/PartnerCarousel";
import { SubmitEvent } from "./SubmitEvent/SubmitEvent";
import { Guests } from "./Guests/Guests";
import { useEffect } from "react";
import { pageTitles } from "./utils/backend";
import { Clubs } from "./Clubs/Clubs";
import { Conventions } from "./Conventions/Conventions";
import { HelperForm } from "./HelperForm/HelperForm";
import { VendorForm } from "./VendorForm/VendorForm";
import { HelperRules } from "./HelperRules/HelperRules";
import { VendorRules } from "./VendorRules/VendorRules";
import { UnderPressure } from "./UnderPressure/UnderPressure";
import { RuleCon } from "./RuleCon/RuleCon";
import { BuyTicket } from "./BuyTicket/BuyTicket";
import { Sponsors } from "./Sponsors/Sponsors";
import { Place } from "./Place/Place";
import { Blocks } from "./Blocks/Blocks";
import { CoolStuff } from "./CoolStuff/CoolStuff";
import { Concerts } from "./Concerts/Concerts";
import { Parents } from "./Parents/Parents";
import { CosplayRules } from "./CosplayRules/CosplayRules";
import { CosplayForm } from "./CosplayForm/CosplayForm";

// const GA4react = new GA4React("G-6BE90RZZMW");
// GA4react.initialize().then().catch()

function App() {
  let location = useLocation();

  useEffect(() => {
    pageTitles.forEach((page) => {
      if (page.name === location.pathname)
        document.title = `${page.title} | Gliwickie Dni Fantastyki 2022`;
    });
  });

  return (
    <div className="wrapper">
      <TopMenu />
      {location.pathname === "/" || location.pathname === "/about" ? <img src={process.env.PUBLIC_URL + "/front_image.png"} style={{width: "100%", backgroundColor: "#832825"}}></img> : ""}
      <main>
        <div className={location.pathname === "/buy_ticket" ? "content__ticket" : "content"}>
          <Routes>
            <Route path="/about" element={<Home />} />
            <Route path="/place" element={<Place />} />
            <Route path="/rules" element={<RuleCon />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/agenda" element={<UnderPressure />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/the_game" element={<UnderPressure />} />
            <Route path="/cosplay" element={<CosplayRules />} />
            <Route path="/submit_cosplay" element={<CosplayForm />} />
            <Route path="/junior" element={<UnderPressure />} />
            <Route path="/submit_event" element={<SubmitEvent />} />
            <Route path="/vips" element={<Guests />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/cool_things" element={<CoolStuff />} />
            <Route path="/conventions" element={<Conventions />} />
            <Route path="/vendors" element={<VendorRules />} />
            <Route path="/submit_vendor" element={<VendorForm />} />
            <Route path="/helpers" element={<UnderPressure />} />
            <Route path="/fun_stuff" element={<HelperRules modal={false} />} />
            <Route path="/submit_helper" element={<HelperForm />} />
            <Route path="/media" element={<UnderPressure />} />
            <Route path="/press" element={<UnderPressure />} />
            <Route path="/media_entrance" element={<UnderPressure />} />
            <Route path="/buy_ticket" element={<BuyTicket />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        {location.pathname === "/" || location.pathname === "/about" ? <aside><PartnerCarousel type="patron" /></aside> : ""}
      </main>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
