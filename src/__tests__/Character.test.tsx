import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import CharacterList from '../components/CharacterList';
import { ICharacter, RickAndMortyProvider } from '../contexts/rickAndMorty';
import Character from '../components/Character';

const character: ICharacter = {
    id: 1,
    name: 'Ricky Sanchez Test',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
        'https://rickandmortyapi.com/api/episode/1',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
}


describe('CharacterList', () => {
    it('should match snapshot', async () => {
        const { container } = render(<Character character={character} />)
        expect(container).toMatchSnapshot();
    })

    it('should render a card of character and contain the text', async () => {
        render(<Character character={character} />);
        await waitFor(() => expect(screen.getByText('Ricky Sanchez Test')).toBeInTheDocument());
    });
});
