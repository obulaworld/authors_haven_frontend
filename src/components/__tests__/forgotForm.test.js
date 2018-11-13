// react libraries
import React from 'react';

// enzyme third party libraries
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import ForgotPasswordForm from '../ForgotPassword/ForgotPasswordForm';

Enzyme.configure({ adapter: new Adapter() });

describe('ForgotPasswordForm Component', () => {
  test('renders the ForgotPasswordForm Component', () => {
    const wrapper = shallow(
          <ForgotPasswordForm 
            onHandleChange={() => {}}
            onHandleSubmit={() => {}}
            properties={{}}
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
