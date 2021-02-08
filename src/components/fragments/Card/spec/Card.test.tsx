import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import Card,{CardProps} from '../Card';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	//const args:CardProps = {};
	render(<Card title={'hi'} text={'this is a card'} tags={["tag01","tag02","tag03"]}/>);

	expect(screen.getByLabelText('card')).toBeDefined();
});