import Form from "react-bootstrap/Form";

export const FormSelect = ({
  ariaLabel,
  name,
  onChange,
  value,
  required = false,
  children,
  options = [],
}) => {
  return (
    <Form.Select
      aria-label={ariaLabel}
      className="form__control--input mb-3"
      name={name}
      onChange={onChange}
      value={value}
      required={required}
    >
      {options.length
        ? options.map(({ val, label }) => (
            <option key={val} value={val}>
              {label}
            </option>
          ))
        : children}
    </Form.Select>
  );
};
