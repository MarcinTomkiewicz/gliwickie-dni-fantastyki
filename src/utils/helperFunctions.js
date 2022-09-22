export const handleSetData = (name, value, fn) => {
  fn((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export const handleDataChange = ({ target: { name, value } }, fn) => {
  fn((prev) => ({ ...prev, [name]: value }));
};
