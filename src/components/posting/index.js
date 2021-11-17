import React, { useReducer } from 'react';
import Posting from './posting.component';
import { reducer, getPayload } from './posting.reducer';

import postService from '../../services/post.service';
import authenticationService from '../../services/authentication.service';

export default (props) => {

  // ------------------------------------------- state -------------------------------------------
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- action handlers -------------------------------------------
 

  /**
   * handle pressing the login vakue
   * @param {*} state the current state when clickin the buttom
   */
  const handlePosting = (state) => {
    if(state.title !== "" && state.post !== ""){
      //inputs are valid, contacting the server...
      postService.getInstance().post(state.title, state.post, /*props.match.params.subreddital*/ "askTal", authenticationService.getInstance().getLoggedUserAuthKey())
        .then(response => console.log(response.data))
        .catch((err) => alert(err.response.data));

    } else {
      // the inputs atre not valid
      alert('ypur request could not be proccessed. plead provide valid content.');
    }
  }

  // ------------------------------------------- return statement -------------------------------------------
 
  return (
  <Posting
     {...state}

     onTitleChange  = {event      => dispatch(getPayload().TITLE_CHANGE(event.target.value))}
     onPostChange  = {event       => dispatch(getPayload().POST_CHANGE(event.target.value))}

     onPost           = {()       => handlePosting(state)}
  />);
};
