import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';

const mockStore = configureStore([]);

describe ('Form Component', () => {
    
    let store;
    beforeEach(() => {
        store = mockStore({});
        render(<Provider store={store}><Form/></Provider>);
    });

    test ('Render correctly', () => {
        expect(screen.getByLabelText('form-div')).toBeInTheDocument();
    });
})

