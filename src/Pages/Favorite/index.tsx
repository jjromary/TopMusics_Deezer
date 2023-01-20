import { useContext } from "react";
import CardTrack from "../../Components/CardTrack";
import { TracksContext } from "../../Context/TracksContext";
import { FavoriteContainer, FavoritesContent, FeedbackList } from "./styles";

export default function Favorite() {

  const { isFavorite } = useContext(TracksContext)

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