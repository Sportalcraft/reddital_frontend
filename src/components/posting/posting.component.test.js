import React from 'react';
import { shallow } from 'enzyme';

import Posting from './posting.component';



//test to see that all the elements are bing rendered
describe('posting component', () => {
  
  // create a new component
  const createPosting = () =>
    shallow(
      <Posting
      />
    );

    //test to see if components exist
    it('renders posting', () => {
      const posting = createPosting();
      
      expect(login.find("#post-text-area").exists()).toBe(true);
      expect(login.find("#post").exists()).toBe(true);

      expect(login.find("input").length).toBe(1);
      expect(login.find("button").length).toBe(1);
    });
        
});