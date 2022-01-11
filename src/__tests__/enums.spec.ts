import { Compact, Default, SpotifyEmbedTypes, SpotifyEmbedUrl } from '../utils/enums';

describe('Sizes', () => {
  it('Compact enum should match snapshot', () => {
    expect(Compact).toMatchSnapshot();
  });

  it('Default enum should match snapshot', () => {
    expect(Default).toMatchSnapshot();
  });
});

describe("Embed Types and URL's", () => {
  it('SpotifyEmbedTypes enum should match snapshot', () => {
    expect(SpotifyEmbedTypes).toMatchSnapshot();
  });

  it('SpotifyEmbedUrl enum should match snapshot', () => {
    expect(SpotifyEmbedUrl).toMatchSnapshot();
  });
});
