import styled from "styled-components";

export const SearchContainer = styled.div`
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
`;
