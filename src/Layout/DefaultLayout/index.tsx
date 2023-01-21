import { ArrowUp } from "phosphor-react";
import { Outlet } from "react-router";
import Header from "../../Components/Header";
import { SearchForm } from "../../Components/Search";
import { BackToTop, LayoutDefaultContainer } from "./styles";

export default function defaultLayout() {


  return (
    <LayoutDefaultContainer >
      <div id="backToTop"></div>
      <Header />
      <SearchForm />

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