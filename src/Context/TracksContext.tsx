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
  },
  artist: {
    name: string;
    picture: string;
  },
}

interface TrackContextType {
  tracks: Track[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
interface trackProviderProps {
  children: ReactNode
}

export const TracksContext = createContext({} as TrackContextType)

export function TrackProvider({ children }: trackProviderProps) {
  const [tracks, setTracks] = useState<Track[]>([])
  const [search, setSearch] = useState('')

  console.log(tracks)

  const loadTracks = () => {
    api.get("chart/track/?limit=100").then((response) => {
      const myTracks = response.data.tracks;
      setTracks(myTracks.data)
    })
  }

  useEffect(() => {
    loadTracks()
  }, [])


  return (
    <TracksContext.Provider value={{ tracks, search, setSearch }}>
      {children}
    </TracksContext.Provider>
  )
}