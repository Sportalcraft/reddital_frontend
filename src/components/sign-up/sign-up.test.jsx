import React from 'react';
import { shallow } from 'enzyme';
import Signin from './sign-in';

describe('<Signin />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Signin />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
