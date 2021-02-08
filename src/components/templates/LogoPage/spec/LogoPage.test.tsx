import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import LogoPage from '../LogoPage';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('sometest', async () => {
	const args = {};
	render(<LogoPage {...args} />);

	expect(screen.getByLabelText('page')).toBeDefined();
});