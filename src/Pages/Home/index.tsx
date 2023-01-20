import { useContext, useEffect } from "react";
import CardTrack from "../../Components/CardTrack";
import Loading from "../../Components/Loading";
import { TracksContext } from "../../Context/TracksContext";
import { HomeContainer } from "./styles";

export default function Home() {
  const {
    tracks,
    setLimitPage,
    isLoading,
    fetchTrack,
    search,
    isVisibleSearchResult,
  } = useContext(TracksContext)

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

        {isVisibleSearchResult && (
          fetchTrack.map((resultFetch) => {
            return (
              <CardTrack
                key={resultFetch.id}
                cover={resultFetch.album.cover}
                title={resultFetch.title}
                artist={resultFetch.artist.name}
                album={resultFetch.album.title}
                linkTrack={resultFetch.link}
                preview={resultFetch.preview}
                duration={resultFetch.duration}
              />
            )
          })
        )}

        {search.length === 0 && (
          tracks.map((track) => {
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
                duration={track.duration}
              />
            );
          })
        )}
        {!isLoading && <Loading />}

        {/* Limit for start infinite scroll */}
        <div id='limiter' style={{ marginTop: '1rem' }} />
      </HomeContainer>
    </>
  )
}