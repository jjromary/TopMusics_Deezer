import { useContext, useEffect } from "react";
import CardTrack from "../../Components/CardTrack";
import Loading from "../../Components/Loading";
import { SearchForm } from "../../Components/Search";
import { SearchContext } from "../../Context/SearchContext";
import { TracksContext } from "../../Context/TracksContext";
import { HomeContainer } from "./styles";

export default function Home() {
  const { tracks, setLimitPage, isLoading } = useContext(TracksContext)
  const { fetchTrack, search, isVisibleSearchResult } = useContext(SearchContext)

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
        <SearchForm />


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