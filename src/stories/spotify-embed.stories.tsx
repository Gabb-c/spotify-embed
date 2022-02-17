/*eslint-disable-next-line import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpotifyEmbed, SpotifyEmbedProps } from '../components/spotify-embed';

export default {
  title: 'Examples/Spotify Embed',
  component: SpotifyEmbed,
  args: {
    size: 'default',
  },
  argTypes: {
    size: { control: 'radio', options: ['custom', 'default', 'compact'] },
  },
} as ComponentMeta<typeof SpotifyEmbed>;

const Template: ComponentStory<typeof SpotifyEmbed> = (args) => <SpotifyEmbed {...args} />;

export const Default = Template.bind({} as SpotifyEmbedProps);
Default.args = {
  size: 'default',
  src: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j',
};

export const Compact = Template.bind({} as SpotifyEmbedProps);
Compact.args = {
  size: 'compact',
  src: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j',
};

export const Custom = Template.bind({} as SpotifyEmbedProps);
Custom.args = {
  size: 'custom',
  src: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j',
  height: 760,
  width: 600,
};
