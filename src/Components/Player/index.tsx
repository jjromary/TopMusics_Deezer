import { PlayContainer } from "./styles";

interface PlayerProps {
  linkPreview: string;
}

export default function Player({ linkPreview }: PlayerProps) {
  return (
    <PlayContainer>
      <audio controls >
        <source src={linkPreview} type="audio/mp3" />
        seu navegador não suporta HTML5
      </audio>

    </PlayContainer>

  )
}