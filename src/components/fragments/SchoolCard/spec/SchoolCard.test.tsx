import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import SchoolCard,{SchoolCardPropType} from '../SchoolCard';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	//const args:SchoolCardPropType = {};
	render(<SchoolCard />);

	expect(screen.getByLabelText('schoolcard')).toBeDefined();
});