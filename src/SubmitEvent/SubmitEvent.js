import { useState, useEffect, useRef } from "react";
import { BoldText } from "../utils/BoldText";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";

export const SubmitEvent = () => {
  const form = useRef();

  const [isFullPrice, setIsFullPrice] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [whatDay, setWhatDay] = useState("selectDay");
  const [whatBlock, setWhatBlock] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const onSelectedDay = (event) => {
    setWhatDay(event.target.value);
  };

  const getTotalTime = (event) => {
    setTotalTime(parseInt(event.target.value));
  };

  const onSelectType = (event) => {
    setWhatBlock(event.target.value);
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

  const resetForm = () => {
    setIsFullPrice(false);
    setWhatBlock("");
    setTotalTime(0);
    setWhatDay("selectDay");
    setSuccess(false)
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(
      emailjs.sendForm(
        "gdf_program",
        "template_t461b23",
        form.current,
        "C1GC4KNhMZuiMFPLW"
      )
    );
    emailjs
      .sendForm(
        "gdf_program",
        "template_t461b23",
        form.current,
        "C1GC4KNhMZuiMFPLW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1>Zgłoszenia punktów programu</h1>
      <div>
        Przed zgłoszeniem swojej atrakcji prosimy o zapoznanie się z{" "}
        <BoldText value="Regulaminem" /> Gliwickich Dni Fantastyki.
      </div>
      <hr></hr>
      <Form style={{ width: "80%" }} ref={form} onSubmit={sendEmail}>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Imię*"
              className="mb-3"
            >
              <Form.Control
                className="form__control--input"
                type="text"
                placeholder="Imię"
                required
                name="name"
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Nazwisko*"
              className="mb-3"
            >
              <Form.Control
                className="form__control--input"
                type="text"
                placeholder="Nazwisko"
                required
                name="surname"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Pseudonim (opcjonalnie)"
              className="mb-3"
            >
              <Form.Control
                className="form__control--input"
                type="text"
                placeholder="Pseudonim (opcjonalnie)"
                name="nick"
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Adres e-mail*"
              className="mb-3"
            >
              <Form.Control
                className="form__control--input"
                type="email"
                placeholder="name@example.com"
                required
                name="email"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Preferowany dzień">
              <Form.Select
                aria-label="Preferowany dzień"
                className="form__control--input mb-3"
                onChange={onSelectedDay}
                name="day"
              >
                <option value="selectDay">Wybierz dzień</option>
                <option disabled>{""}</option>
                <option value="friday">Piątek (14.10)</option>
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
                aria-label="Preferowany dzień"
                className="form__control--input mb-3"
                name="hour"
              >
                <option>Wybierz godzinę rozpoczęcia</option>
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
              >
                <option>Wybierz blok tematyczny</option>
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
          <Col>
            <FloatingLabel controlId="floatingTextarea2" label="Opis atrakcji*">
              <Form.Control
                as="textarea"
                placeholder="Opis atrakcji*"
                className="form__control--input mb-3"
                style={{ height: "150px" }}
                required
                name="descr"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="justify-content-evenly">
          {isSuccess ? (
            <Button type="reset" onClick={resetForm} variant="success">
              Gratulacje, formularz został poprawnie wysłany! Dziękujemy za
              zgłoszenie! Kliknij tu, aby zresetować formularz.
            </Button>
          ) : (
            <>
              <Col sm={3}>
                <Button type="submit" variant="warning" value="Submit">
                  Wyślij zgłoszenie
                </Button>
              </Col>
              <Col sm={2}>
                <Button
                  variant="outline-danger"
                  type="reset"
                  onClick={resetForm}
                >
                  Anuluj
                </Button>
              </Col>
            </>
          )}
        </Row>
        <hr></hr>
        {isFullPrice ? (
          <div className="text-success bold__text">
            GRATULACJE! Przewidywany czas trwania atrakcji uprawnia do darmowej
            wejściówki na Gliwickie Dni Fantastyki!
          </div>
        ) : (
          <div className="text-danger bold__text">
            UWAGA! Przewidywany czas trwania atrakcji NIE uprawnia do darmowej
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
      </Form>
    </>
  );
};
