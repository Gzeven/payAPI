import React from 'react';
import useForm from './customHook';
import validate from './validate';
import styled from 'styled-components';
import Checkbox from './CheckBox';

const Form = () => {
  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    { name: '', email: '', message: '' },
    validate
  );
  return (
    <Wrapper>
      <div className="contact-container">
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-item">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              className={errors.name ? 'errorcolor' : null}
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              value={inputs.name}
              placeholder="Name"
              autoComplete="on"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="input-item">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              className={errors.email ? 'errorcolor' : null}
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
              value={inputs.email}
              placeholder="Email Address"
              autoComplete="on"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-item">
            <label htmlFor="company" className="sr-only">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              id="company"
              onChange={handleInputChange}
              value={inputs.company}
              placeholder="Company Name"
              autoComplete="off"
            />
          </div>

          <div className="input-item">
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleInputChange}
              value={inputs.title}
              placeholder="Title"
              autoComplete="off"
            />
          </div>

          <div className="input-item">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              className={errors.message ? 'errorcolor' : null}
              name="message"
              id="message"
              onChange={handleInputChange}
              value={inputs.message}
              placeholder="Message"
              autoComplete="off"
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <Checkbox
            label="Stay
        up-to-date with company announcements and updates to our API "
          />

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: left;
  .input-item {
    position: relative;

    .error {
      position: absolute;
      left: 20px;
      font-size: 0.688rem;
      color: #ff0000;
      opacity: 0.5;
    }

    .errorcolor {
      ::placeholder {
        color: red;
        opacity: 0.5;
      }
      border-bottom: 1px solid rgba(255, 0, 0, 0.5);
    }

    input,
    textarea {
      background-color: transparent;
      font-size: 0.938rem;
      font-family: 'Public Sans';
      line-height: 25px;
      letter-spacing: -0.115385px;
      width: 100%;
      padding: 1.5rem 1.25rem 1rem;
      border: none;
      border-bottom: 1px solid rgba(54, 83, 107, 0.5);
      ::placeholder {
        color: hsl(var(--clr-san-juan-blue));
        opacity: 0.5;
      }
      :focus {
        outline: none !important;
        border-bottom: 1px solid rgba(54, 83, 107);
        ::placeholder {
          opacity: 1;
        }
      }
    }
  }

  textarea {
    resize: none;
    height: 7rem;
    /* padding-bottom: 6rem; */
    /* margin-bottom: 1.5rem; */
  }

  .form-button {
    background-color: transparent;
    color: hsl(var(--clr-san-juan-blue));
    font-family: 'Public Sans';
    font-weight: 700;
    border-radius: 24px;
    height: 3rem;
    width: 10.5rem;
    margin-top: 1.5rem;

    cursor: pointer;
    border: 1px solid hsl(var(--clr-san-juan-blue));
    outline: none;
    transition: all 0.6s;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: hsl(var(--clr-san-juan-blue));
        color: hsl(var(--clr-link-water-white));
      }
    }
  }

  @media (min-width: 768px) {
    padding-inline: 7.688rem;
  }

  @media (min-width: 1200px) {
    padding-inline: 0;
    width: 27.813rem;
  }
`;

export default Form;
