// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// modules importation
import ViewArticle from '../ViewArticle';
import configureStore from '../../../store/configureStore';

configure({ adapter: new Adapter() });

describe('Login Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(
      <Provider store={store}>
        <ViewArticle />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
