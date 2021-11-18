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
      
      expect(posting.find("#post-text").exists()).toBe(true);
      expect(posting.find("#title").exists()).toBe(true);
      expect(posting.find("#post").exists()).toBe(true);

      expect(posting.find("input").length).toBe(1);
      expect(posting.find("textarea").length).toBe(1);
      expect(posting.find("button").length).toBe(1);
    });
        
});