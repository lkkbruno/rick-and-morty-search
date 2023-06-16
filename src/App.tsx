import React from 'react';
import FindByCharacterPage from './findByCharacter.page';
import { RickAndMortyProvider } from './contexts/rickAndMorty';

const App: React.FC = () => {

  return (
    <RickAndMortyProvider>
      <FindByCharacterPage />
    </RickAndMortyProvider>
  );
};

export default App;
