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
        webRequestService.getInstance().post(this.#userURI + "/signup", {username, email, password}, console.log, console.log);
    }
};

export default authenticationService;