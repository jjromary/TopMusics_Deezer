import styled from "styled-components";

export const CardTrackContainer = styled.div`
  width: 100%;
  height: 110px;
  padding: 0.75rem 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* background: linear-gradient(180deg, #1ea483 0%, #00875f 100%); */
  background-color: #1ea483;
  box-shadow: 0px 0px 48px rgba(0, 0, 0, 0.9);
  border-radius: 1.125rem;
`;

export const ArtistContent = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;

  img {
    object-fit: cover;
  }
`;

export const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;

  span {
    color: #ffffff;
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
