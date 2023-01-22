
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FavoriteContext } from "../../Context/FavoritesContext";
import Button from "../Button";
import { ButtonContent, FavoriteNumber, HeaderContainer, HeaderContent } from "./styles";

export default function Header() {
  const location = useLocation()
  const { isFavorite } = useContext(FavoriteContext)



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
              {isFavorite.length}
            </FavoriteNumber>
          </ButtonContent>

        </NavLink>

      </HeaderContent>
    </HeaderContainer>
  )
}