import React from 'react';
import { shallow } from 'enzyme';

import Register from './register.component';



//test to see that all the elements are bing rendered
describe('register component', () => {
  
  // create a new login component
  const createLogin = () =>
    shallow(
      <Register
        state = {0}
        
        onUserNameChange  = {event       => {}}
        onEmailChange     = {event       => {}}
        onPasswordChange  = {event       =>{}}
        
        onRegister        = {()       => {}}
      />
    );

    //test to see if components exist
    it('renders register', () => {
      const register = createLogin();
      
      expect(register.find("#username").exists()).toBe(true);
      expect(register.find("#email").exists()).toBe(true);
      expect(register.find("#password").exists()).toBe(true);
      expect(register.find("#register").exists()).toBe(true);

      expect(register.find("input").length).toBe(3);
      expect(register.find(".validator").length).toBe(3);
      expect(register.find(".title").length).toBe(1);
    });
        
});