import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: +1;
  background: ${(props) => props.theme["blue900"]};
`;

export const HeaderContent = styled.div`
  width: 1120px;
  height: 100%;
  margin: 0 auto;
  color: ${(props) => props.theme["white"]};

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

export const FavoriteNumber = styled.div`
  z-index: -1;
  width: 100px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -30px;
  border-radius: 10px;
  background-color: red;

  color: ${(props) => props.theme["white"]};
  font-weight: 700;
  font-size: 1.5rem;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
