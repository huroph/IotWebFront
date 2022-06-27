import {HttpService} from "@/services/http.service";
import type {Store} from "vuex";

export class LogoutService extends HttpService {
    constructor() {
        super();
    }
    async logoutUser(store:Store<any>){
        await store.dispatch("logoutUser", {})
        return "Vous avez été deconnecté"
        if (true){
            return true
        }else{
            return false
        }
    }

}