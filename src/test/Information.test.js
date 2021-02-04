import React from 'react';
import { Provider } from 'react-redux';
import { screen , render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom/extend-expect';
import Information from '../components/information/Information';

const mockStore = configureStore([]);

describe ('Information Component', () => {
    let store 

    beforeEach(() => {
        store = mockStore({movie : {Title:"title", Year:"year", Name:"name", Director:'director'}});
        render(<Provider store={store}><Information/></Provider>)
    });

    test ('Render correctly', () => {
        expect(screen.getByLabelText('info-div')).toBeInTheDocument();
    });

    test ('Number of info show equals to number of properties in common between store and array infoToShow', () => {
        expect(screen.getByLabelText('label-infofield').childElementCount).toEqual(3);
    });

    test ('Image show only if the property "Poster" exist', () => {
        expect(screen.getByLabelText('label-poster').childElementCount).toEqual(1);
    });
})

