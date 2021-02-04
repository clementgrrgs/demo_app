import React from 'react';
import { shallow } from 'enzyme'
import Header from '../components/Header';

describe('Search component', () => {

    it('Render the Header component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.length).toEqual(1);
      })   
});