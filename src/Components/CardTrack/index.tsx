import { HeartStraight } from 'phosphor-react';
import artist from '../../assets/artist.jpg';
import Button from '../Button';
import Play from '../Play';
import { ArtistContent, ArtistDetails, ButtonsContent, CardTrackContainer } from "./styles";

export default function CardTrack() {
  return (
    <CardTrackContainer>
      <ArtistContent>
        <img src={artist} width={85.07} height={83} />
        <ArtistDetails>
          <span><strong>Artista:</strong> Marilia Mendonça</span>
          <span><strong>Título:</strong> Leão</span>
          <span><strong>Álbum:</strong> Decretos Reais vl 2</span>
        </ArtistDetails>

      </ArtistContent>

      <Play />

      <ButtonsContent>
        <Button
          height='50px'
          width='170px'
          background='#FFFFFF'
          colorText='#1EA483'
        >
          Acessar Música
        </Button>

        <Button
          height='50px'
          width='130px'
          background='#FFFFFF'
          colorText='#1EA483'
        >
          Favoritar
          <HeartStraight size={24} />
        </Button>
      </ButtonsContent>

    </CardTrackContainer>
  )
}