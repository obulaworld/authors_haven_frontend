import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// modules importation
import Home from '../Home';

configure({ adapter: new Adapter() });


//SnapShot Test
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);
    expect(component).toMatchSnapshot();
  });


  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<Home list={strings} />);
    expect(component).toMatchSnapshot();
  });
});