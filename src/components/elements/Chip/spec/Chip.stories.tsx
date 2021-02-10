import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import Chip,{ChipPropType} from '../Chip';

const Template: Story<ChipPropType> = (args?:ChipPropType) => <Chip {...args} />

export default {
	title: 'elements/Chip',
	component: Chip
} as Meta<ChipPropType>;

export const Default = Template.bind({});
Default.args = {
	label:'Hi!'
}