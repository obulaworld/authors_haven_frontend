// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// modules imports
import configureStore from '../../../store/configureStore';
import SingupContainer from '../SingupContainer';


configure({ adapter: new Adapter() });

describe('Signup Component', () => {
  test('renders the signup Component', () => {
    const store = configureStore();
    const wrapper = shallow(<Provider store={store}><SingupContainer /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });
});
