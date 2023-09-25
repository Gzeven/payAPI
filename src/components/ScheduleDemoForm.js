import React from 'react';
import styled from 'styled-components';
import EmailForm from './Form/EmailForm';

const ScheduleDemoForm = () => {
  return (
    <Wrapper>
      <h1> Ready to start?</h1>
      <EmailForm className="email-button" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding-bottom: 5rem;
  padding-inline: 1.5rem;
  h1 {
    font-size: 2rem;
    font-family: 'DM Serif Display';
    color: hsl(var(--clr-san-juan-blue));
    line-height: 56px;
    letter-spacing: -0.369231px;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 6.25rem;

    h1 {
      font-size: 3rem;
      margin-bottom: 2.5rem;
    }
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 10.313rem;
    h1 {
      margin-bottom: 0;
    }
    .email-button {
      margin-bottom: 0;
    }
  }
`;

export default ScheduleDemoForm;
