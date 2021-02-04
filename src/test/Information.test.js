import React from 'react';
import { Provider } from 'react-redux';
import { screen , render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom/extend-expect';
import Information from '../components/information/Information';

const mockStore = configureStore([]);

describe ('Information Component', () => {
    let store = mockStore({movie : {Title:"title", Year:"year", Name:"name", Director:'director'}});

    test ('Render correctly', () => {
        render(<Provider store={store}><Information/></Provider>)
        expect(screen.getByLabelText('info-div')).toBeInTheDocument();
    });

    test ('Number of info show equals to number of properties in common between store and array infoToShow', () => {
        render(<Provider store={store}><Information/></Provider>)
        expect(screen.getByLabelText('label-infofield').childElementCount).toEqual(3);
    });

    test ('Image shouldn\'t show if the property "Poster" doesn\'t exist', () => {
        render(<Provider store={store}><Information/></Provider>)
        expect(screen.getByLabelText('label-poster').childElementCount).toEqual(0);
    });

    test ('Image shouldn\'t show if the property "Poster" is equal to "N/A"', () => {
        jest.clearAllMocks();
        store = mockStore({movie : {Poster:"N/A"}});
        render(<Provider store={store}><Information/></Provider>)
        expect(screen.getByLabelText('label-poster').childElementCount).toEqual(0);
        
    });
    test ('Image should show if the propertie Poster exist and different to "N/A"', () => {
        jest.clearAllMocks();
        store = mockStore({movie : {Poster:"MoviePoster"}});
        render(<Provider store={store}><Information/></Provider>)
        expect(screen.getByLabelText('label-poster').childElementCount).toEqual(1);
    });
})

