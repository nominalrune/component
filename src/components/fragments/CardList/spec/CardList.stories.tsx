import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardList, { CardListProps } from '../CardList';

const Template: Story<CardListProps> = (args?: CardListProps) => <CardList {...args} />

export default {
	title: 'fragments/CardList',
	component: CardList
} as Meta<CardListProps>;

export const Default = Template.bind({});
Default.args = {
	dataList: [
		{ title: 'hi01', text: 'this is a card', tags: ["tag01", "tag02", "longertag03", "tag04"] },
		{ title: 'bye01', text: 'this is a second card', tags: ["tag05", "t6", "tag07"] },
		{ title: 'hi02', text: 'this is a third card and has a long text and tags to see how it really works.', tags: ["tag08", "tag09_quite_long_because_I_am_long_._EXCUSE_ME_Do_you_have_tall-size_of_this_?", "tag10", "tag11","tag12_this_is_also_long_tag_,_really_.","tag13"] },
		{ title: 'bye02', text: 'this is a forth card',image:'https://www.gakusan.co.jp/wp/wp-content/uploads/2020/06/A03.jpg', tags: ["tag05", "t6", "tag07"] },
	]
}