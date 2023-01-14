import { useEffect, useState } from "react";
import CardTrack from "../../Components/CardTrack";
import { api } from "../../lib/axios";
import { HomeContainer } from "./styles";

interface TrackProps {
  id: number;
  position: number;
  album: {
    title: string;
  },
  artist: {
    name: string;
    picture: string;
  },
  title: string;
  preview: string;
  link: string;
  favorite?: boolean;
}



export default function Home() {

  const [tracks, setTracks] = useState<TrackProps[]>([])

  const topTracks = () => {
    api.get("chart/track/?limit=100").then((response) => {
      const myTracks = response.data.tracks;
      setTracks(myTracks.data)
    })
  }


  useEffect(() => {
    topTracks()
  }, [])

  console.log(tracks)

  return (
    <HomeContainer>

      {tracks.map((track) => {
        return (
          <CardTrack
            key={track.id}
            imgArtistUrl={track.artist.picture}
            title={track.title}
            artist={track.artist.name}
            album={track.album.title}
            linkTrack={track.link}
            preview={track.preview}
            position={track.position}
          />

        )
      })}

    </HomeContainer>
  )
}