import { useState, useEffect, useRef } from "react";
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
import { handleSetData, handleDataChange } from "../utils/helperFunctions";
import { RuleCon } from "../RuleCon/RuleCon";
import { Modal } from "react-bootstrap";
import { legal } from "../utils/backend";
import { CosplayRules } from "../CosplayRules/CosplayRules";
import Dropzone from "react-dropzone";

const MAX_REFS_FILES = 4;
const MAX_BACKINGTRACK_FILES = 2;

const defaultForm = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  nick: "",
  birthDate: "",
  characterName: "",
  seriesName: "",
  techDescr: "",
  refs: [],
  backingTrack: [],
  sceneDescription: "",
  performanceType: "",
  generalRemarks: "",
  useOfFacialImageConsent: "",
  groupName: "",
  announcement: "",
  performanceLocation: "",
};

export const CosplayForm = () => {
  const form = useRef();

  const [isSuccess, setSuccess] = useState(false);
  const [modalType, setModalType] = useState("");
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [shouldSpin, setShouldSpin] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalBody, setModalBody] = useState(<></>);
  const [data, setData] = useState(defaultForm);

  const handleModal = (e) => {
    if (e?.target !== undefined) {
      setModalType(e.target.value);
    }
    setShow((prev) => !prev);
  };

  const {
    techDescr,
    performanceType,
    performanceLocation,
    rulesConsent,
    dataProcessingConsent,
    useOfFacialImageConsent,
  } = data;

  const onRadioChange = ({ target: { checked, value } }) => {
    handleSetData(value, checked, setData);
  };

  const handleFileChange = (name, file) => {
    if (
      name === "refs" &&
      (file.length > MAX_REFS_FILES || data.refs.length === MAX_REFS_FILES)
    )
      return;
    if (
      name === "backingTrack" &&
      (file.length > MAX_BACKINGTRACK_FILES ||
        data.backingTrack.length === MAX_BACKINGTRACK_FILES)
    )
      return;
    setData((prev) => ({ ...prev, [name]: [...prev[name], ...file] }));
  };

  const resetForm = () => {
    setData(defaultForm);
    setShowAlert(false);
    setShouldSpin(false);
  };

  useEffect(() => {
    if (modalType === "rodo") {
      setModalText("Zgoda na przetwarzanie danych osobowych");
      setModalBody(legal.rodo);
    } else if (modalType === "rules") {
      setModalText("Zasady zgłaszania atrakcji");
      setModalBody(<CosplayRules modal="true" />);
    } else if (modalType === undefined) {
      setModalText("Regulamin Konwentu");
      setModalBody(<RuleCon modal="true" />);
    }
  }, [modalType]);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowAlert(false);
    emailjs
      .sendForm(
        "service_cv6vtos",
        "template_k9cdi9f",
        form.current,
        "yzr1aXbYaTCMdb2TI"
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
  };

  const startSpinner = () => {
    setShouldSpin(true);
  };

  return (
    <>
      <h1>Zgłoszenia punktów programu</h1>

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
              input="birthDate"
              isRequired="true"
              type="date"
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
              input="characterName"
              isRequired="true"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <TextInput
              input="seriesName"
              isRequired="true"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <TextInput
              input="groupName"
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
              input="sceneDescription"
              isRequired="true"
              type="text"
              data={data}
              setData={setData}
            />
          </Col>
          <Col>
            <TextInput
              input="announcement"
              isRequired="true"
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
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Opis techniczny wykonania stroju*"
            >
              <Form.Control
                as="textarea"
                placeholder="Opis techniczny wykonania stroju*"
                className="form__control--input mb-3"
                style={{ height: "150px" }}
                required
                name="techDescr"
                onChange={(e) => handleDataChange(e, setData)}
                value={techDescr}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Miejsce występu*">
              <FormSelect
                onChange={(e) => handleDataChange(e, setData)}
                aria-label="Miejsce występu"
                required={true}
                name="performanceLocation"
                value={performanceLocation}
                options={[
                  { val: "", label: "Wybierz" },
                  { val: "scene", label: "Scenka" },
                  { val: "catwalk", label: "Catwalk" },
                ]}
              ></FormSelect>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Rodzaj występu*">
              <FormSelect
                onChange={(e) => handleDataChange(e, setData)}
                aria-label="Rodzaj występu"
                required={true}
                value={performanceType}
                name="performanceType"
                options={[
                  { val: "", label: "Wybierz" },
                  { val: "solo", label: "Solo" },
                  { val: "group", label: "Grupowy" },
                ]}
              ></FormSelect>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        <Row>
          <Col>
            <Dropzone
              name="refs"
              onDrop={(file) => handleFileChange("refs", file)}
            >
              {({ getRootProps, getInputProps }) => (
                <>
                  <div
                    {...getRootProps({ className: "dropzone" })}
                    style={{ border: "1px black solid" }}
                  >
                    <input {...getInputProps()} />
                    <div>Dodaj materiały referencyjne</div>
                    <div>{`(Maksymalnie ${MAX_REFS_FILES} pliki)`}</div>
                  </div>
                  <div className="mt-2">
                    {data.refs.length > 0 &&
                      data.refs.map((el) => <p>{el.name}</p>)}
                  </div>
                </>
              )}
            </Dropzone>
          </Col>
          <Col>
            <Dropzone
              name="backingTrack"
              onDrop={(file) => handleFileChange("backingTrack", file)}
            >
              {({ getRootProps, getInputProps }) => (
                <>
                  <div
                    {...getRootProps({ className: "dropzone" })}
                    style={{ border: "1px black solid" }}
                  >
                    <input {...getInputProps()} />
                    <div>Dodaj podkład do scenki</div>
                    <div>{`(Maksymalnie ${MAX_BACKINGTRACK_FILES} plik)`}</div>
                  </div>
                  <div className="mt-2">
                    {data.backingTrack.length > 0 &&
                      data.backingTrack.map((el) => <p>{el.name}</p>)}
                  </div>
                </>
              )}
            </Dropzone>
          </Col>
        </Row>

        <hr></hr>
        <div className="mb-3">
          <Row>
            <Col>
              <Form.Group>
                <Form.Check
                  inline
                  name="useOfFacialImageConsent"
                  value="useOfFacialImageConsent"
                  type="radio"
                  label="Zgoda na użycie wizerunku*"
                  checked={useOfFacialImageConsent}
                  onChange={onRadioChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <Form.Group>
              <Form.Check
                inline
                name="rulesConsent"
                value="rulesConsent"
                type="radio"
                label="Akceptuję"
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
                zasady zgłaszania atrakcji
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
                label="Wyrażam zgodę na"
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
              <div>{modalText}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalBody}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleModal}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        <hr></hr>
        {showAlert ? (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setShowAlert(false)}
          >
            <Alert.Heading>Popraw błędy w formularzu</Alert.Heading>
            <div>Nie wybrano:</div>
            {/* <div>{!block ? "Bloku" : ""}</div>
            <div>{!day ? "Dnia" : ""}</div>
            <div>{!hour ? "Godziny" : ""}</div>
            <div>{!length ? "Długości trwania atrakcji" : ""}</div> */}
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
            <Button
              className="submit__button"
              type="button"
              onClick={resetForm}
            >
              Anuluj
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
