import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import CardList,{CardListProps} from '../CardList';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	const args:CardListProps = {dataList:[{title:'hi01'},{title:'bye01'}]};
	render(<CardList dataList={args.dataList}/>);

	expect(screen.getByLabelText('cardlist')).toBeDefined();
});
it('should be rendered with titles', async () => {
	const args:CardListProps = {dataList:[{title:'hi01'},{title:'bye01'}]};
	render(<CardList dataList={args.dataList}/>);

	expect(screen.getByText(/hi01/i)).toBeDefined();
});