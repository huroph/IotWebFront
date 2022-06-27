import {HttpService} from "@/services/http.service";
import type {User} from "@/models/user.model";
import type {Store} from "vuex";
import {redirect} from "@/services/redirectService";
import type {Router} from "vue-router";

export class LoginService extends HttpService {

    constructor() {
        super();
    }

    async loginUser(email:string, password:string, store: Store<any>, router: Router){
        try {
            const result = await this.http.post<{ user: User }>('auth/login', {email: email, password: password})
            // store into local storage
            localStorage.setItem('token', result.data.user.accessToken);
            // store into store object
            await store.dispatch('loginUser', result.data.user);
            return {data: "Vous etes connecté !", code: 200, success: true};
        }catch (e: any) {
            if (!e.response) {
                console.log(e);
                redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            redirect(e.response.status, store, router);
            return {data: e.response.data.pop().message, code: e.response.status, success: false};
        }
    }
}
