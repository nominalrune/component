import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import BarChart,{BarChartPropType} from '../BarChart';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	//const args:BarChartPropType = {};
	render(<BarChart />);

	expect(screen.getByLabelText('barchart')).toBeDefined();
});