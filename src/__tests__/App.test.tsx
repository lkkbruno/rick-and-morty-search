import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('CharacterList', () => {
  it('should match snapshot', async () => {
    const { container } = render(
      <App />
    );

    expect(container).toMatchSnapshot();
  });
});
