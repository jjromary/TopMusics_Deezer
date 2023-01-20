import { HeartStraight } from 'phosphor-react';
import { useState } from 'react';
import { FavoriteButton } from '../../Pages/Home/styles';
import Button from '../Button';
import Player from '../Player';
import {
  ArtistContent,
  ArtistDetails,
  BottomContent,
  ButtonContent,
  CardTrackContainer, PlayerContent, TopContent
} from "./styles";

interface CardTrackProps {
  artist: string;
  position?: number;
  album: string;
  title: string;
  cover: string;
  preview: string;
  linkTrack: string;
  duration: number;
  favorited?: false;
}

export default function CardTrack({
  position,
  album,
  cover,
  linkTrack,
  preview,
  artist,
  title,
  duration,
  favorited
}: CardTrackProps) {

  const durationTrack = Math.floor(duration / 60) + ':' + ('0' + Math.floor(duration % 60)).slice(-2);

  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <CardTrackContainer >
      <TopContent>
        <img src={cover} width={126} height={154} />
        <ArtistContent>
          <ArtistDetails>
            {position && <span><strong>Posição:</strong> {position}º</span>}
            <span><strong>Artista:</strong> {artist}</span>
            <span><strong>Título:</strong> {title} - {durationTrack}</span>
            <span><strong>Álbum:</strong> {album}</span>
          </ArtistDetails>

          <ButtonContent>
            <a target="_blank" href={linkTrack}>
              <Button
                height='40px'
                width='100%'
                background='#041418'
                colorText='#FFFFFF'
              >
                Acessar Música
              </Button>
            </a>
          </ButtonContent>
        </ArtistContent>
        <FavoriteButton onClick={handleFavorite}>
          <HeartStraight size={32} color={isFavorite === true ? "red" : '#121214'} />
        </FavoriteButton>

      </TopContent>

      <BottomContent>

        <PlayerContent>
          <Player linkPreview={preview} />
        </PlayerContent>

      </BottomContent>


    </CardTrackContainer>
  )
}