import actions from './actionEnum';

/** The inital state of the reducer, will return by callig reducer with no arguments */
const INITIAL_STATE = {post:"", title:""};


// ------------------------------------------- exported methods -------------------------------------------

/**
 * @returns the payload to send for the reducer function, depending on the type of action
 */
const getPayload = () => ({
  TITLE_CHANGE      : newVal  =>  ({type: actions.TITLE_CHANGE      , payload: {newVal}}),
  POST_CHANGE       : newVal  =>  ({type: actions.POST_CHANGE       , payload: {newVal}}),
});


/**
 * the posting reducer
 * @param {*} state the current state
 * @param {*} param1 the action to perform, that was recived from getPayload.
 * @returns 
 */
const reducer = ( state=INITIAL_STATE, {type, payload} = {}) => {
    switch (type) {

      case actions.TITLE_CHANGE:      // title has changed
        return {...state, title: payload.newVal};

      case actions.POST_CHANGE:       // post has changed
        return {...state, post: payload.newVal};


      default: 
        return state;
    }
  };
  


export { reducer, getPayload };