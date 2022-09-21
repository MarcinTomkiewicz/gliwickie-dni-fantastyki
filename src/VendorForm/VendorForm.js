import { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

import { TextInput } from "../utils/TextInput";
import { handleSetData } from "../utils/helperFunctions";
import { legal } from "../utils/backend";
import { FloatingLabel, FormControl } from "react-bootstrap";

import { VendorRules } from "../VendorRules/VendorRules";

const defaultGeneral = {
  name: "",
  surname: "",
  email: "",
  facebook: "",
  company: "",
  companyAddress: "",
  nip: "",
  regon: "",
  nameExtraContactPerson: "",
  surnameExtraContactPerson: "",
  phoneExtraContactPerson: "",
  emailExtraContactPerson: "",
  companyDescr: "",
  googleDrive: "",
  areaSize: "",
  staff: "",
  remarksAboutStand: "",
};

const defaultContactPerson = {
  contactPersonDifferentThanAbove: false,
  contactPersonTheSame: false,
};

const category = {
  boardGames: false,
  electronicGames: false,
  books: false,
  comicBooks: false,
  mangaAnime: false,
  arts: false,
  gadgets: false,
  clothing: false,
  jewellery: false,
  // food: false,
  workshops: false,
  other: false,
};

const defaultForm = {
  ...defaultGeneral,
  ...defaultContactPerson,
  ...category,
};

const checkIfAtLeastOneChecked = (obj, props) => {
  const objToArr = Object.keys(props);
  const objToArr1 = Object.entries(obj).map(([prop, val]) => ({
    [prop]: val,
  }));
  return objToArr.some((el) => objToArr1.find((obj) => obj[el] === true));
};

export const VendorForm = () => {
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
    contactPersonDifferentThanAbove,
    contactPersonTheSame,
    boardGames,
    electronicGames,
    books,
    comicBooks,
    mangaAnime,
    arts,
    gadgets,
    clothing,
    jewellery,
    // food,
    workshops,
    // other,
    dataProcessingConsent,
    rulesConsent,
  } = data;

  const onRadioChange = ({ target: { name, checked, value } }) => {
    if (name === "contactPerson") {
      setData((prev) => ({ ...prev, ...defaultContactPerson }));
    }
    handleSetData(value, checked, setData);
  };

  const handleDataChange = ({ target: { name, value } }) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setShouldSpin(true);

    const isCategorySelected = checkIfAtLeastOneChecked(data, category);

    if (!isCategorySelected || (!contactPersonDifferentThanAbove && !contactPersonTheSame)) {
      setShouldSpin(false);
      return setShowAlert(true);
    }
    setShowAlert(false);

    emailjs.sendForm("gdf_wystawcy", "template_hgsx6mr", form.current, "C1GC4KNhMZuiMFPLW").then(
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
      <h1>Zgłoszenia wystawców</h1>
      <hr></hr>
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col>
            <TextInput input="company" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput input="name" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
          <Col>
            <TextInput input="surname" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
        </Row>

        <Row>
          <Col>
            <TextInput input="email" isRequired="true" type="email" data={data} setData={setData} />
          </Col>
          <Col>
            <TextInput input="companyAddress" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput input="nip" isRequired="false" type="number" data={data} setData={setData} />
          </Col>
          <Col>
            <TextInput input="regon" isRequired="false" type="number" data={data} setData={setData} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="mb-2">Osoba kontaktowa jest inna niż podana powyżej:*</div>
            <Form.Check
              inline
              type="radio"
              label="Tak"
              name="contactPerson"
              value="contactPersonDifferentThanAbove"
              onChange={onRadioChange}
              checked={contactPersonDifferentThanAbove}
            />
            <Form.Check
              inline
              type="radio"
              label="Nie"
              name="contactPerson"
              value="contactPersonTheSame"
              onChange={onRadioChange}
              checked={contactPersonTheSame}
            />
          </Col>
        </Row>
        <div
          className="mt-4"
          style={{
            display: contactPersonDifferentThanAbove ? "block" : "none",
          }}
        >
          <Row>
            <Col>
              <TextInput
                input="nameExtraContactPerson"
                isRequired={contactPersonDifferentThanAbove ? "true" : "false"}
                type="text"
                data={data}
                setData={setData}
              />
            </Col>
            <Col>
              <TextInput
                input="surnameExtraContactPerson"
                isRequired={contactPersonDifferentThanAbove ? "true" : "false"}
                type="text"
                data={data}
                setData={setData}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput
                input="emailExtraContactPerson"
                isRequired={contactPersonDifferentThanAbove ? "true" : "false"}
                type="email"
                data={data}
                setData={setData}
              />
            </Col>
            <Col>
              <TextInput
                input="phoneExtraContactPerson"
                isRequired={contactPersonDifferentThanAbove ? "true" : "false"}
                type="number"
                data={data}
                setData={setData}
              />
            </Col>
          </Row>
        </div>
        <h3 className="mt-4 mb-4">O firmie</h3>
        <Row>
          <Col>
            <TextInput input="facebook" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
          <Col>
            <TextInput input="googleDrive" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel label="Opis firmy*" controlId="companyDescr">
              <FormControl
                as="textarea"
                placeholder="Opis firmy*"
                className="form__control--input"
                name="companyDescr"
                style={{ height: "100px" }}
                required
                value={data.companyDescr}
                onChange={handleDataChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mb-2">Kategoria:*</div>
            <div className="d-flex flex-row justify-content-between w-50">
            <div className="d-flex flex-column align-items-start">
              <Form.Check
                inline
                value="boardGames"
                type="switch"
                label="Planszówki"
                name="boardGames"
                checked={boardGames}
                onChange={onRadioChange}
              />
              <Form.Check
                inline
                name="electronicGames"
                value="electronicGames"
                checked={electronicGames}
                onChange={onRadioChange}
                type="switch"
                label="Gry elektroniczne"
              />
              <Form.Check
                inline
                name="books"
                value="books"
                checked={books}
                onChange={onRadioChange}
                type="switch"
                label="Książki"
              />
              <Form.Check
                inline
                name="comicBooks"
                value="comicBooks"
                checked={comicBooks}
                onChange={onRadioChange}
                type="switch"
                label="Komiksy"
              />
              <Form.Check
                inline
                name="mangaAnime"
                type="switch"
                value="mangaAnime"
                checked={mangaAnime}
                onChange={onRadioChange}
                label="Manga i anime"
              />
              </div>
              <div className="d-flex flex-column align-items-start">
              <Form.Check
                inline
                name="arts"
                type="switch"
                value="arts"
                checked={arts}
                onChange={onRadioChange}
                label="Sztuka"
              />
              <Form.Check
                inline
                name="gadgets"
                value="gadgets"
                checked={gadgets}
                onChange={onRadioChange}
                type="switch"
                label="Gadżety"
              />
              <Form.Check
                inline
                name="clothing"
                value="clothing"
                checked={clothing}
                onChange={onRadioChange}
                type="switch"
                label="Odzież"
              />
              <Form.Check
                inline
                name="jewellery"
                value="jewellery"
                checked={jewellery}
                onChange={onRadioChange}
                type="switch"
                label="Biżuteria i dodatki"
              />
              {/* <Form.Check
                inline
                name="food"
                value="food"
                checked={food}
                onChange={onRadioChange}
                type="switch"
                label="Jedzenie"
              /> */}
              <Form.Check
                inline
                name="workshops"
                value="workshops"
                checked={workshops}
                onChange={onRadioChange}
                type="switch"
                label="Warsztaty"
              />
            </div>
            </div>
          </Col>
        </Row>
        <h3 className="mt-4 mb-4">Zapotrzebowanie na wynajęcie stoiska</h3>
        <Row>
          <Col>
            <div className="mb-2">Oferta dla wystawców:</div>
            <Table bordered >
              <thead style={{ backgroundColor: "#6D111E", color: "#fff" }}>
                <tr>
                  <th colSpan={2}>Parametry stoiska</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody className="table__striped">
                <tr>
                  <td colSpan={2} style={{ color: "#fff" }}>
                    Stoisko wystawiennicze zgodne z zamówionym metrażem
                  </td>
                  <td style={{ color: "#fff" }}>✔</td>
                </tr>
                <tr>
                  <td colSpan={2}>Specjalna wejściówka dla wystawców (liczba wejściówek ustalana indywidualnie)</td>
                  <td style={{ color: "#fff" }}>✔</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ color: "#fff" }}>
                    Wzbogacony Welcome Pack
                  </td>
                  <td style={{ color: "#fff" }}>✔</td>
                </tr>
                <tr>
                  <td colSpan={2}>Post w mediach społecznościowych Gliwickich Dni Fantastyki</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ color: "#fff" }}>
                    Umieszczenie logo na stronie internetowej Gliwickich Dni Fantastyki w dziale Wystawcy
                  </td>
                  <td style={{ color: "#fff" }}>✔</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Cena za 1m<abbr>2</abbr> (netto)
                  </td>
                  <td>70 zł</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput input="areaSize" isRequired="true" type="number" data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput input="staff" isRequired="true" type="number" data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput input="remarksAboutStand" type="text" data={data} setData={setData} />
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
        <Modal show={show} size="lg" onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              {modalType === "rodo" ? "Zgoda na przetwarzanie danych osobowych" : "Regulamin wystawców"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalType === "rodo" ? legal.rodo : <VendorRules modal={true} />}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleModal}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        {showAlert ? (
          <Alert variant="danger" dismissible onClose={() => setShowAlert(false)}>
            <Alert.Heading>Popraw błędy w formularzu</Alert.Heading>
            <div>Nie zaznaczono:</div>
            <div>
              {!contactPersonTheSame && !contactPersonDifferentThanAbove
                ? "Czy osoba kontaktowa jest inna niż podana wyżej"
                : ""}
            </div>
            <div>{!checkIfAtLeastOneChecked(data, category) ? "Kategorii (przynajmniej jedna)" : ""}</div>
          </Alert>
        ) : (
          ""
        )}
        {isSuccess ? (
          <Alert variant="success" dismissible onClick={() => setSuccess(false)}>
            <Alert.Heading>Gratulacje!</Alert.Heading>
            <div>Dziękujemy za zgłoszenie! Prosimy oczekiwać na informację zwrotną od Koordynatora ds. Wystawców.</div>
          </Alert>
        ) : (
          ""
        )}
        <Row className="align-items-center justify-content-center mt-3">
          <Col sm={5}>
            <Button type="submit" variant="warning" value="Submit">
              {shouldSpin ? <Spinner animation="border" variant="danger" size="sm" /> : ""}
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
    </>
  );
};
