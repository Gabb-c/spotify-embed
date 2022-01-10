import React from 'react';
import { render, screen } from '@testing-library/react';

import { SpotifyEmbed } from '../components';

describe('Spotify Embed', () => {
  it('should render and be in the document', () => {
    render(<SpotifyEmbed src="https://open.spotify.com/track/5mslcDXYQbmOFL6s031NvN" />);

    const embed = screen.queryByLabelText('spotify-embed');

    expect(embed).toBeInTheDocument();
  });
});
