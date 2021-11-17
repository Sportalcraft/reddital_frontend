import actions from './actionEnum';

/** The inital state of the reducer, will return by callig reducer with no arguments */
const INITIAL_STATE = {};


// ------------------------------------------- exported methods -------------------------------------------

/**
 * @returns the payload to send for the reducer function, depending on the type of action
 */
const getPayload = () => ({
  });


/**
 * the posting reducer
 * @param {*} state the current state
 * @param {*} param1 the action to perform, that was recived from getPayload.
 * @returns 
 */
const reducer = ( state=INITIAL_STATE, {type, payload} = {}) => {
    switch (type) {


      default: 
        return state;
    }
  };
  


export { reducer, getPayload };