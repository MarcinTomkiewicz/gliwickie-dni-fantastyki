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
import { RuleCon } from "../RuleCon/RuleCon";
import { Modal } from "react-bootstrap";
import { legal } from "../utils/backend";
import { CosplayRules } from "../CosplayRules/CosplayRules";
import Dropzone, { useDropzone } from "react-dropzone";

const defaultGeneral = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  nick: "",
  birthDate: "",
  contestType: "",
  characterName: "",
  seriesName: "",
  techDescr: "",
  refs: "",
  sceneAmbient: "",
  sceneDescr: "",
  isScene: "",
  isSolo: "",
  nameOfGroup: "",
  generalRemarks: "",
};

const defaultForm = {
  ...defaultGeneral,
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
  const [addedFile, setAddedFile] = useState([]);
  const [data, setData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    nick: "",
    birthDate: "",
    contestType: "",
    characterName: "",
    seriesName: "",
    techDescr: "",
    refs: "",
    sceneAmbient: "",
    sceneDescr: "",
    isScene: "",
    isSolo: "",
    nameOfGroup: "",
    generalRemarks: "",
  });

  const handleModal = (e) => {
    if (e?.target !== undefined) {
      setModalType(e.target.value);
    }
    setShow((prev) => !prev);
  };

  const {
    name,
    surname,
    phone,
    email,
    nick,
    birthDate,
    contestType,
    characterName,
    seriesName,
    techDescr,
    refs,
    sceneAmbient,
    sceneDescr,
    isScene,
    isSolo,
    nameOfGroup,
    generalRemarks,
    rulesConsent,
    dataProcessingConsent,
  } = data;

  const onRadioChange = ({ target: { name, checked, value } }) => {
    handleSetData(value, checked, setData);
  };

  // const handleFileUpload = () => {
  //   setData((prev) => ({...prev, [name]: }))
  // }

  const handleDataChange = ({ target: { name, value, files } }) => {
    console.log(files);
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

  const handleFileChange = (name, file) => {
    console.log(name, file);
    setAddedFile(file);
    setData((prev) => ({ ...prev, [name]: file }));
  }

console.log(data);

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

  const resetForm = () => {
    setData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      nick: "",
      birthDate: "",
      contestType: "",
      characterName: "",
      seriesName: "",
      techDescr: "",
      refs: "",
      sceneAmbient: "",
      sceneDescr: "",
      isScene: "",
      isSolo: "",
      nameOfGroup: "",
      generalRemarks: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // if (!block || !day || !hour || !length) {
    //   setShouldSpin(false);
    //   setShowAlert(true);
    // } else {
    setShowAlert(false);
    emailjs.sendForm("gdf_cosplay", "template_ezw6wwz", form.current, "C1GC4KNhMZuiMFPLW").then(
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
    // }
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
            <TextInput input="name" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
          <Col>
            <TextInput input="surname" isRequired="true" type="text" data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput input="nick" isRequired="false" type="text" data={data} setData={setData} />
          </Col>
          <Col>
            <TextInput input="email" isRequired="true" type="email" data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput input="phone" isRequired="true" type="number" data={data} setData={setData} />
          </Col>
          <Col>
            <TextInput input="facebook" isRequired="false" type="text" data={data} setData={setData} />
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
                placeholder="Opis techniczny wykonania stroju*"
                className="form__control--input mb-3"
                style={{ height: "150px" }}
                required
                name="descr"
                onChange={handleDataChange}
                value={techDescr}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        <Row>
          <Col>
          <Dropzone name="refs" onDrop={file => handleFileChange('refs', file)}>
          {({getRootProps, getInputProps}) => (
            <>
          <div {...getRootProps({ className: "dropzone"})} style={{border: "1px black solid"}}>
          <input {...getInputProps()} />
          <div>Dodaj materiały referencyjne</div>
          <div>(Maksymalnie 2 pliki)</div>
        </div>
        <aside>
            {addedFile.map(file => {
              <div key={file.name}>{file.name}</div>
            })}
        </aside>
        </>)}
        </Dropzone>
        </Col>
        </Row>
        {/* <Row>
          <Col>
          <Form.Label>Materiały referencyjne</Form.Label>
        <Form.Control
          type="file"
          name="refs"
          multiple
          className="form__control--input mb-3"
          value={selectedFile}
          onChange={handleUpload}
        />
          </Col>
          </Row> */}
        {/* <Form.Label>Materiały referencyjne</Form.Label>
        <Form.Control
          type="file"
          name="refs"
          multiple
          className="form__control--input mb-3"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        /> */}
        <Row>
          <hr></hr>
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
                // value={descr}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <hr></hr>
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
                Zasad zgłaszania atrakcji
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
          <Alert variant="danger" dismissible onClose={() => setShowAlert(false)}>
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
          <Alert variant="success" dismissible onClick={() => setSuccess(false)}>
            <Alert.Heading>Gratulacje!</Alert.Heading>
            <div>Dziękujemy za zgłoszenie! Prosimy oczekiwać na informację zwrotną od Koordynatora ds. Programu.</div>
          </Alert>
        ) : (
          ""
        )}
        <div className="bold__text">
          Prosimy pamiętać, że ostateczna decyzja, dotycząca darmowej wejściówki będzie uzależniona od długości trwania
          atrakcji zatwierdzonych przez odpowiedniego Koordynatora. Informacja o tym zostanie przekazana uczestnikowi
          drogą mailową nie później niż do 3 dni przed rozpoczęciem Konwentu.
        </div>
        <hr></hr>
        <Row className="align-items-center justify-content-center mt-3">
          <Col sm={5}>
            <Button type="submit" variant="warning" value="Submit" onClick={startSpinner}>
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
