import { Outlet } from "react-router";
import Header from "../../Components/Header";
import { SearchForm } from "../../Components/SearchForm";
import { LayoutDefaultContainer } from "./styles";

export default function defaultLayout() {
  return (
    <LayoutDefaultContainer>
      <Header />
      <SearchForm />

      <Outlet />
    </LayoutDefaultContainer>
  )
}