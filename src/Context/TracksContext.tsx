import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Track {
  id: number;
  position: number;
  title: string;
  preview: string;
  link: string;
  duration: number;
  album: {
    title: string;
    cover: string;
  },
  artist: {
    name: string;
  },
}

interface TrackContextType {
  tracks: Track[];
  fetchTrack: Track[];
  limitPage: number;
  isLoading: boolean;
  search: string;
  isVisibleSearchResult: boolean;
  setisVisibleSearchResult: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setTracks: Dispatch<SetStateAction<Track[]>>;
  setLimitPage: Dispatch<SetStateAction<number>>
  setFetchTrack: Dispatch<SetStateAction<Track[]>>

  loadTracks: () => Promise<void>;
}
interface trackProviderProps {
  children: ReactNode
}

export const TracksContext = createContext({} as TrackContextType)

export function TrackProvider({ children }: trackProviderProps) {
  const [tracks, setTracks] = useState<Track[]>([])
  const [fetchTrack, setFetchTrack] = useState<Track[]>([])
  const [search, setSearch] = useState('')
  const [isVisibleSearchResult, setisVisibleSearchResult] = useState(false)
  const [limitPage, setLimitPage] = useState(6)
  const [isLoading, setIsLoading] = useState(true)

  const loadTracks = async () => {
    const response = await api.get(`chart/track/`, {
      params: {
        limit: limitPage,
      }
    })
    setTracks(response.data.tracks.data)
  }

  useEffect(() => {
    loadTracks()
    setIsLoading(false)
  }, [limitPage])

  return (
    <TracksContext.Provider value={{
      tracks,
      limitPage,
      isLoading,
      fetchTrack,
      search,
      isVisibleSearchResult,
      setisVisibleSearchResult,
      setSearch,
      setFetchTrack,
      setLimitPage,
      setTracks,
      loadTracks,
    }}>
      {children}
    </TracksContext.Provider>
  )
}