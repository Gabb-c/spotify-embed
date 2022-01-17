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
  /**
   * The Spotify resource URL/URI
   * ( track | playlist | album | artist | show | episode )
   */
  src?: string;
}

/**
 * ## Spotfy Embed
 * @param props - Spotify embed properties
 * @returns The Spotify embed
 * @see https://developer.spotify.com/documentation/widgets/
 */
export const SpotifyEmbed: React.FC<SpotifyEmbedProps> = (props): JSX.Element => {
  const { size = 'default', src = '', width = Default.WIDTH, height = Default.HEIGHT } = props;

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

// storybook default props
SpotifyEmbed.defaultProps = {
  size: 'default',
  src: '',
  width: Default.WIDTH,
  height: Default.HEIGHT,
};
