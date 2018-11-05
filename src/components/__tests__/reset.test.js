// react and react-redux libraries
import React from 'react';
import { Provider } from 'react-redux';

// enzyme third party libraries
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import ResetPassword from '../ResetPassword/ResetPassword';

// store
import configureStore from '../../store/configureStore';

Enzyme.configure({ adapter: new Adapter() });

describe('ResetPassword Component', () => {
  test('renders the Resetpassword Component', () => {
    const store = configureStore();
    const wrapper = shallow(
        <Provider store={store}>
          <ResetPassword />
        </Provider>        
    );
    expect(wrapper.exists()).toBe(true);
  });
});
