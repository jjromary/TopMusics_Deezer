
import Button from "../Button";
import { HeaderContainer, HeaderContent } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Top Músicas Brasil <span>by Deezer</span></h1>

        <Button
          height="50px"
          width="247px"
          background="#00875f"
          colorText="#FFFFFF"
        >
          Minhas Músicas Favoritas
        </Button>

      </HeaderContent>
    </HeaderContainer>
  )
}