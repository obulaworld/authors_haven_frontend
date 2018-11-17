// React Libraries
import React from 'react';

// third-party libraries
import {
  shallow,
  configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

// modules importation
import SignupForm from '../SignupForm';
import SignupPage from '../SingupPage';


configure({
  adapter: new Adapter()
});

// SnapShot Test
describe('Renders the singup page', () => {
  const register = () => {};

  const verifiedUser = {
    email: 'email'
  };

  it('should render the signup form', () => {
    const component = shallow( < SignupForm signup = {
        {
          registered: false
        }
      }
      register = {
        register
      }
      />);
      expect(component).toMatchSnapshot();
    });

  it('should render the signup page', () => {
    const component = renderer.create( <
      SignupPage register = {
        register
      }
      signup = {
        {
          registered: false
        }
      }
      />, {
        disableLifecycleMethods: true
      }
    );
    expect(component).toMatchSnapshot();
  });
});
