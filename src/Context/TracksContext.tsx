import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Track {
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
  search: string;
  limitPage: number;
  isLoading: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  setLimitPage: Dispatch<SetStateAction<number>>
  loadTracks: () => Promise<void>;
}
interface trackProviderProps {
  children: ReactNode
}

export const TracksContext = createContext({} as TrackContextType)

export function TrackProvider({ children }: trackProviderProps) {
  const [tracks, setTracks] = useState<Track[]>([])
  const [search, setSearch] = useState('')
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
    setTimeout(() => {
      console.log("isLoading", isLoading)
      loadTracks()
      setIsLoading(false)
      console.log(tracks)
    }, 1000)
  }, [limitPage])


  return (
    <TracksContext.Provider value={{
      tracks,
      search,
      limitPage,
      isLoading,
      setSearch,
      setLimitPage,
      loadTracks,
    }}>
      {children}
    </TracksContext.Provider>
  )
}