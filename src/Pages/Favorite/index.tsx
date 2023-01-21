import { useContext } from "react";
import CardTrack from "../../Components/CardTrack";
import { FavoriteContext } from "../../Context/FavoritesContext";
import { FavoriteContainer, FavoritesContent, FeedbackList } from "./styles";

export default function Favorite() {

  const { isFavorite } = useContext(FavoriteContext)

  return (
    <FavoriteContainer>
      {isFavorite && isFavorite.length === 0 ? <FeedbackList>Lista Vazia</FeedbackList> : ''}

      <FavoritesContent>

        {isFavorite.map((favs) => {
          return (
            <CardTrack key={favs.id} track={favs} />
          )
        })}

      </FavoritesContent >
    </FavoriteContainer>
  )
}