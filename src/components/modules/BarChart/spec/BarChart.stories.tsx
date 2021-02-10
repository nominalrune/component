import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import BarChart,{BarChartPropType} from '../BarChart';

const Template: Story<BarChartPropType> = (args?:BarChartPropType) => <BarChart {...args} />

export default {
	title: 'BarChart',
	component: BarChart
} as Meta<BarChartPropType>;

export const Default = Template.bind({});
Default.args = {
	hidden:false,
}