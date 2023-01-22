import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Track } from "./TracksContext";

interface favoriteContextType {
  isFavorite: Track[];
  setIsFavorite: Dispatch<SetStateAction<Track[]>>;
}

interface favoriteProviderProps {
  children: ReactNode;
}

export const FavoriteContext = createContext({} as favoriteContextType)

export function FavoriteProvider({ children }: favoriteProviderProps) {
  const [isFavorite, setIsFavorite] = useState<Track[]>([])

  return (
    <FavoriteContext.Provider value={{
      isFavorite,
      setIsFavorite,
    }}>
      {children}
    </FavoriteContext.Provider>
  )
}