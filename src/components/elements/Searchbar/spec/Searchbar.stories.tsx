import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import Searchbar,{SearchbarPropType} from '../Searchbar';

const Template: Story<SearchbarPropType> = (args?:SearchbarPropType) => <Searchbar {...args} />

export default {
	title: 'Searchbar',
	component: Searchbar
} as Meta<SearchbarPropType>;

export const Default = Template.bind({});
Default.args = {
	
}