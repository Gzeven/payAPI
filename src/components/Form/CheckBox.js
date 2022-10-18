import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = ({ label, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Wrapper className="checkbox-wrapper">
      <label>
        <input
          className={isChecked ? 'checkbox checked' : 'checkbox'}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span>{label}</span>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 1.5rem;
  text-align: left;
  .checkbox {
    -webkit-appearance: none;
    appearance: none;

    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.15em;
    margin: 0;
    border: none;
    outline: none;
    background-color: #36536b;
    opacity: 0.25;
    cursor: pointer;
  }

  label {
    display: grid;
    grid-auto-flow: column;

    gap: 20px;
    justify-content: flex-start;
    align-items: center;
  }

  span {
    font-size: 0.938rem;
    font-family: 'Public Sans';
    line-height: 25px;
    letter-spacing: -0.115385px;
    color: hsl(var(--clr-san-juan-blue));
    max-width: 38ch;
  }

  .checked {
    background-color: hsl(var(--clr-charm-pink));
    position: relative;
    opacity: 1;
    &:before {
      content: '\u2714';
      font-size: 1rem;
      color: #fff;
      position: absolute;
      left: 6px;
      top: 0px;
    }
  }
`;

export default Checkbox;
