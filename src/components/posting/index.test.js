import React from 'react';
import { shallow, mount } from 'enzyme';

import Posting from './index';




//test to see that all the elements are bing rendered
describe('posting index', () => {

    // create a new component
    const createPostingIndex = () =>
        mount( <Posting/>);

    // test title changed
    it('subreddit changed', () => {
        let wrper     = createPostingIndex();
        let posting   = wrper.find("Posting");
        let textbox   = posting.find('#title');

        expect(textbox.length).toEqual(1);

       
       
        let value = "hello!";

        // valid text
        textbox.simulate("change", { target: { value } });
        wrper.update();
        posting   = wrper.find("Posting");
        expect(posting.props().title).toBe(value);

        //empty string 
        value = ""
        textbox.simulate("change", { target: { value} });
        wrper.update();
        posting   = wrper.find("Posting");
        expect(posting.props().title).toBe(value);
    });

  // title changed
  it('post text changed', () => {
    let wrper     = createPostingIndex();
    let posting   = wrper.find("Posting");
    let textbox   = posting.find('#post-text');

    expect(textbox.length).toEqual(1);

   
   
    let value = "my name is yosi! hello!";

    // valid text
    textbox.simulate("change", { target: { value } });
    wrper.update();
    posting   = wrper.find("Posting");
    expect(posting.props().post).toBe(value);

    //empty string 
    value = ""
    textbox.simulate("change", { target: { value} });
    wrper.update();
    posting   = wrper.find("Posting");
    expect(posting.props().post).toBe(value);
});

});