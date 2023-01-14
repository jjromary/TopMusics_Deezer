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
  position: number;
  album: string;
  title: string;
  imgArtistUrl: string;
  preview: string;
  linkTrack: string;
}

export default function CardTrack({
  position,
  album,
  imgArtistUrl,
  linkTrack,
  preview,
  artist,
  title,
}: CardTrackProps) {
  const [favorite, setFavorite] = useState(Boolean)

  const handleFavorite = () => {
    if (favorite === false) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
  }

  return (
    <CardTrackContainer >
      <TopContent>
        <img src={imgArtistUrl} width={126} height={154} />
        <ArtistContent>
          <ArtistDetails>
            <span><strong>Posição:</strong> {position}º</span>
            <span><strong>Artista:</strong> {artist}</span>
            <span><strong>Título:</strong> {title}</span>
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
          <HeartStraight size={32} color={favorite === true ? "red" : '#121214'} />
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