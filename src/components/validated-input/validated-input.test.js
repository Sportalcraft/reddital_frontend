import React from 'react';
import { shallow } from 'enzyme';
import ValidatedInput from './validated-input.component';

describe('<ValidatedInput />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ValidatedInput />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
