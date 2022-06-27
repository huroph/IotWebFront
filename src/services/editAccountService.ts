import {HttpService} from "@/services/http.service";
import type {User} from "@/models/user.model";
import type {Store} from "vuex";
import {redirect} from "@/services/redirectService";
import type {Router} from "vue-router";

export class EditAccountService extends HttpService {

    constructor() {
        super();
    }

    async editUserInfos(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: User }>('transaction/UU', payload);
            // store new data into store object
            console.log(result.data.data)
            await store.dispatch('loginUser', result.data.data);
            return {data: "Données modifiées", code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            redirect(e.response.status, store, router);
            return {data: e.response.data.message, code: e.response.status, success: false};
        }
    }
    async editUserPassword(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: User }>('transaction/CUP', payload);
            // store new data into store object
            return {data: "Mot de passe modifié !", code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            console.log(e.response);
            redirect(e.response.status, store, router);
            return {data: e.response.data.data.pop().message, code: e.response.status, success: false};
        }
    }
    async deleteUser(store: Store<any>, router: Router) {
        try {
            await this.http.post<{ data: User }>('transaction/DU', {});
            return {data: "Compte supprimé !", code: 200, success: true};
        } catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            redirect(e.response.status, store, router);
            return {data: e.response.data.data.pop().message, code: e.response.status, success: false};
        }
    }
}
