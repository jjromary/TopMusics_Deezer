import axios from 'axios';
import { HeartStraight } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from '../../Context/FavoritesContext';
import { Track } from '../../Context/TracksContext';
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
  const { setIsFavorite, isFavorite } = useContext(FavoriteContext)
  const [verifyExist, setVerifyExist] = useState(false);

  const durationTrack = Math.floor(track.duration / 60) + ':' + ('0' + Math.floor(track.duration % 60)).slice(-2);

  const handleAddFavorite = () => {
    if (verifyExist === false) {
      setIsFavorite([track, ...isFavorite])
      axios.post("http://localhost:5000/favorites", track)
    } else {
      console.log("ja existe")
    }
  }

  const handleRemoveFavorite = () => {
    setIsFavorite(isFavorite.filter((favorite) => favorite.title !== track.title))
    axios.delete(`http://localhost:5000/favorites/${track.id}`)
    verifyFavorite()
  }

  const verifyFavorite = () => {
    if (isFavorite.some((favorite) => favorite.id === track.id)) {
      setVerifyExist(true)
    } else {
      setVerifyExist(false)
    }
  }


  useEffect(() => {
    verifyFavorite()
  }, [isFavorite])

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
        <FavoriteButton onClick={!verifyExist ? handleAddFavorite : handleRemoveFavorite}>
          <HeartStraight size={32} color={''} />
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