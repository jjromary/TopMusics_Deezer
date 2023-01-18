import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  height: 50px;
  display: flex;
  gap: 1rem;
  margin: 0 auto;

  input {
    width: 80%;
    border-radius: 6px;
    color: ${(props) => props.theme["gray500"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray500"]};
    }
  }

  button {
    background-color: ${(props) => props.theme["green300"]};
    color: ${(props) => props.theme["white"]};
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;

    width: 20%;
    border: none;
    border-radius: 6px;

    &:hover {
      background-color: ${(props) => props.theme["green500"]};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme["gray300"]};
      opacity: 90%;
    }
  }
`;
