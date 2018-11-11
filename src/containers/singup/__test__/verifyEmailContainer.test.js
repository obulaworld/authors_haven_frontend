// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// modules importation

import configureStore from '../../../store/configureStore';
import VerifyEamilContainer from '../VerifyEamilContainer';


configure({ adapter: new Adapter() });


describe('Update Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(<Provider store={store}><VerifyEamilContainer /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });
});
