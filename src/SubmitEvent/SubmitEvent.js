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
import { FormSelect } from "../utils/FormSelect";
import { handleSetData } from "../utils/helperFunctions";

export const SubmitEvent = () => {
  const form = useRef();

  const [isFullPrice, setIsFullPrice] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [shouldSpin, setShouldSpin] = useState(false);
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
  });

  const {
    day,
    hour,
    block,
    length,
    noeq,
    elec,
    board,
    chairs,
    projector,
    descr,
  } = data;

  const handleDataChange = ({ target: { name, value } }) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEquipmentSwitch = ({ target: { name, checked } }) => {
    setData((prev) => ({ ...prev, [name]: !prev[name] }));
    if (name === "noeq" && checked) {
      setData((prev) => ({
        ...prev,
        elec: false,
        board: false,
        chairs: false,
        projector: false,
      }));
    }
  };

  useEffect(() => {
    if ((block !== "Sesja RPG" || block !== "Warsztaty") && length > 3) {
      handleSetData("length", "0");
    }
  }, [block, length]);

  useEffect(() => {
    const tempHour = parseInt(hour.split(":")[0]);
    if (
      (day === "friday" && tempHour < 18) ||
      (day === "sunday" && tempHour > 14)
    ) {
      handleSetData("hour", "");
    }
  }, [day, hour]);

  useEffect(() => {
    if (
      (block !== "Sesja RPG" && length > 3) ||
      (block !== "Warsztaty" && length > 3 && block !== "")
    ) {
      if (block === "Sesja RPG" || block === "Warsztaty") {
        return setIsFullPrice(true);
      }
      handleSetData("length", "0");
    }
    if ((block !== "Sesja RPG" || block !== "Warsztaty") && length > 1) {
      setIsFullPrice(true);
    }
    if ((block === "Sesja RPG" || block === "Warsztaty") && length > 3) {
      setIsFullPrice(true);
    }
    if (
      ((block !== "Sesja RPG" || block !== "Warsztaty") && length < 2) ||
      ((block === "Sesja RPG" || block === "Warsztaty") && length < 4)
    ) {
      setIsFullPrice(false);
    }
    if (!block) {
      setIsFullPrice(false);
    }
  }, [length, block]);

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
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!block || !day || !hour || !length) {
      setShouldSpin(false);
      setShowAlert(true);
    } else {
      setShowAlert(false);
      emailjs
        .sendForm(
          "gdf_program",
          "template_t461b23",
          form.current,
          "C1GC4KNhMZuiMFPLW"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setSuccess(true);
              setShouldSpin(false);
              resetForm();
            }
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

  return (
    <>
      <h1>Zgłoszenia punktów programu</h1>
      <div>
        Przed zgłoszeniem swojej atrakcji prosimy o zapoznanie się z{" "}
        <BoldText value="Regulaminem" /> Gliwickich Dni Fantastyki.
      </div>
      <hr></hr>
      <Form ref={form} onSubmit={sendEmail}>
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
            <FloatingLabel controlId="floatingSelect" label="Preferowany dzień">
              <FormSelect
                ariaLabel="Preferowany dzień"
                onChange={handleDataChange}
                name="day"
                value={day}
                options={[
                  { val: "", label: "Wybierz dzień" },
                  { val: "friday", label: "Piątek (14.10)" },
                  { val: "saturday", label: "Sobota (15.10)" },
                  { val: "sunday", label: "Niedziela (16.10)" },
                ]}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingSelect"
              label="Preferowana godzina"
            >
              <FormSelect
                ariaLabel="Preferowany dzień"
                name="hour"
                onChange={handleDataChange}
                value={hour}
              >
                <option value="">Wybierz godzinę rozpoczęcia</option>
                {day !== "friday" ? (
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
                {day === "saturday" ? (
                  <>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </>
                ) : (
                  ""
                )}
                {day !== "sunday" ? (
                  <>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </>
                ) : (
                  ""
                )}
              </FormSelect>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Tematyka">
              <FormSelect
                ariaLabel="Blok tematyczny"
                onChange={handleDataChange}
                name="block"
                required={true}
                value={block}
                options={[
                  { val: "", label: "Wybierz blok tematyczny" },
                  { val: "Fantastyczny", label: "Blok Fantastyczny" },
                  { val: "Science-fiction", label: "Blok Science-fiction" },
                  { val: "Literacki", label: "Blok Literacki" },
                  { val: "Filmowy", label: "Blok Filmowy" },
                  { val: "Naukowy", label: "Blok Naukowy" },
                  { val: "Manga&Anime", label: "Blok Manga&Anime" },
                  { val: "Sesja RPG", label: "Sesja RPG" },
                  { val: "Warsztaty", label: "Warsztaty" },
                ]}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="hours-1" label="Czas trwania">
              <FormSelect
                ariaLabel="Czas trwania"
                onChange={handleDataChange}
                name="length"
                value={length}
                required={true}
              >
                <option value="">Przewidywany czas trwania</option>
                <option value="1">1 godzina</option>
                <option value="2">2 godziny</option>
                <option value="3">3 godziny</option>
                {block === "Sesja RPG" || block === "Warsztaty" ? (
                  <>
                    <option value="4">4 godziny</option>
                    <option value="5">5 godzin</option>
                    <option value="6">6 godzin</option>
                  </>
                ) : (
                  ""
                )}
              </FormSelect>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        <Row>
          <div>Potrzebne wyposażenie:</div>
          <Col>
            <Form.Check
              type="switch"
              label="Nie potrzebuję sprzętu"
              id="eq"
              name="noeq"
              onChange={handleEquipmentSwitch}
              checked={noeq}
              value={noeq}
            ></Form.Check>
            <Form.Check
              type="switch"
              label="Dostęp do prądu"
              id="eq"
              name="elec"
              disabled={noeq}
              checked={elec}
              value={elec}
              onChange={handleEquipmentSwitch}
            ></Form.Check>
            <Form.Check
              type="switch"
              label="Rzutnik"
              id="eq"
              name="projector"
              disabled={noeq}
              checked={projector}
              value={projector}
              onChange={handleEquipmentSwitch}
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              type="switch"
              label="Tablica/whiteboard"
              id="eq"
              name="board"
              disabled={noeq}
              checked={board}
              value={board}
              onChange={handleEquipmentSwitch}
            ></Form.Check>
            <Form.Check
              type="switch"
              label="Dodatkowe Krzesła i stoły"
              id="eq"
              name="chairs"
              disabled={noeq}
              checked={chairs}
              value={chairs}
              onChange={handleEquipmentSwitch}
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
                onChange={handleDataChange}
                value={descr}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <hr></hr>
        {showAlert ? (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setShowAlert(false)}
          >
            <Alert.Heading>Popraw błędy w formularzu</Alert.Heading>
            <div>Nie wybrano:</div>
            <div>{!block ? "Bloku" : ""}</div>
            <div>{!day ? "Dnia" : ""}</div>
            <div>{!hour ? "Godziny" : ""}</div>
            <div>{!length ? "Długości trwania atrakcji" : ""}</div>
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
              Dziękujemy za zgłoszenie! Prosimy oczekiwać na informację zwrotną
              od Koordynatora ds. Programu.
            </div>
          </Alert>
        ) : (
          ""
        )}
        {isFullPrice ? (
          <div className="text-success bold__text">
            GRATULACJE! Wybrany przewidywany czas trwania atrakcji uprawnia do darmowej
            wejściówki na Gliwickie Dni Fantastyki!
          </div>
        ) : (
          <div className="text-danger bold__text">
            UWAGA! Wybrany przewidywany czas trwania atrakcji NIE uprawnia do darmowej
            wejściówki na Gliwickie Dni Fantastyki!
          </div>
        )}
        <div className="bold__text">
          Prosimy pamiętać, że ostateczna decyzja, dotycząca darmowej wejściówki
          będzie uzależniona od długości trwania atrakcji zatwierdzonych przez
          odpowiedniego Koordynatora. Informacja o tym zostanie przekazana
          uczestnikowi drogą mailową nie później niż do 3 dni przed rozpoczęciem
          Konwentu.
        </div>
        <hr></hr>
        <Row className="align-items-center justify-content-center mt-3">
          <Col sm={5}>
            <Button
              type="submit"
              variant="warning"
              value="Submit"
              onClick={startSpinner}
            >
              {shouldSpin ? (
                <Spinner animation="border" variant="danger" size="sm" />
              ) : (
                ""
              )}
              {shouldSpin ? " " : ""}Wyślij zgłoszenie
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
