import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import Chip,{ChipPropType} from '../Chip';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	//const args:ChipPropType = {};
	render(<Chip />);

	expect(screen.getByLabelText('chip')).toBeDefined();
});