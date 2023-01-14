import { useContext } from "react";
import CardTrack from "../../Components/CardTrack";
import { TracksContext } from "../../Context/TracksContext";
import { HomeContainer } from "./styles";

export default function Home() {
  const { tracks } = useContext(TracksContext)

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