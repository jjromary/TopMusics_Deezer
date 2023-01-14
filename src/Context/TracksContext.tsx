import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Track {
  id: number;
  position: number;
  album: {
    title: string;
  },
  artist: {
    name: string;
    picture: string;
  },
  title: string;
  preview: string;
  link: string;
}

interface TrackContextType {
  tracks: Track[];
}


interface trackProviderProps {
  children: ReactNode
}

export const TracksContext = createContext({} as TrackContextType)

export function TrackProvider({ children }: trackProviderProps) {

  const [tracks, setTracks] = useState<Track[]>([])

  const topTracks = () => {
    api.get("chart/track/?limit=100").then((response) => {
      const myTracks = response.data.tracks;
      setTracks(myTracks.data)
    })
  }

  useEffect(() => {
    topTracks()
  }, [])


  return (
    <TracksContext.Provider value={{ tracks }}>
      {children}
    </TracksContext.Provider>
  )
}