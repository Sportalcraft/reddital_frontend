import webRequestService from "./web-request.service";

class authenticationService {
     
    /** the URI for the user actions gateway */
    #userURI = "/user";


    static classInstance = null; // the instance, as of the singletone design pattern

    /** get the only instance if this class, as of the singletone design pattern */
    static getInstance() {
        if (authenticationService.classInstance === null) {
            authenticationService.classInstance = new authenticationService();
        }
        return this.classInstance;
    }
    
    /**
     * perform a signup method
     * @param {*} username the username
     * @param {*} email the email
     * @param {*} password the password
     * @returns an HTML promise of the requesr
     */
    signup(username, email, password) {
        return webRequestService.getInstance().post(this.#userURI + "/signup", {username, email, password})
    }

    /**
     * perform a login method
     * @param {*} username the username
     * @param {*} password the password
     * @returns an HTML promise of the requesr
     */
    login(username, password) {
        return webRequestService.getInstance().post(this.#userURI + "/login", {username, password})
    }
};




export default authenticationService;