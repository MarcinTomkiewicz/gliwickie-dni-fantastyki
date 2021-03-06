import { useState, useEffect, useRef } from "react";
import { BoldText } from "../utils/BoldText";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import { TextInput } from "../utils/TextInput";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { legal } from "../utils/backend";

export const SubmitEvent = () => {
  const form = useRef();

  const [isFullPrice, setIsFullPrice] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [whatDay, setWhatDay] = useState("selectDay");
  const [whatBlock, setWhatBlock] = useState("selectBlock");
  const [whatHour, setWhatHour] = useState("selectHour");
  const [isSuccess, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [shouldSpin, setShouldSpin] = useState(false);
  const [isEqNeeded, setIsEqNeeded] = useState(true);
  const [data, setData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    nick: "",
    facebook: "",
    day: "",
    hour: "",
    block: "",
    length: "",
    noeq: false,
    elec: false,
    board: false,
    chairs: false,
    projector: false,
    descr: "",
    rodo: false,
    rules: false,
  });

  const onSelectedDay = (event) => {
    setWhatDay(event.target.value);
    setData({ ...data, day: event.target.value });
  };

  useEffect(() => {
    const tempHour = parseInt(data.hour.split(":")[0]);
    if (
      (whatDay === "friday" && tempHour < 18) ||
      (whatDay === "sunday" && tempHour > 14)
    ) {
      setData({ ...data, hour: "" });
    }
  }, [whatDay]);

  console.log(data);

  const getHour = (event) => {
    setWhatHour(event.target.value);
    setData({ ...data, hour: event.target.value });
  };

  const onSelectType = (event) => {
    setData({ ...data, block: event.target.value });
    setWhatBlock(event.target.value);
    if (
      whatBlock !== "Sesja RPG" ||
      (whatBlock !== "Warsztaty" && totalTime > 3)
    ) {
      setData({ ...data, length: "" });
    }
  };

  const getTotalTime = (event) => {
    setData({ ...data, length: event.target.value });
    setTotalTime(parseInt(event.target.value));
  };

  useEffect(() => {
    if (
      (whatBlock !== "Sesja RPG" && totalTime > 3) ||
      (whatBlock !== "Warsztaty" && totalTime > 3 && whatBlock !== "")
    ) {
      if (whatBlock === "Sesja RPG" || whatBlock === "Warsztaty") {
        return setIsFullPrice(true);
      }
      setTotalTime("0");
    }
    if (
      (whatBlock !== "Sesja RPG" || whatBlock !== "Warsztaty") &&
      totalTime > 1
    ) {
      setIsFullPrice(true);
    }
    if (
      (whatBlock === "Sesja RPG" || whatBlock === "Warsztaty") &&
      totalTime > 3
    ) {
      setIsFullPrice(true);
    }
    if (
      ((whatBlock !== "Sesja RPG" || whatBlock !== "Warsztaty") &&
        totalTime < 2) ||
      ((whatBlock === "Sesja RPG" || whatBlock === "Warsztaty") &&
        totalTime < 4)
    ) {
      setIsFullPrice(false);
    }
    if (whatBlock === "") {
      setIsFullPrice(false);
    }
  }, [totalTime, whatBlock]);

  const handleDescrChange = (event) => {
    setData({ ...data, descr: event.target.value });
  };

  const switchChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  const resetForm = () => {
    setData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      nick: "",
      facebook: "",
      day: "",
      hour: "",
      block: "",
      length: "",
      noeq: false,
      elec: false,
      board: false,
      chairs: false,
      projector: false,
      descr: "",
      rodo: false,
      rules: false,
    });
    setWhatBlock("selectBlock");
    setWhatDay("selectDay");
    setWhatHour("selectHour");
    setTotalTime(0);
    setIsEqNeeded(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    startSpinner();
    if (
      whatBlock === "selectBlock" ||
      whatDay === "selectDay" ||
      whatHour === "selectHour" ||
      totalTime === 0
    ) {
      setShouldSpin(false);
      setShowAlert(true);
    } else {
      emailjs
        .sendForm(
          "gdf_program",
          "template_t461b23",
          form.current,
          "C1GC4KNhMZuiMFPLW"
        )
        .then(
          (result) => {
            console.log(result);
            setSuccess(true);
            setShouldSpin(false);
            resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const startSpinner = () => {
    setShouldSpin(true);
  };

  const setEqNeeded = (e) => {
    if (e.target?.checked === undefined) {
      return;
    } else {
      if (e.target.checked === true) {
        setData({
          ...data,
          noeq: e.target.checked,
          elec: false,
          board: false,
          chairs: false,
          projector: false,
        });
        return setIsEqNeeded(false);
      }
      if (e.target.checked === false) {
        setData({ ...data, noeq: e.target.checked });
        return setIsEqNeeded(true);
      }
    }
  };

  return (
    <>
      <h1>Zg??oszenia punkt??w programu</h1>
      <div>
        Przed zg??oszeniem swojej atrakcji prosimy o zapoznanie si?? z{" "}
        <BoldText value="Regulaminem" /> Gliwickich Dni Fantastyki.
      </div>
      <hr></hr>
      <Form style={{ width: "80%" }} ref={form} onSubmit={sendEmail}>
        <Row>
          <Col>
            <TextInput
              input="name"
              isRequired="true"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <TextInput
              input="surname"
              isRequired="true"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              input="nick"
              isRequired="false"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <TextInput
              input="email"
              isRequired="true"
              type="email"
              data={data}
              setData={setData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              input="phone"
              isRequired="true"
              type="number"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <TextInput
              input="facebook"
              isRequired="false"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Preferowany dzie??">
              <Form.Select
                aria-label="Preferowany dzie??"
                className="form__control--input mb-3"
                onChange={onSelectedDay}
                name="day"
                value={whatDay}
              >
                <option value="selectDay">Wybierz dzie??</option>
                <option disabled>{""}</option>
                <option value="friday" name="Pi??tek (14.10)">
                  Pi??tek (14.10)
                </option>
                <option value="saturday">Sobota (15.10)</option>
                <option value="sunday">Niedziela (16.10)</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingSelect"
              label="Preferowana godzina"
            >
              <Form.Select
                aria-label="Preferowany dzie??"
                className="form__control--input mb-3"
                name="hour"
                onChange={getHour}
                value={whatHour}
              >
                <option value="selectHour">Wybierz godzin?? rozpocz??cia</option>
                <option disabled>{""}</option>
                {whatDay !== "friday" ? (
                  <>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                  </>
                ) : (
                  ""
                )}
                {whatDay === "saturday" ? (
                  <>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </>
                ) : (
                  ""
                )}
                {whatDay !== "sunday" ? (
                  <>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </>
                ) : (
                  ""
                )}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Tematyka">
              <Form.Select
                aria-label="Blok tematyczny"
                className="form__control--input mb-3"
                onChange={onSelectType}
                name="block"
                required
                value={whatBlock}
              >
                <option value="selectBlock">Wybierz blok tematyczny</option>
                <option disabled>{""}</option>
                <option value="Fantastyczny">Blok Fantastyczny</option>
                <option value="Science-fiction">Blok Science-fiction</option>
                <option value="Literacki">Blok Literacki</option>
                <option value="Filmowy">Blok Filmowy</option>
                <option value="Naukowy">Blok Naukowy</option>
                <option value="Manga&Anime">Blok Manga&Anime</option>
                <option value="Sesja RPG">Sesja RPG</option>
                <option value="Warsztaty">Warszataty</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="hours-1" label="Czas trwania">
              <Form.Select
                aria-label="Czas trwania"
                className="form__control--input mb-3"
                onChange={getTotalTime}
                name="length"
                required
                value={totalTime}
              >
                <option value="0">Przewidywany czas trwania</option>
                <option disabled>{""}</option>
                <option value="1">1 godzina</option>
                <option value="2">2 godziny</option>
                <option value="3">3 godziny</option>
                {whatBlock === "Sesja RPG" || whatBlock === "Warsztaty" ? (
                  <>
                    <option value="4">4 godziny</option>
                    <option value="5">5 godzin</option>
                    <option value="6">6 godzin</option>
                  </>
                ) : (
                  ""
                )}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        <Row>
          <div>Potrzebne wyposa??enie:</div>
          <Col>
            <Form.Check
              type="switch"
              label="Nie potrzebuj?? sprz??tu"
              id="eq"
              name="no-eq"
              onChange={setEqNeeded}
              checked={data.noeq}
            ></Form.Check>
            <Form.Check
              type="switch"
              label="Dost??p do pr??du"
              id="eq"
              name="elec"
              disabled={isEqNeeded ? false : true}
              checked={data.elec}
              onChange={switchChange}
            ></Form.Check>
            <Form.Check
              type="switch"
              label="Rzutnik"
              id="eq"
              name="projector"
              disabled={isEqNeeded ? false : true}
              checked={data.projector}
              onChange={switchChange}
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              type="switch"
              label="Tablica/whiteboard"
              id="eq"
              name="board"
              disabled={isEqNeeded ? false : true}
              checked={data.board}
              onChange={switchChange}
            ></Form.Check>
            <Form.Check
              type="switch"
              label="Krzes??a i sto??y"
              id="eq"
              name="chairs"
              disabled={isEqNeeded ? false : true}
              checked={data.chairs}
              onChange={switchChange}
            ></Form.Check>
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingTextarea2" label="Opis atrakcji*">
              <Form.Control
                as="textarea"
                placeholder="Opis atrakcji*"
                className="form__control--input mb-3"
                style={{ height: "150px" }}
                required
                name="descr"
                onChange={handleDescrChange}
                value={data.descr}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <hr></hr>
        <Form.Check
          onChange={switchChange}
          required
          type="switch"
          id="rodo_consent"
          name="rodo"
          label={legal.rodo}
        ></Form.Check>
        <Form.Check
          onChange={switchChange}
          required
          type="switch"
          id="rules_consent"
          name="rules"
          label={legal.eventRules}
        ></Form.Check>
        <hr></hr>
        {showAlert ? (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setShowAlert(false)}
          >
            <Alert.Heading>Popraw b????dy w formularzu</Alert.Heading>
            <div>Nie wybrano:</div>
            <div>{whatBlock === "selectBlock" ? "Bloku" : ""}</div>
            <div>{whatDay === "selectDay" ? "Dnia" : ""}</div>
            <div>{whatHour === "selectHour" ? "Godziny" : ""}</div>
            <div>{totalTime === 0 ? "D??ugo??ci trwania atrakcji" : ""}</div>
          </Alert>
        ) : (
          ""
        )}
        {isSuccess ? (
          <Alert
            variant="success"
            dismissible
            onClick={() => setSuccess(false)}
          >
            <Alert.Heading>Gratulacje!</Alert.Heading>
            <div>
              Dzi??kujemy za zg??oszenie! Prosimy oczekiwa?? na informacj?? zwrotn??
              od Koordynatora ds. Programu.
            </div>
          </Alert>
        ) : (
          ""
        )}
        {isFullPrice ? (
          <div className="text-success bold__text">
            GRATULACJE! Przewidywany czas trwania atrakcji uprawnia do darmowej
            wej??ci??wki na Gliwickie Dni Fantastyki!
          </div>
        ) : (
          <div className="text-danger bold__text">
            UWAGA! Przewidywany czas trwania atrakcji NIE uprawnia do darmowej
            wej??ci??wki na Gliwickie Dni Fantastyki!
          </div>
        )}
        <div className="bold__text">
          Prosimy pami??ta??, ??e ostateczna decyzja, dotycz??ca darmowej wej??ci??wki
          b??dzie uzale??niona od d??ugo??ci trwania atrakcji zatwierdzonych przez
          odpowiedniego Koordynatora. Informacja o tym zostanie przekazana
          uczestnikowi drog?? mailow?? nie p????niej ni?? do 3 dni przed rozpocz??ciem
          Konwentu.
        </div>
        <hr></hr>
        <Row className="justify-content-evenly">
          <Col sm={5}>
            <Button type="submit" variant="warning" value="Submit">
              {shouldSpin ? (
                <Spinner animation="border" variant="danger" size="sm" />
              ) : (
                ""
              )}
              {shouldSpin ? " " : ""}Wy??lij zg??oszenie
            </Button>
          </Col>
          <Col sm={2}>
            <Button variant="outline-danger" type="button" onClick={resetForm}>
              Anuluj
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
