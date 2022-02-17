import * as ENUMS from '../utils/enums';

describe('Sizes', () => {
  it('Compact enum should match snapshot', () => {
    expect(ENUMS.Compact).toMatchSnapshot();
  });

  it('Default enum should match snapshot', () => {
    expect(ENUMS.Default).toMatchSnapshot();
  });
});

describe("Embed Types and URL's", () => {
  it('SpotifyEmbedTypes enum should match snapshot', () => {
    expect(ENUMS.SpotifyEmbedTypes).toMatchSnapshot();
  });

  it('SpotifyEmbedUrl enum should match snapshot', () => {
    expect(ENUMS.SpotifyEmbedUrl).toMatchSnapshot();
  });
});

describe('Embed Themes', () => {
  it('SpotifyEmbedTypes enum should match snapshot', () => {
    expect(ENUMS.Themes).toMatchSnapshot();
  });
});
