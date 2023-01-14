import styled from "styled-components";

export const CardTrackContainer = styled.div`
  width: 550px;
  height: 228px;
  padding: 0.75rem 1rem;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["white"]};
  border-radius: 1.125rem;

  img {
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FavoriteButton = styled.button`
  width: 32px;
  height: 32px;
  position: relative;

  border: none;
  background-color: transparent;
  z-index: 1;
`;

export const ArtistContent = styled.div`
  width: 450px;
  height: 154px;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtistDetails = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.875rem;

  span {
    color: ${(props) => props.theme["gray900"]};
    font-size: 0.875rem;
  }

  strong {
    font-size: 1rem;
  }
`;

export const BottomContent = styled.div``;

export const PlayerContent = styled.div`
  width: 100%;
`;

export const ButtonContent = styled.div`
  width: 100%;
  margin-top: 0.625rem;
  a {
    text-decoration: none;
  }
`;
