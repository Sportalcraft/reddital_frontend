import webRequestService from "./web-request.service";

class authenticationService {
     
    #userURI = "/user";


    static classInstance = null;

    static getInstance() {
        if (authenticationService.classInstance === null) {
            authenticationService.classInstance = new authenticationService();
        }
        return this.classInstance;
    }
    
    signup(username, email, password) {
        return webRequestService.getInstance().post(this.#userURI + "/signup", {username, email, password})
    }

    login(username, password) {
        return webRequestService.getInstance().get(this.#userURI + "/login", {username, password})
    }
};

export default authenticationService;