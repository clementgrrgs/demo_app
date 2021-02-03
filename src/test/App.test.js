import React from 'react';
import { shallow } from 'enzyme'

import App from '../components/App';


describe('App Component', () => {

  it('Render the App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  })
});

