import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  width: string;
  height: string;
  background: string;
  imgUrl: string;
}

export default function Button({ height, width, background, imgUrl }: ButtonProps) {
  return (
    <ButtonContainer height={height} width={width} background={background} >
    </ButtonContainer>

  )
}