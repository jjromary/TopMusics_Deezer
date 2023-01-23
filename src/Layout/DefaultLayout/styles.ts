import styled from "styled-components";

export const LayoutDefaultContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  flex-direction: column;
`;

export const BackToTop = styled.a`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 20px;
  right: 30px;
  background: none;
  color: white;
  text-decoration: none;

  button {
    text-decoration: none;
    border: none;
    font-size: 1.2rem;
    color: ${(props) => props.theme["white"]};
    background: transparent;
  }
`;
