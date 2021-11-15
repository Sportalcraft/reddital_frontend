import React from 'react';
import { shallow, mount } from 'enzyme';

import Login from './index';



//test to see that all the elements are bing rendered
describe('login index', () => {

    // create a new login component
    const createLogin = () =>
        mount( <Login/>);

    // test username changed
    it('username changed', () => {

        const login = createLogin();

        const textbox   = login.find('#username');
        const validator = login.find('#username-validator');

        expect(textbox.length).toEqual(1);

        //empty string - validatir shoud triger
        textbox.simulate("change", { target: { value: "" } });
        expect(validator.text()).toEqual("* can't be empty");

        // valid text
        textbox.simulate("change", { target: { value: "text" } });
        expect(validator.text()).toEqual("");

    });

    // test password changed
    it('username changed', () => {

        const login = createLogin();

        const textbox   = login.find('#password');
        const validator = login.find('#password-validator');

        expect(textbox.length).toEqual(1);

        //empty string - validatir shoud triger
        textbox.simulate("change", { target: { value: "" } });
        expect(validator.text()).toEqual("* can't be empty");

        // valid text
        textbox.simulate("change", { target: { value: "text" } });
        expect(validator.text()).toEqual("");

    });

});