export const handleSetData = (name, value, fn) => {
  fn((prev) => ({
    ...prev,
    [name]: value,
  }));
};
