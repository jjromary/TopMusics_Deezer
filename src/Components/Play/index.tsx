import sample from '../../assets/sample.mp3';
import { PlayContainer } from "./styles";


export default function Play() {
  return (
    <PlayContainer>
      <audio controls>
        <source src={sample} type="audio/mp3" />
        seu navegador não suporta HTML5
      </audio>

    </PlayContainer>

  )
}