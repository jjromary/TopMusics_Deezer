import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../lib/axios";
import { Track } from "./TracksContext";
interface searchContextType {
  fetchTrack: Track[];
  search: string;
  isVisibleSearchResult: boolean;
  setisVisibleSearchResult: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setFetchTrack: Dispatch<SetStateAction<Track[]>>
  loadFetchTrack: (e: React.FormEvent) => Promise<void>;
}
interface searchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as searchContextType)

export function SearchProvider({ children }: searchProviderProps) {
  const [search, setSearch] = useState('')
  const [fetchTrack, setFetchTrack] = useState<Track[]>([])
  const [isVisibleSearchResult, setisVisibleSearchResult] = useState(false)

  const loadFetchTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await api.get('/search/track', {
      params: {
        q: search,
      }
    })
    setisVisibleSearchResult(true)
    setFetchTrack(response.data.data)
  }

  useEffect(() => {
    if (search.length === 0) {
      < Navigate to="/home" replace={true} />
      setisVisibleSearchResult(false)
    }
  }, [search])

  return (
    <SearchContext.Provider value={{
      fetchTrack,
      search,
      isVisibleSearchResult,
      setisVisibleSearchResult,
      setSearch,
      setFetchTrack,
      loadFetchTrack,
    }}>
      {children}
    </SearchContext.Provider>
  )
}
