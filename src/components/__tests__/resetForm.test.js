// react libraries
import React from 'react';

// enzyme third party libraries
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import ResetPasswordForm from '../ResetPassword/ResetPasswordForm';

Enzyme.configure({ adapter: new Adapter() });

describe('ResetpasswordForm Component', () => {
  test('renders the ResetpasswordForm Component', () => {
    const wrapper = shallow(
          <ResetPasswordForm />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
