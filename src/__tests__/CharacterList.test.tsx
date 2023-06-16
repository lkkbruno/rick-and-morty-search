import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import CharacterList from '../components/CharacterList';
import { ICharacter, RickAndMortyProvider, RickAndMortyContext } from '../contexts/rickAndMorty';
import { rest } from 'msw';
import { server } from './mocks/setupServer';
import { mockCharactersList } from './mocks/characters'

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CharacterList', () => {
  it('should match snapshot', async () => {
    const { container } = render(<CharacterList characters={mockCharactersList} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a list of characters', async () => {
    render(
      <CharacterList characters={mockCharactersList} />
    );

    await waitFor(() => expect(screen.getByText('Rick Sanchez')).toBeInTheDocument());
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });
});
