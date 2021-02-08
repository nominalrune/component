import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import EnrollPage from '../EnrollPage';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled', async () => {
	render(<EnrollPage />);

	expect(screen.getByLabelText('enroll')).toBeDefined();
});