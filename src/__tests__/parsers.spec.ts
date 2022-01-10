import { uriParser, urlParser } from '../utils/parser';
import { SpotifyEmbedUrl } from '../utils/enums';

describe('URL Parser', () => {
  it('sholud return a formated (track) embed URL', () => {
    const parsed = urlParser('https://open.spotify.com/track/5mslcDXYQbmOFL6s031NvN');

    expect(parsed).toBe(SpotifyEmbedUrl.TRACK + '5mslcDXYQbmOFL6s031NvN');
  });

  it('sholud return a formated (artist) embed URL', () => {
    const parsed = urlParser('https://open.spotify.com/artist/10ZLWWtQcT81iBuVeGwlgO');

    expect(parsed).toBe(SpotifyEmbedUrl.ARTIST + '10ZLWWtQcT81iBuVeGwlgO');
  });

  it('sholud return a formated (album) embed URL', () => {
    const parsed = urlParser('https://open.spotify.com/album/7zFWWsc1JWT3hOypzEMak4');

    expect(parsed).toBe(SpotifyEmbedUrl.ALBUM + '7zFWWsc1JWT3hOypzEMak4');
  });

  it('sholud return a formated (playlist) embed URL', () => {
    const parsed = urlParser('https://open.spotify.com/playlist/2NdDBIGHUCu977yW5iKWQY');

    expect(parsed).toBe(SpotifyEmbedUrl.PLAYLIST + '2NdDBIGHUCu977yW5iKWQY');
  });

  it('sholud return a formated (show) embed URL', () => {
    const parsed = urlParser('https://open.spotify.com/show/3V5LBozjo4vNg2oJoA4Wb2'); // yes, Flow.

    expect(parsed).toBe(SpotifyEmbedUrl.SHOW + '3V5LBozjo4vNg2oJoA4Wb2');
  });

  it('sholud return a formated (episode) embed URL', () => {
    const parsed = urlParser('https://open.spotify.com/episode/5dpInH3tAoV8qFxURbXAEv'); // yes, again, Flow.

    expect(parsed).toBe(SpotifyEmbedUrl.EPISODE + '5dpInH3tAoV8qFxURbXAEv');
  });
});

describe('URI Parser', () => {
  it('sholud return a formated (track) embed URL', () => {
    const parsed = uriParser('spotify:track:5mslcDXYQbmOFL6s031NvN');

    expect(parsed).toBe(SpotifyEmbedUrl.TRACK + '5mslcDXYQbmOFL6s031NvN');
  });

  it('sholud return a formated (artist) embed URL', () => {
    const parsed = uriParser('spotify:artist:10ZLWWtQcT81iBuVeGwlgO');

    expect(parsed).toBe(SpotifyEmbedUrl.ARTIST + '10ZLWWtQcT81iBuVeGwlgO');
  });

  it('sholud return a formated (album) embed URL', () => {
    const parsed = uriParser('spotify:album:7zFWWsc1JWT3hOypzEMak4');

    expect(parsed).toBe(SpotifyEmbedUrl.ALBUM + '7zFWWsc1JWT3hOypzEMak4');
  });

  it('sholud return a formated (playlist) embed URL', () => {
    const parsed = uriParser('spotify:playlist:2NdDBIGHUCu977yW5iKWQY');

    expect(parsed).toBe(SpotifyEmbedUrl.PLAYLIST + '2NdDBIGHUCu977yW5iKWQY');
  });

  it('sholud return a formated (show) embed URL', () => {
    const parsed = uriParser('spotify:show:3V5LBozjo4vNg2oJoA4Wb2'); // yes, Flow.

    expect(parsed).toBe(SpotifyEmbedUrl.SHOW + '3V5LBozjo4vNg2oJoA4Wb2');
  });

  it('sholud return a formated (episode) embed URL', () => {
    const parsed = uriParser('spotify:episode:5dpInH3tAoV8qFxURbXAEv'); // yes, again, Flow.

    expect(parsed).toBe(SpotifyEmbedUrl.EPISODE + '5dpInH3tAoV8qFxURbXAEv');
  });
});
