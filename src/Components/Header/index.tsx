import { ButtonContainer } from "../Button/styles";

import { HeaderContainer, HeaderContent } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Top Músicas Brasil <span>by Deezer</span></h1>

        <ButtonContainer
          height="50px"
          width="247px"
          background="#00875f"
        >
          Minhas Músicas Favoritas

        </ButtonContainer>

      </HeaderContent>
    </HeaderContainer>
  )
}