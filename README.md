# spotify-embed

A plug-n-play Spotify Embed Component. An easy way to use Spotify Embeds with just the resource URL/URI.
You can create Embeds for **albums, tracks, artists, or playlists**.

When a logged-in Spotify user clicks the button, the music starts playing in the Spotify player.
For users who are not logged in on their Spotify account, the Spotify Embed plays a 30-second long audio preview,
and then the users are prompted to either login or to sign up.

> [Spotify Widgets Documentation](https://developer.spotify.com/documentation/widgets/guides/adding-a-spotify-embed/)

## Features

- Lightweight
- Native URL/URI parsing
- Configurable size (default, compact and custom)
- Light and Dark themes

## Installation

NPM

```bash
$ npm install spotify-embed
```

Yarn

```bash
$ yarn add spotify-embed
```

## Basic Usage

```js
import React from 'react';
import { SpotifyEmbed } from 'spotify-embed'; // import the SpotifyEmbed component

function App() {
  return (
    <>
      <SpotifyEmbed src="someTrackURL" /> {/* pass an spotify resource URL/URI */}
    </>
  );
}

export default App;
```

## Documentation

Link to documentation

## Contributing

1. [Read the Code of Conduct](https://github.com/Gabb-c/spotify-embed/blob/main/.github/CODE_OF_CONDUCT.md)
2. [Read the Development Process](https://github.com/Gabb-c/spotify-embed/blob/main/.github/CONTRIBUTING.md)
3. [Read the Logging Issues & Features](https://github.com/Gabb-c/spotify-embed/issues)

## Leave your feedback

- Did you like spotify-embed? [Give us a star ⭐](https://github.com/Gabb-c/spotify-embed)
- Found a problem? Let us know by [creating an issue 🔎](https://github.com/Gabb-c/spotify-embed/issues)
- Want to contribute? Follow the [Development Guide 📑](https://github.com/Gabb-c/spotify-embed/blob/main/.github/CONTRIBUTING.md)

## Donate

Please consider donating if you think spotify-embed is helpful to you or that my work is valuable. I am happy if you can buy me a coffee ❤️

<a href="https://www.buymeacoffee.com">
  <img alt="bmc-button" src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black">
</a>
<a href="https://ko-fi.com">
  <img alt="kofi-button" src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white">
</a>
<a href="https://www.paypal.com/donate?business=8TYDGB7874HT2&no_recurring=0&item_name=development&currency_code=USD">
  <img alt="paypal-button" src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white">
</a>
