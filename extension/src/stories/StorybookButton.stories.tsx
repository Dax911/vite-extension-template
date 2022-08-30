import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StorybookButton } from './StorybookButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/StorybookButton',
	component: StorybookButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof StorybookButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StorybookButton> = (args) => <StorybookButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'StorybookButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'StorybookButton',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'StorybookButton',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'StorybookButton',
};
