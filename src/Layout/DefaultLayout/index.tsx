import { Outlet } from "react-router";
import Header from "../../Components/Header";
import { LayoutDefaultContainer } from "./styles";

export default function defaultLayout() {
  return (
    <LayoutDefaultContainer>
      <Header />

      <Outlet />
    </LayoutDefaultContainer>
  )
}