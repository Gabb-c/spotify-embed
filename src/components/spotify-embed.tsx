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
  /**
   * The embed theme
   * @defaultValue 'light'
   */
  theme?: 'light' | 'dark';
}

/**
 * ## Spotfy Embed
 * @param props - Spotify embed properties
 * @returns The Spotify embed
 * @see https://developer.spotify.com/documentation/widgets/
 */
export const SpotifyEmbed: React.FC<SpotifyEmbedProps> = (props): JSX.Element => {
  const {
    size = 'default',
    src = '',
    width = Default.WIDTH,
    height = Default.HEIGHT,
    theme = 'light',
  } = props;

  return (
    <>
      <iframe
        {...props}
        src={urlParser(src) === '' ? uriParser(src, theme) : urlParser(src, theme)}
        width={size === 'default' ? Default.WIDTH : size === 'custom' ? width : Compact.WIDTH}
        height={size === 'default' ? Default.HEIGHT : size === 'custom' ? height : Compact.HEIGHT}
        frameBorder="0"
        aria-label="spotify-embed"
        allow="autoplay; transparency; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
  theme: 'light',
};
