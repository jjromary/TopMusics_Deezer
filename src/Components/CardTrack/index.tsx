import { HeartStraight } from 'phosphor-react';
import { useContext } from 'react';
import { Track, TracksContext } from '../../Context/TracksContext';
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
  track: Track;
}

export default function CardTrack({ track }: CardTrackProps) {
  const { setIsFavorite, isFavorite } = useContext(TracksContext)

  const durationTrack = Math.floor(track.duration / 60) + ':' + ('0' + Math.floor(track.duration % 60)).slice(-2);

  const handleAddFavorite = () => {
    setIsFavorite([track, ...isFavorite])

  }

  const handleRemoveFavorite = () => {
    setIsFavorite(isFavorite.filter((favorite) => favorite.title !== track.title))
  }

  const verifyFavorite = isFavorite.some((favorite) => favorite.title === track.title)

  return (
    <CardTrackContainer >
      <TopContent>
        <img src={track.album.cover} width={126} height={154} />
        <ArtistContent>
          <ArtistDetails>
            {track.position && <span><strong>Posição:</strong> {track.position}º</span>}
            <span><strong>Artista:</strong> {track.artist.name}</span>
            <span><strong>Título:</strong> {track.title} - {durationTrack}</span>
            <span><strong>Álbum:</strong> {track.album.title}</span>
          </ArtistDetails>

          <ButtonContent>
            <a target="_blank" href={track.link}>
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
        <FavoriteButton onClick={verifyFavorite ? handleRemoveFavorite : handleAddFavorite}>
          <HeartStraight size={32} color={verifyFavorite ? 'red' : 'black'} />
        </FavoriteButton>

      </TopContent>

      <BottomContent>

        <PlayerContent>
          <Player linkPreview={track.preview} />
        </PlayerContent>

      </BottomContent>


    </CardTrackContainer>
  )
}