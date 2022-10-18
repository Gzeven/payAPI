import React from 'react';
import useForm from './customHook';
import validate from './validate';
import styled from 'styled-components';
import { PrimaryButton } from '../PrimaryButton';

const EmailForm = () => {
  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    { email: '' },
    validate
  );
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-item">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            placeholder="Enter email Adress"
            required=""
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <PrimaryButton
            bgcolor="hsl(var(--clr-pink))"
            color="hsl(var(--clr-link-water-white))"
            hovercolor="hsl(var(--clr-charm-pink))"
            className="submit-button"
          >
            Schedule a Demo
          </PrimaryButton>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .input-item {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: #fff;
    color: var(--clr-san-juan-blue);
    font-weight: 700;
    width: 100%;
    padding: 0.9rem;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    border: none;
    border-radius: 24px;

    ::placeholder {
      color: var(--clr-san-juan-blue);
      opacity: 0.5;
    }
    :focus {
      outline: none !important;
    }
  }

  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .error {
    font-family: 'Public Sans';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -32px;
    left: 16px;
    color: #ff0000;
    opacity: 0.75;
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    .input-item {
      width: 27.813rem;
      margin: 0 auto;
    }

    form {
      .submit-button {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

  @media (min-width: 1200px) {
    .input-item {
      margin-left: 0;
    }
  }
`;

export default EmailForm;
