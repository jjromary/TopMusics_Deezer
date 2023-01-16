
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button";
import { HeaderContainer, HeaderContent } from "./styles";

export default function Header() {
  const location = useLocation()



  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Músicas <span>by Deezer</span></h1>
        <NavLink to={location.pathname === '/' ? '/favorite' : location.pathname === "/favorite" ? '/' : ''} style={{ textDecoration: "none" }}>
          <Button
            height="50px"
            width="247px"
            background="#FFFFFF"
            colorText="#7C7C8A"
          >
            {location.pathname === '/' ? "Minhas Músicas Favoritas" : "Retorna a lista de Músicas"}
          </Button>
        </NavLink>

      </HeaderContent>
    </HeaderContainer>
  )
}