import React from 'react';
import { render } from './test-utils';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';


describe ('Form Component', () => {

    beforeEach(() =>  render(<Form/>,{ initialState: {} }));

    test ('Render correctly', () => {
        expect(screen.getByLabelText('form-div')).toBeInTheDocument();
    });
})

