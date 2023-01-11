import { Route, Routes } from "react-router";
import DefaultLayout from "./Layout/DefaultLayout";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  )
}