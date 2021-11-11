import axios from 'axios';

class webRequestService {

    /** the URL of the server to send the requests to */
    #URL = "http://localhost:8080";

    static classInstance = null; // the instance, as of the singletone design pattern

    /** get the only instance if this class, as of the singletone design pattern */
    static getInstance() {
        if (webRequestService.classInstance === null) {
            webRequestService.classInstance = new webRequestService();
        }
        return this.classInstance;
    }
    
    /**
     * sent an HTML POST request
     * @param {*} uri the uri to send to
     * @param {*} payload the body of the requset (JSON)
     * @returns an HTML promise if the request
     */
    post(uri, payload) {
       return axios.post(this.#URL + uri, payload);
    }

    /**
     * sent an HTML GET request
     * @param {*} uri the uri to send to
     * @param {*} payload the body of the requset (JSON)
     * @returns an HTML promise if the request
     */
    get(uri, payload) {
        //GET is mostly been deprecated, and you can't give it a body.
        return this.post(uri, payload); 
     }
};




export default webRequestService;