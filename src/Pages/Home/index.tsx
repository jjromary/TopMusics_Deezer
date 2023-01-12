import CardTrack from "../../Components/CardTrack";
import { SearchForm } from "../../Components/SearchForm";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <SearchForm />
      <CardTrack />
      <CardTrack />
      <CardTrack />
    </HomeContainer>
  )
}