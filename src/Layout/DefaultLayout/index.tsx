import { Outlet } from "react-router";
import { LayoutDefaultContainer } from "./styles";

export default function defaultLayout() {
  return (
    <LayoutDefaultContainer>
      <h1>Default Layout</h1>

      <Outlet />
    </LayoutDefaultContainer>
  )
}