import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';

import InformationField from '../components/information/InformationField';


describe('InformationField Component', () => {

    it('Render the InformationField component', () => {
        const wrapper = shallow(<InformationField />);
        expect(wrapper.length).toEqual(1);
    });

    it  ('Show props in the corresponding field', () => {
        render (<InformationField keys='1' label="title" info="info"/>);
        expect(screen.getByLabelText('label-field').textContent).toBe("title");
        expect(screen.getByLabelText('label-info').textContent).toBe("info");
    })
});