
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button";
import { HeaderContainer, HeaderContent } from "./styles";

export default function Header() {
  const location = useLocation()



  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Top Músicas Brasil <span>by Deezer</span></h1>
        <NavLink to={location.pathname === '/' ? '/favorite' : location.pathname === "/favorite" ? '/' : ''} style={{ textDecoration: "none" }}>

          <Button
            height="50px"
            width="247px"
            background="#00875f"
            colorText="#FFFFFF"
          >
            {location.pathname === '/' ? "Minhas Músicas Favoritas" : "Lista Top Músicas"}
          </Button>
        </NavLink>

      </HeaderContent>
    </HeaderContainer>
  )
}