import React from 'react';
import { shallow } from 'enzyme'

import Search from '../components/Search';

describe('Search component', () => {

    it('Renders the search component', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.length).toEqual(1);
      })   
});

