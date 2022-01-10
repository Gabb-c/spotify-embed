import { SpotifyEmbedUrl, SpotifyEmbedTypes } from './enums';

/**
 * @param embedType - The type of the embed
 * @param spotifyId - The Spotify resource ID
 * @returns The formated embed url
 */
const buildUrl = (embedType: string, spotifyId: string): string => {
  switch (embedType) {
    case SpotifyEmbedTypes.ALBUM:
      return SpotifyEmbedUrl.ALBUM + spotifyId;
    case SpotifyEmbedTypes.ARTIST:
      return SpotifyEmbedUrl.ARTIST + spotifyId;
    case SpotifyEmbedTypes.EPISODE:
      return SpotifyEmbedUrl.EPISODE + spotifyId;
    case SpotifyEmbedTypes.PLAYLIST:
      return SpotifyEmbedUrl.PLAYLIST + spotifyId;
    case SpotifyEmbedTypes.SHOW:
      return SpotifyEmbedUrl.SHOW + spotifyId;
    case SpotifyEmbedTypes.TRACK:
      return SpotifyEmbedUrl.TRACK + spotifyId;
    default:
      return '';
  }
};

/**
 * @param url - The Spotify resource URL
 * @returns The formated embed URL
 */
export const urlParser = (url: string): string => {
  if (url.length === 0 || !url.startsWith('https://open.spotify.com/')) return '';

  const parsed = url.split('/');

  return buildUrl(parsed[3], parsed[4]);
};

/**
 * @param uri - The Spotify resource URI
 * @returns The formated embed url
 */
export const uriParser = (uri: string): string => {
  if (uri.length === 0 || !uri.startsWith('spotify')) return '';

  const parsed = uri.split(':');

  return buildUrl(parsed[1], parsed[2]);
};
