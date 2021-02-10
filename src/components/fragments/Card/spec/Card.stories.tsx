import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import Card,{CardProps} from '../Card';

const Template: Story<CardProps> = (args?:CardProps) => <Card {...args} />

export default {
	title: 'fragments/Card',
	component: Card
} as Meta<CardProps>;

export const Default = Template.bind({});
Default.args = {
	title:'hi',
	text:'this is a card',
	tags:["tag01","tag02","tag03"]
}