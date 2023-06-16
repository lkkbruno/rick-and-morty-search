import React, { useContext } from 'react';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import { RickAndMortyContext } from './contexts/rickAndMorty';

const FindByCharacterPage: React.FC = () => {
  const { characters, searchTerm, setSearchTerm } = useContext(RickAndMortyContext);

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default FindByCharacterPage;
