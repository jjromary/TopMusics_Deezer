import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  width: string;
  height: string;
  background: string;
  imgUrl?: string;
  children: ReactNode;
  colorText: string;
}

export default function Button({ height, width, background, children, colorText }: ButtonProps) {
  return (
    <ButtonContainer height={height} width={width} background={background} colorText={colorText}>
      {children}
    </ButtonContainer>

  )
}