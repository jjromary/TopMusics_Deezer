import styled from "styled-components";

interface ButtonContainerProps {
  width: string;
  height: string;
  background: string;
  colorText: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  border: 1px solid ${(props) => props.theme["gray500"]};
  border-radius: 0.8rem;
  padding: 0 0.5rem;

  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.15em;

  color: ${(props) => props.colorText};

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
