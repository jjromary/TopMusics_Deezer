import styled from "styled-components";

interface ButtonContainerProps {
  width: string;
  height: string;
  background: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  border: none;
  border-radius: 0.8rem;
  padding: 0 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray300"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
