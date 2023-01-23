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
  limitPage: number;
  isLoading: boolean;
  setTracks: Dispatch<SetStateAction<Track[]>>;
  setLimitPage: Dispatch<SetStateAction<number>>
  loadTracks: () => Promise<void>;
}
interface trackProviderProps {
  children: ReactNode
}

export const TracksContext = createContext({} as TrackContextType)

export function TrackProvider({ children }: trackProviderProps) {
  const [tracks, setTracks] = useState<Track[]>([])
  const [limitPage, setLimitPage] = useState(6)
  const [isLoading, setIsLoading] = useState(true)

  const loadTracks = async () => {
    const response = await api.get(`/`, {
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
      setLimitPage,
      setTracks,
      loadTracks,
    }}>
      {children}
    </TracksContext.Provider>
  )
}
