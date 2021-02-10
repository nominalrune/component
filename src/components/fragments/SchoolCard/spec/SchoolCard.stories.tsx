import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import SchoolCard,{SchoolCardPropType} from '../SchoolCard';

const Template: Story<SchoolCardPropType> = (args?:SchoolCardPropType) => <SchoolCard {...args} />

export default {
	title: 'SchoolCard',
	component: SchoolCard
} as Meta<SchoolCardPropType>;

export const Default = Template.bind({});
Default.args = {
	0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
}