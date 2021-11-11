import { reducer, getPayload } from './register.reducer';
import actions from './actionEnum';

// test reducer function
describe('register reducer', () => {

  // test that reducer returns currect inital state without arguments
  it('reduce no argument', () => {
      expect(reducer()) .toStrictEqual({username:"",email:"", password:"" , userErr:" ",emailErr:" ", passwordErr:" "});
  });

  //test reducer's USERNAME_CHANGE action
  it('reduce USERNAME_CHANGE', () => {
    const username = "banana";

    expect(reducer(undefined                                                                                    , getPayload().USERNAME_CHANGE(username)))  .toStrictEqual({username,email:"",password:"" , userErr:"",emailErr:" ",passwordErr:" "});
    expect(reducer({username:"", email:"", password:"123" , userErr:"", emailErr:" ", passwordErr:"tooshort"}   , getPayload().USERNAME_CHANGE(username)))  .toStrictEqual({username,email:"",password:"123" , userErr:"",emailErr:" ",passwordErr:"tooshort"});
    expect(reducer({username:"old", email:"", password:"123" , userErr:"", emailErr:" ", passwordErr:"tooshort"}, getPayload().USERNAME_CHANGE(username)))  .toStrictEqual({username,email:"",password:"123" , userErr:"",emailErr:" ",passwordErr:"tooshort"});
    expect(reducer({username:"", email:"", password:"123" , userErr:"", emailErr:" ", passwordErr:"tooshort"}   , getPayload().USERNAME_CHANGE("")))        .toStrictEqual({username:"",email:"",password:"123" , userErr:"* please provide a username",emailErr:" ",passwordErr:"tooshort"});
  });

  //test reducer's EMAIL_CHANGE action
  it('reduce EMAIL_CHANGE', () => {
    const email = "tal@barzialy.yosi";

    expect(reducer(undefined                                                                                    , getPayload().EMAIL_CHANGE(email)))  .toStrictEqual({username:"", email, password:"" , userErr:" ", emailErr:"", passwordErr:" "});
    expect(reducer({username:"yosiking", email:"", password:"" , userErr:"", emailErr:" ", passwordErr:" "}     , getPayload().EMAIL_CHANGE(email)))  .toStrictEqual({username:"yosiking", email, password:"" , userErr:"", emailErr:"", passwordErr:" "});
    expect(reducer({username:"yosiking", email:"old", password:"" , userErr:"", emailErr:" ", passwordErr:" "}  , getPayload().EMAIL_CHANGE(email)))  .toStrictEqual({username:"yosiking", email, password:"" , userErr:"", emailErr:"", passwordErr:" "});
    expect(reducer({username:"yosiking", email:"a@a.a", password:"" , userErr:"",emailErr:"", passwordErr:" "}  , getPayload().EMAIL_CHANGE("")))     .toStrictEqual({username:"yosiking", email:"", password:"" , userErr:"", emailErr:"* please provide an email", passwordErr:" "});
  });

  //test reducer's PASSWORD_CHANGE action
  it('reduce PASSWORD_CHANGE', () => {
    const password = "12345678";

    expect(reducer(undefined                                                                                          , getPayload().PASSWORD_CHANGE(password)))  .toStrictEqual({username:"", email:"", password , userErr:" ", emailErr:" ", passwordErr:""});
    expect(reducer({username:"yosiking", email:"", password:"" , userErr:"", emailErr:" ", passwordErr:""}            , getPayload().PASSWORD_CHANGE(password)))  .toStrictEqual({username:"yosiking", email:"", password , userErr:"", emailErr:" ", passwordErr:""});
    expect(reducer({username:"yosiking", email:"", password:"old" , userErr:"", emailErr:" ", passwordErr:""}         , getPayload().PASSWORD_CHANGE(password)))  .toStrictEqual({username:"yosiking", email:"", password , userErr:"", emailErr:" ", passwordErr:""});
    expect(reducer({username:"yosiking", email:"", password:"123" , userErr:"",emailErr:" ", passwordErr:"tooshort"}  , getPayload().PASSWORD_CHANGE("")))        .toStrictEqual({username:"yosiking", email:"", password:"" , userErr:"", emailErr:" ", passwordErr:"* please provide a password"});
  });
});

//test getPayload function
describe('register getPayload', () => {

  it('getPayload', () => {
    const username = "banana";
    const email = "tal@barzialy.yosi";
    const password = "12345678";

    expect(getPayload().USERNAME_CHANGE(username)).toStrictEqual({type: actions.USERNAME_CHANGE , payload: {newVal:username}});
    expect(getPayload().EMAIL_CHANGE(email))      .toStrictEqual({type: actions.EMAIL_CHANGE    , payload: {newVal:email}});
    expect(getPayload().PASSWORD_CHANGE(password)).toStrictEqual({type: actions.PASSWORD_CHANGE , payload: {newVal:password}});
  });
});