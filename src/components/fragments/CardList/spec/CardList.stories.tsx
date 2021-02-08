import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import CardList,{CardListProps} from '../CardList';

const Template: Story<CardListProps> = (args?:CardListProps) => <CardList {...args} />

export default {
	title: 'CardList',
	component: CardList
} as Meta<CardListProps>;

export const Default = Template.bind({});
Default.args = {
	children:'hi'
}