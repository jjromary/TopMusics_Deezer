
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FavoriteContext } from "../../Context/FavoritesContext";
import { Track } from "../../Context/TracksContext";
import Button from "../Button";
import { ButtonContent, FavoriteNumber, HeaderContainer, HeaderContent } from "./styles";

export default function Header() {
  const [numberFavorites, setNumberFavorites] = useState<Track[]>([])
  const { isFavorite } = useContext(FavoriteContext)
  const location = useLocation()

  const loadNumber = async () => {
    const response = await axios.get("http://localhost:5000/favorites/")
    setNumberFavorites(response.data)
  }


  useEffect(() => {
    loadNumber()
  }, [isFavorite])

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Top Músicas <span>by Deezer</span></h1>
        <NavLink to={location.pathname === '/' ? '/favorite' : location.pathname === "/favorite" ? '/' : ''} style={{ textDecoration: "none" }}>
          <ButtonContent>

            <Button
              height="50px"
              width="247px"
              background="#FFFFFF"
              colorText="#7C7C8A"
            >
              {location.pathname === '/' ? "Minhas Músicas Favoritas" : "Retorna a lista de Músicas"}
            </Button>
            <FavoriteNumber>
              {numberFavorites.length}
            </FavoriteNumber>
          </ButtonContent>

        </NavLink>

      </HeaderContent>
    </HeaderContainer>
  )
}