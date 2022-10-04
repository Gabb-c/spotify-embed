import { SpotifyEmbedUrl, SpotifyEmbedTypes, Themes } from './enums';

/**
 * @param embedType - The type of the embed
 * @param spotifyId - The Spotify resource ID
 * @returns The formated embed url
 */
const buildUrl = (embedType: string, spotifyId: string, theme?: 'light' | 'dark'): string => {
  const chosenTheme = theme === 'dark' ? Themes.DARK : Themes.LIGHT;
  switch (embedType) {
    case SpotifyEmbedTypes.ALBUM: {
      return SpotifyEmbedUrl.ALBUM + spotifyId + `?theme=${chosenTheme}`;
    }
    case SpotifyEmbedTypes.ARTIST: {
      return SpotifyEmbedUrl.ARTIST + spotifyId + `?theme=${chosenTheme}`;
    }
    case SpotifyEmbedTypes.EPISODE: {
      return SpotifyEmbedUrl.EPISODE + spotifyId + `?theme=${chosenTheme}`;
    }
    case SpotifyEmbedTypes.PLAYLIST: {
      return SpotifyEmbedUrl.PLAYLIST + spotifyId + `?theme=${chosenTheme}`;
    }
    case SpotifyEmbedTypes.SHOW: {
      return SpotifyEmbedUrl.SHOW + spotifyId + `?theme=${chosenTheme}`;
    }
    case SpotifyEmbedTypes.TRACK: {
      return SpotifyEmbedUrl.TRACK + spotifyId + `?theme=${chosenTheme}`;
    }
    default: {
      return '';
    }
  }
};

/**
 * @param url - The Spotify resource URL
 * @param theme - The embed theme
 * @returns The formated embed URL
 */
export const urlParser = (url: string, theme?: 'light' | 'dark'): string => {
  if (url.length === 0 || !url.startsWith('https://open.spotify.com/')) return '';
  const parsed = url.split('/');

  return buildUrl(parsed[3], parsed[4]?.split('?')[0], theme);
};

/**
 * @param uri - The Spotify resource URI
 * @param theme - The embed theme
 * @returns The formated embed url
 */
export const uriParser = (uri: string, theme?: 'light' | 'dark'): string => {
  if (uri.length === 0 || !uri.startsWith('spotify')) return '';

  const parsed = uri.split(':');

  return buildUrl(parsed[1], parsed[2], theme);
};
