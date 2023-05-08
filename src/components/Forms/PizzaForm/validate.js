const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Requred";
  } else if (values.name.length <= 3) {
    errors.name = "Too short";
  }

  if (values.price <= 0) {
    errors.price = "Write corect price";
  }

  if (values.rating <= 0) {
    errors.rating = "Write corect rating";
  } else if (values.rating > 10) {
    errors.rating = "Write corect rating";
  }

  return errors;
};

export default validate;
