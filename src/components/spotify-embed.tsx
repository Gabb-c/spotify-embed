import React from 'react';
import { Default, Compact, urlParser, uriParser } from '../utils';

export interface SpotifyEmbedProps
  extends Omit<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    'allow-transparency' | 'frameBorder' | 'aria-label' | 'allow'
  > {
  /**
   * The size of the embed
   * @defaultValue 'default'
   */
  size?: 'default' | 'compact' | 'custom';
}

/**
 * ## Spotfy Embed
 * Supports:
 * - Track
 * - Playlist
 * - Album
 * - Artist
 * - Show
 * - Episode
 * @param {SpotifyEmbedProps} props Spotify embed properties
 * @returns {JSX.Element} The Spotify embed
 * @see https://developer.spotify.com/documentation/widgets/
 */
export const SpotifyEmbed: React.FC<SpotifyEmbedProps> = (props): JSX.Element => {
  const { size = 'default', src = '', width, height } = props;

  return (
    <>
      <iframe
        {...props}
        src={urlParser(src) === '' ? uriParser(src) : urlParser(src)}
        width={size === 'default' ? Default.WIDTH : size === 'custom' ? width : Compact.WIDTH}
        height={size === 'default' ? Default.HEIGHT : size === 'custom' ? height : Compact.HEIGHT}
        frameBorder="0"
        allow-transparency="true"
        aria-label="spotify-embed"
        allow="encrypted-media"
      />
    </>
  );
};
