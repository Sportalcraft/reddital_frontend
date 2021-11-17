import { reducer, getPayload } from './posting.reducer';
import actions from './actionEnum';


// test reducer function
describe('posting reducer', () => {

    // test that reducer returns currect inital state without arguments
    it('reduce no argument', () => {
        expect(reducer()) .toStrictEqual({subreddit:"", post:"", title:""});
    });

    //test reducer's SUBREDDIT_CHANGE action
    it('reduce SUBREDDIT_CHANGE', () => {
        const sub = "r/askTal";

        expect(reducer(undefined                                        , getPayload().SUBREDDIT_CHANGE(sub)))  .toStrictEqual({subreddit:sub, post:"", title:""});
        expect(reducer({subreddit:"old", post:"", title:""}             , getPayload().SUBREDDIT_CHANGE(sub)))  .toStrictEqual({subreddit:sub, post:"", title:""});
        expect(reducer({subreddit:"old", post:"hello", title:"sup?"}    , getPayload().SUBREDDIT_CHANGE(sub)))  .toStrictEqual({subreddit:sub, post:"hello", title:"sup?"});
        expect(reducer({subreddit:"old", post:"", title:""}             , getPayload().SUBREDDIT_CHANGE("")))   .toStrictEqual({subreddit:"", post:"", title:""});
    });

    //test reducer's TITLE_CHANGE action
    it('reduce TITLE_CHANGE', () => {
        const title = "if the elections for the USA would happand today, who do you think would win?";

        expect(reducer(undefined                                                                            , getPayload().TITLE_CHANGE(title)))    .toStrictEqual({subreddit:"", post:"", title:title});
        expect(reducer({subreddit:"", post:"", title:"old"}                                                 , getPayload().TITLE_CHANGE(title)))    .toStrictEqual({subreddit:"", post:"", title:title});
        expect(reducer({subreddit:"r/politics", post:"I think Spongebob SquarePants would!", title:"old"}   , getPayload().TITLE_CHANGE(title)))    .toStrictEqual({subreddit:"r/politics", post:"I think Spongebob SquarePants would!", title:title});
        expect(reducer({subreddit:"", post:"", title:"old"}                                                 , getPayload().TITLE_CHANGE("")))       .toStrictEqual({subreddit:"", post:"", title:""});
    });

    //test reducer's TITLE_CHANGE action
    it('reduce POST_CHANGE', () => {
        const post = "do you preffer pancakes or broccoli?";
    
        expect(reducer(undefined                                                                    , getPayload().POST_CHANGE(post)))  .toStrictEqual({subreddit:"", post:post, title:""});
        expect(reducer({subreddit:"", post:"", title:""}                                            , getPayload().POST_CHANGE(post)))  .toStrictEqual({subreddit:"", post:post, title:""});
        expect(reducer({subreddit:"r/marshmallow", post:"old", title:"what is your perfect food?"}  , getPayload().POST_CHANGE(post)))  .toStrictEqual({subreddit:"r/marshmallow", post:post, title:"what is your perfect food?"});
        expect(reducer({subreddit:"", post:"", title:"old"}                                         , getPayload().POST_CHANGE("")))    .toStrictEqual({subreddit:"", post:"", title:"old"});
    });
});

//test getPayload function
describe('posting getPayload', () => {

  it('getPayload', () => {
    const sub = "r/askYosi";
    const title = "yosi, why did you eat a watermelon 5 years ago?";
    const post = "on 27.12.2016 at 16:04:09 I saw you eat a slice of watermelon, why?";

    expect(getPayload().SUBREDDIT_CHANGE(sub))  .toStrictEqual({type: actions.SUBREDDIT_CHANGE  , payload: {newVal:sub}});
    expect(getPayload().TITLE_CHANGE(title))    .toStrictEqual({type: actions.TITLE_CHANGE      , payload: {newVal:title}});
    expect(getPayload().POST_CHANGE(post))      .toStrictEqual({type: actions.POST_CHANGE       , payload: {newVal:post}});
  });
});