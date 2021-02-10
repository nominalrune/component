import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import Button,{ButtonPropType} from '../Button';

const Template: Story<ButtonPropType> = (args:ButtonPropType) => <Button {...args} />

export default {
title: 'Elements/Button',
component: Button
} as Meta<ButtonPropType>;

export const Default = Template.bind({});
Default.args = {
	children:'Hi!',
	medium:true,
	large:false,
	small:false,
	variant:'contained',
	highlight:false,
	error:false,
	disabled:false
};

export const highlight = Template.bind({});
highlight.args = {
	children:'Hi!',
	medium:true,
	large:false,
	small:false,
	variant:'contained',
	highlight:true,
	error:false,
	disabled:false
};

export const large = Template.bind({});
large.args = {
	children:'Hi!',
	large: true,
	small:false,
	variant:'contained',
	highlight:false,
	error:false,
	disabled:false
};
export const small = Template.bind({});
small.args = {
	children:'Hi!',
	medium:false,
	large:false,
	small:true,
	variant:'contained',
	highlighted:false,
	error:false,
	disabled:false
};
export const error = Template.bind({});
error.args = {
	children:'Hi!',
	medium:false,
	large:false,
	small:false,
	variant:'contained',
	highlighted:false,
	error:true,
	disabled:false
};
