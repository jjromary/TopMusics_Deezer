import "styled-components";
import { defaultTheme } from "../Styles/Themes/defaultTheme";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
