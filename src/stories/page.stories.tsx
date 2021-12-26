import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './page';
import * as HeaderStories from './header.stories';
import { HeaderProps } from './header';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({} as HeaderProps);
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({} as HeaderProps);
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
