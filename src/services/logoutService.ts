import {HttpService} from "@/services/http.service";
import type {Store} from "vuex";
import type {User} from "@/models/user.model";

export class LogoutService extends HttpService {
    constructor() {
        super();
    }
    async logoutUser(store:Store<any>){
        const result = await this.http.get<{ user: User }>('auth/logout');
        await store.dispatch("logoutUser", {})
        return "Vous avez été deconnecté"
        if (true){
            return true
        }else{
            return false
        }
    }

}