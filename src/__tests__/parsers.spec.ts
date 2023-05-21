import { SpotifyEmbedUrl, Themes } from "../utils/enums";
import { uriParser, urlParser } from "../utils/parser";
import { describe, expect, it } from "vitest";

describe("URL Parser", () => {
  it("sholud return a formated (track) embed URL", () => {
    const parsed = urlParser("https://open.spotify.com/track/5mslcDXYQbmOFL6s031NvN");

    expect(parsed).toBe(`${SpotifyEmbedUrl.TRACK}5mslcDXYQbmOFL6s031NvN?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (artist) embed URL", () => {
    const parsed = urlParser("https://open.spotify.com/artist/10ZLWWtQcT81iBuVeGwlgO");

    expect(parsed).toBe(`${SpotifyEmbedUrl.ARTIST}10ZLWWtQcT81iBuVeGwlgO?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (album) embed URL", () => {
    const parsed = urlParser("https://open.spotify.com/album/7zFWWsc1JWT3hOypzEMak4");

    expect(parsed).toBe(`${SpotifyEmbedUrl.ALBUM}7zFWWsc1JWT3hOypzEMak4?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (playlist) embed URL", () => {
    const parsed = urlParser("https://open.spotify.com/playlist/2NdDBIGHUCu977yW5iKWQY");

    expect(parsed).toBe(`${SpotifyEmbedUrl.PLAYLIST}2NdDBIGHUCu977yW5iKWQY?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (show) embed URL", () => {
    const parsed = urlParser("https://open.spotify.com/show/3V5LBozjo4vNg2oJoA4Wb2"); // yes, Flow.

    expect(parsed).toBe(`${SpotifyEmbedUrl.SHOW}3V5LBozjo4vNg2oJoA4Wb2?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (episode) embed URL", () => {
    const parsed = urlParser("https://open.spotify.com/episode/5dpInH3tAoV8qFxURbXAEv");

    expect(parsed).toBe(`${SpotifyEmbedUrl.EPISODE}5dpInH3tAoV8qFxURbXAEv?theme=${Themes.LIGHT}`);
  });

  it("sholud return an empty string from URL builder", () => {
    const parsed = urlParser("https://open.spotify.com/");

    expect(parsed).toBe("");
  });

  it("sholud return an empty string from urlParser", () => {
    const parsed = urlParser("alkçsnfçalskdjslfj");

    expect(parsed).toBe("");
  });
});

describe("URI Parser", () => {
  it("sholud return a formated (track) embed URL", () => {
    const parsed = uriParser("spotify:track:5mslcDXYQbmOFL6s031NvN");

    expect(parsed).toBe(`${SpotifyEmbedUrl.TRACK}5mslcDXYQbmOFL6s031NvN?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (artist) embed URL", () => {
    const parsed = uriParser("spotify:artist:10ZLWWtQcT81iBuVeGwlgO");

    expect(parsed).toBe(`${SpotifyEmbedUrl.ARTIST}10ZLWWtQcT81iBuVeGwlgO?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (album) embed URL", () => {
    const parsed = uriParser("spotify:album:7zFWWsc1JWT3hOypzEMak4");

    expect(parsed).toBe(`${SpotifyEmbedUrl.ALBUM}7zFWWsc1JWT3hOypzEMak4?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (playlist) embed URL", () => {
    const parsed = uriParser("spotify:playlist:2NdDBIGHUCu977yW5iKWQY");

    expect(parsed).toBe(`${SpotifyEmbedUrl.PLAYLIST}2NdDBIGHUCu977yW5iKWQY?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (show) embed URL", () => {
    const parsed = uriParser("spotify:show:3V5LBozjo4vNg2oJoA4Wb2"); // yes, Flow.

    expect(parsed).toBe(`${SpotifyEmbedUrl.SHOW}3V5LBozjo4vNg2oJoA4Wb2?theme=${Themes.LIGHT}`);
  });

  it("sholud return a formated (episode) embed URL", () => {
    const parsed = uriParser("spotify:episode:5dpInH3tAoV8qFxURbXAEv"); // yes, again, Flow.

    expect(parsed).toBe(`${SpotifyEmbedUrl.EPISODE}5dpInH3tAoV8qFxURbXAEv?theme=${Themes.LIGHT}`);
  });

  it("sholud return an empty string from URI builder", () => {
    const parsed = uriParser("spotify");

    expect(parsed).toBe("");
  });

  it("sholud return an empty string from uriParser", () => {
    const parsed = uriParser("alkçsnfçalskdjslfj");

    expect(parsed).toBe("");
  });
});
