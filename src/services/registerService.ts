import {HttpService} from "@/services/http.service";
import type {User} from "@/models/user.model";
import type {Store} from "vuex";
import {redirect} from "@/services/redirectService";
import type {Router} from "vue-router";

export class RegisterService extends HttpService {

    constructor() {
        super();
    }
    async registerUser(payload: any, store: Store<any>, router: Router) {
        try {
            const ret = await this.http.post<{ user: User }>('auth/register', payload);
            return {data: "Inscription reussie", code: ret.status, success: true};
        }catch (e: any) {
            if (!e.response) {
                console.log(e);
                redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            redirect(e.response.status, store, router);
            return {data: e.response.data.message, code: e.response.status, success: false};
        }
    }
}