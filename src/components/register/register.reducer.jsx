import actions from './actionEnum';
import authenticationService from '../../services/authentication.service';

// ------------------------------------------- validators -------------------------------------------

  /**
   * @returns an error mesage for a the username, empty string if valid
   */
   const validateUsername = username => {
    if (username === "") {
      return "* please provide a username";
    }

    return "";
  };

   /**
   * @returns an error mesage for a the email, empty string if valid
   */
  const validateEmail = email => {
    if (email=== "") {
      return "* please provide an email"
    }

    return "";
  };

   /**
   * @returns an error mesage for a the password, empty string if valid
   */
  const validatePassword = password => {
    if (password=== "") {
      return "* please provide a password"
    }
    
    if (password.length < 6) {
      return "* please provide a password of length 6 atleast"
    }

    return "";
  };







const getPayload = () => ({
    USERNAME_CHANGE   : newVal  =>  ({type: actions.USERNAME_CHANGE , payload: {newVal}}),
    EMAIL_CHANGE      : newVal  =>  ({type: actions.EMAIL_CHANGE , payload: {newVal}}),
    PASSWORD_CHANGE   : newVal  =>  ({type: actions.PASSWORD_CHANGE , payload: {newVal}}),
    REGISTER_CLICK    : ()      =>  ({type: actions.REGISTER_CLICK  , payload:  {}}),
  });



const reducer = ( state={username:"",email:"",password:"" , userErr:" ",emailErr:" ",passwordErr:" "}, {type, payload} = {}) => {
    const {username, email, password, userErr, emailErr, passwordErr} = state;

    switch (type) {

      case actions.USERNAME_CHANGE:
        return {...state, username: payload.newVal, userErr: validateUsername(payload.newVal)};

      case actions.EMAIL_CHANGE:
        return {...state, email: payload.newVal, emailErr:validateEmail(payload.newVal)};

      case actions.PASSWORD_CHANGE:
        return {...state, password: payload.newVal, passwordErr:validatePassword(payload.newVal)};


      case actions.REGISTER_CLICK:
        if(userErr === "" && emailErr === "" && passwordErr === ""){
          authenticationService.getInstance().signup(username, email, password)
            .then(response => alert('success!'))
            .catch((err) => alert(err.response.data));
        } else {
          alert('bad info!');
        }
        return state;

      default: 
        return state;
    }
  };
  


export { reducer, getPayload };