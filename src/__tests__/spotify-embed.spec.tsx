import { SpotifyEmbed } from "../components";
import { render, screen } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

describe("Spotify Embed", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render and be in the document (URL)", () => {
    render(<SpotifyEmbed src="https://open.spotify.com/track/5mslcDXYQbmOFL6s031NvN" />);

    const embed = screen.queryByLabelText("spotify-embed");

    expect(embed).toBeDefined();
  });

  it("should match snapshot (URL)", () => {
    render(<SpotifyEmbed src="https://open.spotify.com/track/5mslcDXYQbmOFL6s031NvN" />);

    const embed = screen.queryByLabelText("spotify-embed");

    expect(embed).toMatchSnapshot();
  });

  it("should render and be in the document (URI)", () => {
    render(<SpotifyEmbed src="spotify:track:5mslcDXYQbmOFL6s031NvN" />);

    const embed = screen.queryByLabelText("spotify-embed");

    expect(embed).toBeDefined();
  });

  it("should match snapshot (URI)", () => {
    render(<SpotifyEmbed src="spotify:track:5mslcDXYQbmOFL6s031NvN" />);

    const embed = screen.queryByLabelText("spotify-embed");

    expect(embed).toMatchSnapshot();
  });
});
