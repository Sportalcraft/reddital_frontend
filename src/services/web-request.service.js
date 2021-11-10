import axios from 'axios';

class webRequestService {

    #URL = "http://localhost:8080";

    static classInstance = null;

    static getInstance() {
        if (webRequestService.classInstance === null) {
            webRequestService.classInstance = new webRequestService();
        }
        return this.classInstance;
    }
    
    post(uri, payload) {
       return axios.post(this.#URL + uri, payload);
    }

    get(uri, payload) {
        return axios.post(this.#URL + uri, payload);
     }
};

export default webRequestService;