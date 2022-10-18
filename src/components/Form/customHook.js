import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(inputs);
    setErrors(validationErrors);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
  };
};

export default useForm;
