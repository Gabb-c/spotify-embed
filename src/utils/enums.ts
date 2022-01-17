/** List of available embed spotify URL's */
export enum SpotifyEmbedUrl {
  TRACK = 'https://open.spotify.com/embed/track/',
  ALBUM = 'https://open.spotify.com/embed/album/',
  PLAYLIST = 'https://open.spotify.com/embed/playlist/',
  ARTIST = 'https://open.spotify.com/embed/artist/',
  SHOW = 'https://open.spotify.com/embed/show/',
  EPISODE = 'https://open.spotify.com/embed/episode/',
}

export enum SpotifyEmbedTypes {
  TRACK = 'track',
  ALBUM = 'album',
  PLAYLIST = 'playlist',
  ARTIST = 'artist',
  SHOW = 'show',
  EPISODE = 'episode',
}

export enum Default {
  WIDTH = 300,
  HEIGHT = 380,
}

export enum Compact {
  WIDTH = 300,
  HEIGHT = 80,
}

export enum Themes {
  LIGHT = '1',
  DARK = '0',
}
