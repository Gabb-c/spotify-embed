import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header, HeaderProps } from './header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({} as HeaderProps);
LoggedIn.args = {
  user: true,
};

export const LoggedOut = Template.bind({} as HeaderProps);
LoggedOut.args = {
  user: false,
};
