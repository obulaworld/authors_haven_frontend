// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// modules importation

import configureStore from '../../../store/configureStore';
import UpdateContainer from '../UpdateUserContainer';


configure({ adapter: new Adapter() });


describe('Update Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(<Provider store={store}><UpdateContainer /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });
});
