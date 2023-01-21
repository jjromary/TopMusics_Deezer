import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FavoriteProvider } from "./Context/FavoritesContext";
import { TrackProvider } from "./Context/TracksContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/Themes/defaultTheme";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TrackProvider>
          <FavoriteProvider>
            <Router />
          </FavoriteProvider>
        </TrackProvider>
        <GlobalStyles />
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
