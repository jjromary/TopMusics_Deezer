import { useContext, useEffect } from "react";
import CardTrack from "../../Components/CardTrack";
import Loading from "../../Components/Loading";
import { Track, TracksContext } from "../../Context/TracksContext";
import { HomeContainer } from "./styles";

export default function Home({ }: Track) {
  const {
    tracks,
    setLimitPage,
    isLoading,
    fetchTrack,
    search,
    isVisibleSearchResult,
    isFavorite,
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
              <CardTrack key={resultFetch.id} track={resultFetch} />
            )
          })
        )}

        {search.length === 0 && (
          tracks.map((track) => {
            return (
              <CardTrack key={track.id} track={track} />
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