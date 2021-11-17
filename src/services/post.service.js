import webRequestService from "./web-request.service";

class postService {
     
    /** the URI for the posting actions gateway */
    #postURI = "";


    static classInstance = null; // the instance, as of the singletone design pattern

    /** get the only instance if this class, as of the singletone design pattern */
    static getInstance() {
        if (postService.classInstance === null) {
            postService.classInstance = new postService();
        }
        return this.classInstance;
    }


    /**
     * send a new post
     * @param {*} title the title of the post
     * @param {*} content the content of the post 
     * @param {*} subreddital the subreddital to post the post to
     * @param {*} authenticationKey the current loggedin user's authentication key
     */
    post(title, content, subreddital, authenticationKey) {
        return webRequestService.getInstance().post(this.#postURI + "/posting", {title, content, authenticationKey}, {subreddital})
    }
}



export default postService;