import styled from 'styled-components';

export const PrimaryButton = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  font-size: 0.938rem;
  font-weight: 700;
  border-radius: 24px;
  height: 3rem;
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s;
  margin-top: 1rem;
  &:hover {
    background-color: ${(props) => props.hovercolor};
  }
  @media (min-width: 768px) {
    width: 10.813rem;
    margin-top: 0;
  }
`;
