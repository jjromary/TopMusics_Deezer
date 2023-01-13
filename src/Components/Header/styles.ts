import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme["gray900"]};
  margin-bottom: 1.875rem;
`;

export const HeaderContent = styled.div`
  width: 1120px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 1rem;

  span {
    font-size: 0.85rem;
    font-weight: 400;
  }
`;
