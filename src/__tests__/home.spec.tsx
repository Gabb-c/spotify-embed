import React from 'react';
import { render, screen } from '@testing-library/react';

import { Home } from '../components/home';

describe('Home', () => {
  it('should render the Home component', () => {
    render(<Home />);

    const embed = screen.queryByLabelText('spotify-embed');

    expect(embed).toBeInTheDocument();
  });
});
