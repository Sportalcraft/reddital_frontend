import React, { useReducer } from 'react';
import Posting from './posting.component';
import { reducer, getPayload } from './posting.reducer';

export default () => {

  // ------------------------------------------- state -------------------------------------------
 
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- action handlers -------------------------------------------
 

  /**
   * handle pressing the login vakue
   * @param {*} state the current state when clickin the buttom
   */
  const handlePosting = (state) => {
    if(state.subredit !== "" && state.title !== "" && state.post !== ""){
      //inputs are valid, contacting the server....

      //TODO

    } else {
      // the inputs atre not valid
      alert('ypur request could not be proccessed. plead provide valid content.');
    }
  }

  // ------------------------------------------- return statement -------------------------------------------
 
  return (
  <Login
     {...state}

     onSubChanged  = {event       => dispatch(getPayload().SUBREDDIT_CHANGE(event.target.value))}
     onTitleChange  = {event      => dispatch(getPayload().TITLE_CHANGE(event.target.value))}
     onPostChange  = {event       => dispatch(getPayload().POST_CHANGE(event.target.value))}

     onPost           = {()       => handlePosting(state)}
  />);
};
