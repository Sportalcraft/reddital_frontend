import React from 'react';
import { shallow } from 'enzyme';

import Login from './login.component';



//test to see that all the elements are bing rendered
describe('login component', () => {
  
  // create a new login component
  const createLogin = () =>
    shallow(
      <Login
        state = {0}
        
        onUserNameChange  = {event       => {}}
        onPasswordChange  = {event       =>{}}
        
        onLogin           = {()       => {}}
        signup            = {()       => {}}
      />
    );

    //test to see if components exist
    it('renders login', () => {
      const login = createLogin();
      
      expect(login.find("#username").exists()).toBe(true);
      expect(login.find("#password").exists()).toBe(true);
      expect(login.find("#login").exists()).toBe(true);
      expect(login.find("#signupRedirect").exists()).toBe(true);

      expect(login.find("input").length).toBe(2);
      expect(login.find(".validator").length).toBe(2);
      expect(login.find(".title").length).toBe(1);
    });
        
});