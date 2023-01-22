import { useContext } from "react";
import CardTrack from "../../Components/CardTrack";
import { FavoriteContext } from "../../Context/FavoritesContext";
import { ClearFavorites, FavoriteContainer, FavoritesContent, FeedbackList } from "./styles";

export default function Favorite() {
  const { isFavorite, setIsFavorite } = useContext(FavoriteContext)

  const clearFavorites = () => {
    const resultado = window.confirm("Você realmente quer limpar a sua lista?");
    if (resultado === true) {
      setIsFavorite([])
    } else {

    }
  }

  return (
    <FavoriteContainer>
      {isFavorite && isFavorite.length === 0 ? <FeedbackList>Lista Vazia</FeedbackList> : <FeedbackList>Minha Lista de Favoritas</FeedbackList>}

      {isFavorite.length > 0 ? <ClearFavorites onClick={clearFavorites}>Limpar lista completa</ClearFavorites> : ''}


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