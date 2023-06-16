import React, { ChangeEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { RickAndMortyContext } from '../../contexts/rickAndMorty';
// @ts-ignore
import logo from '../../assets/rickAndMortyLogo.png';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const Logo = styled.img`
  width: 40%;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 88vw;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 400;
  padding: 4px 50px;
`;

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState<string>(searchTerm);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setInputValue(newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  return (
    <Container>
      <Logo src={logo} alt="Rick and Morty" />
      <SearchInput
        type="text"
        placeholder="Search characters by name"
        value={inputValue}
        onChange={handleSearchTermChange}
        data-testid="search-input"
      />
    </Container>
  );
};

export default Header;
