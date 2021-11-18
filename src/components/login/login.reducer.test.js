import { reducer, getPayload } from './login.reducer';
import actions from './actionEnum';


// test reducer function
describe('login reducer', () => {

    // test that reducer returns currect inital state without arguments
    it('reduce no argument', () => {
        expect(reducer()) .toStrictEqual({username:"",password:"" , userErr:" ",passwordErr:" "});
    });

    //test reducer's USERNAME_CHANGE action
    it('reduce USERNAME_CHANGE', () => {
      const username = "banana";

      expect(reducer(undefined                                                            , getPayload().USERNAME_CHANGE(username)))  .toStrictEqual({username,password:"" , userErr:"",passwordErr:" "});
      expect(reducer({username:"", password:"123" , userErr:"",passwordErr:"tooshort"}    , getPayload().USERNAME_CHANGE(username)))  .toStrictEqual({username,password:"123" , userErr:"",passwordErr:"tooshort"});
      expect(reducer({username:"old", password:"123" , userErr:"",passwordErr:"tooshort"} , getPayload().USERNAME_CHANGE(username)))  .toStrictEqual({username,password:"123" , userErr:"",passwordErr:"tooshort"});
      expect(reducer({username:"", password:"123" , userErr:"",passwordErr:"tooshort"}    , getPayload().USERNAME_CHANGE("")))        .toStrictEqual({username:"",password:"123" , userErr:"* can't be empty",passwordErr:"tooshort"});
  });

  //test reducer's PASSWORD_CHANGE action
  it('reduce PASSWORD_CHANGE', () => {
    const password = "12345678";

    expect(reducer(undefined                                                                  , getPayload().PASSWORD_CHANGE(password)))  .toStrictEqual({username:"",password , userErr:" ",passwordErr:""});
    expect(reducer({username:"yosiking", password:"" , userErr:"",passwordErr:""}             , getPayload().PASSWORD_CHANGE(password)))  .toStrictEqual({username:"yosiking",password , userErr:"",passwordErr:""});
    expect(reducer({username:"yosiking", password:"old" , userErr:"",passwordErr:""}          , getPayload().PASSWORD_CHANGE(password)))  .toStrictEqual({username:"yosiking",password , userErr:"",passwordErr:""});
    expect(reducer({username:"yosiking", password:"123" , userErr:"",passwordErr:"tooshort"}  , getPayload().PASSWORD_CHANGE("")))        .toStrictEqual({username:"yosiking",password:"" , userErr:"",passwordErr:"* can't be empty"});
  });
});

//test getPayload function
describe('login getPayload', () => {

  it('getPayload', () => {
    const username = "banana";
    const password = "12345678";

    expect(getPayload().USERNAME_CHANGE(username)).toStrictEqual({type: actions.USERNAME_CHANGE , payload:username});
    expect(getPayload().PASSWORD_CHANGE(password)).toStrictEqual({type: actions.PASSWORD_CHANGE , payload:password});

    //expect(getPayload().LOGIN_CLICK())  .toStrictEqual({type: actions.LOGIN_CLICK , payload: {}});
    //expect(getPayload().SIGNUP_CLICK()) .toStrictEqual({type: actions.SIGNUP_CLICK, payload: {}});
  });
});