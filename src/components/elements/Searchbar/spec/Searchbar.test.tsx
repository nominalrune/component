import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import Searchbar,{SearchbarPropType} from '../Searchbar';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	//const args:SearchbarPropType = {};
	render(<Searchbar />);

	expect(screen.getByLabelText('searchbar')).toBeDefined();
});