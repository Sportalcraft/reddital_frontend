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
     * @param {*} params optional url parameters (JSON)
     * @returns an HTML promise if the request
     */
    post(uri, payload, params = undefined) {
       return axios.post(this.#URL + uri, payload, params === undefined? {} : {params});
    }
};




export default webRequestService;