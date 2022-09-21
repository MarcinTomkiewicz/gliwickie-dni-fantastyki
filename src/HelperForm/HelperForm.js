import { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import { TextInput } from "../utils/TextInput";
import { handleSetData } from "../utils/helperFunctions";
import { legal } from "../utils/backend";
import { HelperRules } from "../HelperRules/HelperRules";

const defaultGeneral = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  nick: "",
  birthDate: "",
  facebook: "",
  experienceAsVolounteer: "",
  startDate: "",
  endDate: "",
  remarksAboutDates: "",
  generalRemarks: "",
};

const defaultTShirts = {
  tShirtSizeXS: false,
  tShirtSizeS: false,
  tShirtSizeM: false,
  tShirtSizeL: false,
  tShirtSizeXL: false,
  tShirtSizeXXL: false,
};

const defaultShifts = {
  shiftsTo12h: false,
  shiftsOver12h: false,
};

const defaultDiet = {
  meat: false,
  vegetarian: false,
  vegan: false,
};

const defaultForm = {
  ...defaultGeneral,
  ...defaultTShirts,
  ...defaultShifts,
  ...defaultDiet,
};

export const HelperForm = () => {
  const [data, setData] = useState(defaultForm);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [shouldSpin, setShouldSpin] = useState(false);
  const form = useRef();

  const handleModal = (e) => {
    if (e?.target !== undefined) {
      setModalType(e.target.value);
    }
    setShow((prev) => !prev);
  };

  const resetForm = () => {
    setData(defaultForm);
    setShowAlert(false);
    setShouldSpin(false);
  };

  const {
    tShirtSizeXS,
    tShirtSizeS,
    tShirtSizeM,
    tShirtSizeL,
    tShirtSizeXL,
    tShirtSizeXXL,
    vegetarian,
    vegan,
    meat,
    shiftsTo12h,
    shiftsOver12h,
    rulesConsent,
    dataProcessingConsent,
  } = data;

  const onRadioChange = ({ target: { name, checked, value } }) => {
    if (name === "tShirtSize") {
      setData((prev) => ({ ...prev, ...defaultTShirts }));
    } else if (name === "shiftsLength") {
      setData((prev) => ({ ...prev, ...defaultShifts }));
    } else if (name === "diet") {
      setData((prev) => ({ ...prev, ...defaultDiet }));
    }
    handleSetData(value, checked, setData);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setShouldSpin(true);
    if (
      (!tShirtSizeXS &&
        !tShirtSizeS &&
        !tShirtSizeM &&
        !tShirtSizeL &&
        !tShirtSizeXL &&
        !tShirtSizeXXL) ||
      (!meat && !vegan && !vegetarian) ||
      (!shiftsTo12h && !shiftsOver12h) ||
      !rulesConsent ||
      !dataProcessingConsent
    ) {
      setShouldSpin(false);
      return setShowAlert(true);
    }
    setShowAlert(false);

    emailjs
      .sendForm(
        "gdf_kadry",
        "template_f091p9g",
        form.current,
        "C1GC4KNhMZuiMFPLW"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            resetForm();
            setSuccess(true);
            setShouldSpin(false);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1>Zgłoszenia helperów</h1>
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
            <TextInput input="nick" type="text" data={data} setData={setData} />
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
              input="facebook_profile"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              input="birthDate"
              isRequired="true"
              type="date"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <TextInput
              input="experienceAsVolounteer"
              type="text"
              data={data}
              setData={setData}
              isRequired="true"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mb-2">Jak długie chcesz mieć dyżury?*</div>
            <Form.Check
              inline
              type="radio"
              label="Do 12h"
              name="shiftsLength"
              value="shiftsTo12h"
              onChange={onRadioChange}
              checked={data.shiftsTo12h}
            />
            <Form.Check
              inline
              type="radio"
              label="Powyżej 12h"
              name="shiftsLength"
              value="shiftsOver12h"
              onChange={onRadioChange}
              checked={data.shiftsOver12h}
            />
          </Col>
          <Col>
            <div className="mb-2">Preferowany rozmiar koszulki*</div>
            <Form.Group>
              <Form.Check
                inline
                value="tShirtSizeXS"
                type="radio"
                label="XS"
                name="tShirtSize"
                checked={tShirtSizeXS}
                onChange={onRadioChange}
              />
              <Form.Check
                inline
                name="tShirtSize"
                value="tShirtSizeS"
                checked={tShirtSizeS}
                onChange={onRadioChange}
                type="radio"
                label="S"
              />
              <Form.Check
                inline
                name="tShirtSize"
                value="tShirtSizeM"
                checked={tShirtSizeM}
                onChange={onRadioChange}
                type="radio"
                label="M"
              />
              <Form.Check
                inline
                name="tShirtSize"
                value="tShirtSizeL"
                checked={tShirtSizeL}
                onChange={onRadioChange}
                type="radio"
                label="L"
              />
              <Form.Check
                inline
                name="tShirtSize"
                type="radio"
                value="tShirtSizeXL"
                checked={tShirtSizeXL}
                onChange={onRadioChange}
                label="XL"
              />
              <Form.Check
                inline
                name="tShirtSize"
                value="tShirtSizeXXL"
                checked={tShirtSizeXXL}
                onChange={onRadioChange}
                type="radio"
                label="XXL"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-3">
          <Row>
            <Col>
              <TextInput
                input="startDate"
                data={data}
                setData={setData}
                isRequired="true"
                type="datetime-local"
              />
            </Col>
            <Col>
              <TextInput
                input="endDate"
                data={data}
                setData={setData}
                isRequired="true"
                type="datetime-local"
              />
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <TextInput
              input="remarksAboutDates"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <div className="mb-2">Dieta*</div>
            <Form.Group>
              <Form.Check
                inline
                name="diet"
                value="meat"
                type="radio"
                label="Mięsna"
                checked={meat}
                onChange={onRadioChange}
              />
              <Form.Check
                inline
                name="diet"
                value="vegetarian"
                type="radio"
                label="Wegetariańska"
                checked={vegetarian}
                onChange={onRadioChange}
              />
              <Form.Check
                inline
                name="diet"
                value="vegan"
                type="radio"
                label="Wegańska"
                checked={vegan}
                onChange={onRadioChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              input="generalRemarks"
              type="text"
              data={data}
              setData={setData}
              value={data}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Check
                inline
                name="rulesConsent"
                value="rulesConsent"
                type="radio"
                label="Akceptacja"
                checked={rulesConsent}
                onChange={onRadioChange}
              />
              <button
                onClick={handleModal}
                type="button"
                style={{
                  all: "unset",
                  cursor: "pointer",
                  marginLeft: "-12px",
                  color: "#fff",
                  textDecoration: "underline",
                  type: "button",
                }}
                value="rules"
              >
                regulaminu
              </button>
              *
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-3 mb-3">
          <Row>
            <Col>
              <Form.Check
                inline
                name="dataProcessingConsent"
                value="dataProcessingConsent"
                type="radio"
                label="Akceptuję"
                checked={dataProcessingConsent}
                onChange={onRadioChange}
              />
              <button
                onClick={handleModal}
                type="button"
                style={{
                  all: "unset",
                  cursor: "pointer",
                  marginLeft: "-12px",
                  color: "#fff",
                  textDecoration: "underline",
                  type: "button",
                }}
                value="rodo"
              >
                przetwarzanie danych
              </button>
              *
            </Col>
          </Row>
        </div>
        {showAlert ? (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setShowAlert(false)}
          >
            <Alert.Heading>Popraw błędy w formularzu</Alert.Heading>
            <div>Nie zaznaczono:</div>
            <div>
              {!tShirtSizeXS &&
              !tShirtSizeS &&
              !tShirtSizeM &&
              !tShirtSizeL &&
              !tShirtSizeXL &&
              !tShirtSizeXXL
                ? "Rozmiaru koszulki"
                : ""}
            </div>
            <div>{!shiftsTo12h && !shiftsOver12h ? "Długości zmiany" : ""}</div>
            <div>{!vegan && !meat ? "Diety" : ""}</div>
            <div>{!rulesConsent ? "Akceptacji regulaminu" : ""}</div>
            <div>
              {!dataProcessingConsent ? "Akceptacji przetwarzania danych" : ""}
            </div>
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
              od Koordynatora ds. Helperów.
            </div>
          </Alert>
        ) : (
          ""
        )}
        <Row className="align-items-center justify-content-center mt-3">
          <Col sm={5}>
            <Button type="submit" variant="warning" value="Submit">
              {shouldSpin ? (
                <Spinner animation="border" variant="danger" size="sm" />
              ) : (
                ""
              )}
              {shouldSpin ? " " : ""}Wyślij zgłoszenie
            </Button>
          </Col>
          <Col sm={2}>
            <Button className="submit__button" type="button" onClick={resetForm}>
              Anuluj
            </Button>
          </Col>
        </Row>
      </Form>
      <Modal show={show} size="lg" onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "rodo"
              ? "Zgoda na przetwarzanie danych osobowych"
              : "Regulamin helperów"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === "rodo" ? legal.rodo : <HelperRules modal={true} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
