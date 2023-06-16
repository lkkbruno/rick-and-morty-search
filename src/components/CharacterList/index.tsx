import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { RickAndMortyContext, ICharacter } from '../../contexts/rickAndMorty';
import Character from '../Character';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface CharacterListProps {
  characters: ICharacter[],
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const { searchTerm } = useContext(RickAndMortyContext);
  const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>(characters);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [characters, searchTerm]);

  return (
    <List>
      {filteredCharacters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </List>
  );
};

export default CharacterList;
