const validate = (inputs) => {
  const errors = {};
  if (!inputs.email) {
    errors.email = "This field can't be empty";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      inputs.email
    )
  ) {
    errors.email = 'Please use a valid email address';
  }

  if (!inputs.name) {
    errors.name = "This field can't be empty";
  }

  if (!inputs.company) {
    errors.company = "This field can't be empty";
  }

  if (!inputs.title) {
    errors.title = "This field can't be empty";
  }

  if (!inputs.message) {
    errors.message = "This field can't be empty";
  }
  return errors;
};
export default validate;
