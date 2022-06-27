import axios from "axios";
import type {AxiosInstance} from "axios";

export abstract class HttpService {

    http: AxiosInstance

    /**
     * HttpService constructor
     * @param userToken
     * @protected
     */
    protected constructor() {
        this.http = axios.create({
            baseURL:'http://localhost:8080/',
            headers: {
                'Content-Type': 'application/json',
                'x-auth': localStorage.getItem("token") || null
            }
        });
    }
}