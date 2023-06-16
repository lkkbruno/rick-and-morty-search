import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { RickAndMortyProvider } from '../contexts/rickAndMorty';
import Header from '../components/Header';
import CharacterList from '../components/CharacterList';

describe('Header', () => {
  it('should match snapshot', async () => {
    const { container } = render(<Header searchTerm='' setSearchTerm={() => { }} />)
    expect(container).toMatchSnapshot();
  })
  it('renders the logo', () => {
    const { getByAltText } = render(
      <Header searchTerm='' setSearchTerm={() => { }} />
    );

    expect(getByAltText(/Rick and Morty/i)).toBeInTheDocument();
  });

  it('renders the search input', () => {
    const { getByTestId } = render(
      <Header searchTerm='' setSearchTerm={() => { }} />
    );

    expect(getByTestId('search-input')).toBeInTheDocument();
  });

  it('updates the search term on input change ', async () => {
    const { getByPlaceholderText, findByText } = render(
      <Header searchTerm='' setSearchTerm={() => { }} />
    );

    const input = getByPlaceholderText(/search characters by name/i);

    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: 'Rick' } });
    expect(input).toHaveValue('Rick');
  });
});
