import { useContext } from "react";
import CardTrack from "../../Components/CardTrack";
import { TracksContext } from "../../Context/TracksContext";
import { HomeContainer } from "./styles";

export default function Home() {
  const { tracks, search } = useContext(TracksContext)

  const lowerSearch = search.toLowerCase()

  const artistsFilter =
    tracks.filter((track) =>
      track.artist.name.toLowerCase().includes(lowerSearch) ||
      track.album.title.toLowerCase().includes(lowerSearch) ||
      track.title.toLowerCase().includes(lowerSearch)
    )

  return (
    <HomeContainer>

      {artistsFilter.map((track) => {
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
            duration={track.duration}
          />
        )
      })}

    </HomeContainer>
  )
}