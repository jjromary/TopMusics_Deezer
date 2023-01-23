import styled from "styled-components";

export const FavoriteContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem 1rem;
`;

export const FeedbackList = styled.span`
  margin: 0 auto;
  font-size: 1.5rem;
  margin-top: 5rem;
`;

export const FavoritesContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem 1rem;
`;

export const ClearFavorites = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 0.8rem;
  margin-top: 1rem;
`;
