import axios from "axios";
import { useContext, useEffect } from "react";
import CardTrack from "../../Components/CardTrack";
import { FavoriteContext } from "../../Context/FavoritesContext";
import { Track } from "../../Context/TracksContext";
import { ClearFavorites, FavoriteContainer, FavoritesContent, FeedbackList } from "./styles";

export default function Favorite() {
  const { isFavorite, setIsFavorite } = useContext(FavoriteContext)



  const clearFavorites = () => {
    const resultado = window.confirm("Você realmente quer limpar a sua lista?");
    if (resultado === true) {
      isFavorite.map((allFavorites) => {
        axios.delete(`http://localhost:5000/favorites/${allFavorites.id}`)
      })
    } else {
    }
  }

  const loadFavoriteTracks = async () => {
    const response = await axios.get('http://localhost:5000/favorites')
    setIsFavorite(response.data)
  }


  useEffect(() => {
    loadFavoriteTracks()
  }, [isFavorite])

  return (
    <FavoriteContainer>
      {isFavorite.length === 0 ? <FeedbackList>Lista Vazia</FeedbackList> : <FeedbackList>Minha Lista de Favoritas</FeedbackList>}
      {isFavorite.length > 0 ? <ClearFavorites onClick={clearFavorites}>Limpar lista completa</ClearFavorites> : ''}

      <FavoritesContent>

        {isFavorite.map((favs: Track) => {
          return (
            <CardTrack key={favs.id} track={favs} />
          )
        })}

      </FavoritesContent >
    </FavoriteContainer>
  )
}