import { useContext, useEffect } from "react";
import CardTrack from "../../Components/CardTrack";
import Loading from "../../Components/Loading";
import { TracksContext } from "../../Context/TracksContext";
import { HomeContainer } from "./styles";

export default function Home() {
  const { tracks, search, setLimitPage, isLoading } = useContext(TracksContext)

  const lowerSearch = search.toLowerCase()

  const artistsFilter =
    tracks.filter((track) =>
      track.artist.name.toLowerCase().includes(lowerSearch) ||
      track.album.title.toLowerCase().includes(lowerSearch) ||
      track.title.toLowerCase().includes(lowerSearch)
    )

  const infiniteLoading = () => {
    const intersactionObserver = new IntersectionObserver((entries) => {

      if (entries.some((entry) => entry.isIntersecting)) {
        setLimitPage((setLimitPageInsiderState => setLimitPageInsiderState + 6))
      }
    });

    intersactionObserver.observe(document.querySelector('#limiter')!)

    return () => intersactionObserver.disconnect()
  }

  useEffect(() => {
    infiniteLoading()
  }, [])

  return (
    <>
      <HomeContainer>

        {artistsFilter.map((track) => {
          return (
            <CardTrack
              key={track.id}
              cover={track.album.cover}
              title={track.title}
              artist={track.artist.name}
              album={track.album.title}
              linkTrack={track.link}
              preview={track.preview}
              position={track.position}
              duration={track.duration} />
          );
        })}
        {!isLoading && <Loading />}
        <div id='limiter' style={{ marginTop: '2rem' }} />
      </HomeContainer>
    </>
  )
}