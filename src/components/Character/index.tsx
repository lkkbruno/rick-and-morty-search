import React, { useContext, useState, useEffect, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { RickAndMortyContext, ICharacter } from '../../contexts/rickAndMorty';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  width: 21vw;
  height: 170px;
  background-color: rgba(208, 208, 208, 0.916);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 0px 20px;
  margin: 20px 0px 20px 10px;

`;

const Image = styled.img`
  width: 150px;
  align-self: center;
`;

const Informations = styled.div`
padding-left: 15px;
`

const Name = styled.h2`
  color: #242424;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Information = styled.p`
  color: #242424;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: start;
`

interface CharacterProps {
    character: ICharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
    return (
        <Item key={character.id}>
            <Image src={character.image} alt={character.name} />
            <Informations>
                <Name>{character.name}</Name>
                <Information>{`Gender: ${character.gender}`}</Information>
                <Information>{`Status: ${character.status}`}</Information>
                <Information>{`Species: ${character.species}`}</Information>
            </Informations>
        </Item>
    );
};

export default Character;
