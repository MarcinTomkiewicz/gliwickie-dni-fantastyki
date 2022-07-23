import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { formLabels as labels } from "./backend";

export const TextInput = ({ input, isRequired, type, data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [input]: e.target.value });
  };

  return labels.map((label) => {
    if (label.name === input) {
      return (
        <FloatingLabel
          controlId="floatingInput"
          label={`${label.label}${
            isRequired === "true" ? "*" : " (opcjonalnie)"
          }`}
          className="mb-3"
          key={label}
        >
          <Form.Control
            className="form__control--input"
            type={type}
            placeholder={label.label}
            required={isRequired === "true" ? true : false}
            name={label.name}
            onChange={handleChange}
            value={data[input]}
          />
        </FloatingLabel>
      );
    } else {
      return null;
    }
  });
};
