import React from 'react';
import { shallow, mount } from 'enzyme';

import Register from './index';



//test to see that all the elements are bing rendered
describe('register index', () => {

    // create a new login component
    const createRegister = () =>
        mount( <Register/>);

    // test username changed
    it('username changed', () => {

        const login = createRegister();

        const textbox   = login.find('#username');
        const validator = login.find('#username-validator');

        expect(textbox.length).toEqual(1);

        //empty string - validatir shoud triger
        textbox.simulate("change", { target: { value: "" } });
        expect(validator.text()).toEqual("* please provide a username");

        // valid text
        textbox.simulate("change", { target: { value: "text" } });
        expect(validator.text()).toEqual("");

    });

    // test username changed
    it('email changed', () => {

        const login = createRegister();

        const textbox   = login.find('#email');
        const validator = login.find('#email-validator');

        expect(textbox.length).toEqual(1);

        //empty string - validatir shoud triger
        textbox.simulate("change", { target: { value: "" } });
        expect(validator.text()).toEqual("* please provide an email");

        // valid text
        textbox.simulate("change", { target: { value: "text" } });
        expect(validator.text()).toEqual("");

    });

    // test password changed
    it('username changed', () => {

        const login = createRegister();

        const textbox   = login.find('#password');
        const validator = login.find('#password-validator');

        expect(textbox.length).toEqual(1);

        //empty string - validatir shoud triger
        textbox.simulate("change", { target: { value: "" } });
        expect(validator.text()).toEqual("* please provide a password");

        // valid pssword, too short
        textbox.simulate("change", { target: { value: "text" } });
        expect(validator.text()).toEqual("* please provide a password of length 6 atleast");

        // valid pssword, too short
        textbox.simulate("change", { target: { value: "text123456" } });
        expect(validator.text()).toEqual("");

    });

});