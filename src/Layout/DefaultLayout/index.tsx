import { ArrowUp } from "phosphor-react";
import { Outlet } from "react-router";
import Header from "../../Components/Header";
import { BackToTop, LayoutDefaultContainer } from "./styles";

export default function defaultLayout() {


  return (
    <LayoutDefaultContainer >
      <div id="backToTop"></div>
      <Header />

      <BackToTop href="#backToTop">
        <ArrowUp size={32} />
        <button >
          Back to top
        </button>
      </BackToTop>
      <Outlet />
    </LayoutDefaultContainer>
  )
}