import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { screen, render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';

const mockStore = configureStore([]);
jest.mock('axios');

describe ('Form Component', () => {
    
    let store;
    const result = { Title: "Title", Year: "Year" };

    beforeEach(() => {      
        store = mockStore({});
        store.dispatch = jest.fn();
        render(<Provider store={store}><Form/></Provider>);
    });

    test ('Render correctly', () => {
        expect(screen.getByLabelText('form-div')).toBeInTheDocument();
    });


    test ('Input value should modify textHelper', () => {
        let input = screen.getByLabelText('label-input');
        expect(screen.getByLabelText("label-helper").textContent).toBe('Get movie informations from its title');

        fireEvent.change(input, {target : { value: 'Movie Title' }});
        expect(screen.getByLabelText("label-helper").textContent).toBe('Click on search to get informations about the movie : Movie Title');
    });

    test ('Click on submit button should fetch the API',async () => {
        let submitButton = screen.getByRole('button');
        fireEvent.click(submitButton, {button : 1});

        await act(async () => {
            const response = await axios.get.mockResolvedValue({data : {result}});
            expect(response).toHaveBeenCalledTimes(1);
        });
    });
})

