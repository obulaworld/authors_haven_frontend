import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from '../App';


//SnapShot Test
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });


  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<App list={strings} />);
    expect(component).toMatchSnapshot();
  });
});