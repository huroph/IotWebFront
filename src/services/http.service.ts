import axios, {AxiosInstance} from "axios";

export abstract class HttpService {

    http: AxiosInstance

    /**
     * HttpService constructor
     * @param userToken
     * @protected
     */
    protected constructor(userToken?: string) {
        this.http = axios.create({
            baseURL:'http://localhost:8080/',
            headers: {
                'Content-Type': 'application/json',
                'x-auth': userToken || null
            }
        });
    }
}