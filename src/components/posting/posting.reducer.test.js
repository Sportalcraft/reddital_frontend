import { reducer, getPayload } from './posting.reducer';
import actions from './actionEnum';


// test reducer function
describe('posting reducer', () => {

    // test that reducer returns currect inital state without arguments
    it('reduce no argument', () => {
        expect(reducer()) .toStrictEqual({post:"", title:""});
    });

    //test reducer's TITLE_CHANGE action
    it('reduce TITLE_CHANGE', () => {
        const title = "if the elections for the USA would happand today, who do you think would win?";

        expect(reducer(undefined                                                  , getPayload().TITLE_CHANGE(title)))    .toStrictEqual({post:"", title:title});
        expect(reducer({post:"", title:"old"}                                     , getPayload().TITLE_CHANGE(title)))    .toStrictEqual({post:"", title:title});
        expect(reducer({post:"I think Spongebob SquarePants would!", title:"old"} , getPayload().TITLE_CHANGE(title)))    .toStrictEqual({post:"I think Spongebob SquarePants would!", title:title});
        expect(reducer({post:"", title:"old"}                                     , getPayload().TITLE_CHANGE("")))       .toStrictEqual({post:"", title:""});
    });

    //test reducer's TITLE_CHANGE action
    it('reduce POST_CHANGE', () => {
        const post = "do you preffer pancakes or broccoli?";
    
        expect(reducer(undefined                                        , getPayload().POST_CHANGE(post)))  .toStrictEqual({post:post, title:""});
        expect(reducer({post:"", title:""}                              , getPayload().POST_CHANGE(post)))  .toStrictEqual({post:post, title:""});
        expect(reducer({post:"old", title:"what is your perfect food?"} , getPayload().POST_CHANGE(post)))  .toStrictEqual({post:post, title:"what is your perfect food?"});
        expect(reducer({post:"", title:"old"}                           , getPayload().POST_CHANGE("")))    .toStrictEqual({post:"", title:"old"});
    });
});

//test getPayload function
describe('posting getPayload', () => {

  it('getPayload', () => {
    const title = "yosi, why did you eat a watermelon 5 years ago?";
    const post = "on 27.12.2016 at 16:04:09 I saw you eat a slice of watermelon, why?";

    expect(getPayload().TITLE_CHANGE(title))    .toStrictEqual({type: actions.TITLE_CHANGE      , payload: title});
    expect(getPayload().POST_CHANGE(post))      .toStrictEqual({type: actions.POST_CHANGE       , payload: post});
  });
});