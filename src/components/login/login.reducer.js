import actions from './actionEnum';

/** The inital state of the reducer, will return by callig reducer with no arguments */
const initalState = {username:"",password:"" , userErr:" ",passwordErr:" "};

// ------------------------------------------- validators -------------------------------------------

  /**
   * @returns an error mesage for a the username, empty string if valid
   */
   const validateNotempty = str => {
    if (str === "") {
      return "* can't be empty";
    }

    return "";
  };


  // ------------------------------------------- exported methods -------------------------------------------

/**
 * @returns the payload to send for the reducer function, depending on the type of action
 */
const getPayload = () => ({
    USERNAME_CHANGE   : newVal  =>  ({type: actions.USERNAME_CHANGE , payload: {newVal}}),
    PASSWORD_CHANGE   : newVal  =>  ({type: actions.PASSWORD_CHANGE , payload: {newVal}}),
  });


/**
 * the login reducer
 * @param {*} state the current state
 * @param {*} param1 the action to perform, that was recived from getPayload.
 * @returns 
 */
const reducer = ( state=initalState, {type, payload} = {}) => {
    switch (type) {

      case actions.USERNAME_CHANGE: // user name has changed
        return {...state, username: payload.newVal, userErr: validateNotempty(payload.newVal)};

      case actions.PASSWORD_CHANGE: // password has changed
        return {...state, password: payload.newVal, passwordErr:validateNotempty(payload.newVal)};

      default: 
        return state;
    }
  };
  


export { reducer, getPayload };