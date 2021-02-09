import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import Button,{ButtonPropType} from '../Button';

const Template: Story<ButtonPropType> = (args:ButtonPropType) => <Button {...args} />

export default {
title: 'Button',
component: Button
} as Meta<ButtonPropType>;

export const Default = Template.bind({});
Default.args = {
	hidden: false,
	medium:true,
	large:false,
	small:false,
	variant:'contained',
	highlighted:false,
	error:false,
	disabled:false

};
export const hidden = Template.bind({});
hidden.args = {
	hidden: true
};

export const highlighted = Template.bind({});
highlighted.args = {
	hidden: false,
	medium:true,
	large:false,
	small:false,
	variant:'contained',
	highlighted:true,
	error:false,
	disabled:false
};

export const large = Template.bind({});
large.args = {
	large: true
};
export const small = Template.bind({});
small.args = {
	hidden: false,
	medium:false,
	large:false,
	small:true,
	variant:'contained',
	highlighted:false,
	error:false,
	disabled:false
};
export const small = Template.bind({});
small.args = {
	hidden: false,
	medium:false,
	large:false,
	small:false,
	variant:'contained',
	highlighted:false,
	error:false,
	disabled:true
};


