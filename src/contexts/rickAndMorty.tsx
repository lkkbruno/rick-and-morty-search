import React, { createContext, useState, useEffect, PropsWithChildren } from 'react';
import axios from 'axios';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface RickAndMortyContextData {
  characters: ICharacter[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const RickAndMortyContext = createContext<RickAndMortyContextData>({
  characters: [],
  searchTerm: '',
  setSearchTerm: () => { },
});

export const RickAndMortyProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character`, {
        params: {
          name: searchTerm,
        }
      })
      .then((response) => {
        setCharacters(response.data.results);
      }).catch(() => {
        setCharacters([]);
      });
  }

  useEffect(() => {
    fetchCharacters();
  }, [searchTerm]);

  return (
    <RickAndMortyContext.Provider value={{ characters, searchTerm, setSearchTerm }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};
