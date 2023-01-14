import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  display: flex;
  gap: 1rem;
  margin: 0 auto;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["gray500"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["gray500"]};
    font-weight: regular;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["gray500"]};
      border-color: ${(props) => props.theme["green500"]};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
