import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = ({ label, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Wrapper className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <svg
          className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
          aria-hidden="true"
          viewBox="0 0 18 11"
          fill="none"
        >
          <path
            d="M4 5.5L7 8L13 2"
            strokeWidth="2"
            stroke={isChecked ? '#fff' : 'none'}
          />
        </svg>
        {label}
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 1.5rem;
  text-align: left;

  input[type='checkbox'] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .checkbox {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.15em;
    background: rgba(54, 83, 107, 0.25);
    margin-right: 4px;
    cursor: pointer;
  }

  .checkbox--active {
    background: hsl(var(--clr-charm-pink));
  }

  label {
    display: grid;
    grid-auto-flow: column;

    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.938rem;
    font-family: 'Public Sans';
    line-height: 25px;
    letter-spacing: -0.115385px;
    color: hsl(var(--clr-san-juan-blue));
    max-width: 38ch;
  }
`;

export default Checkbox;
