import {HttpService} from "@/services/http.service";
import type {User} from "@/models/user.model";
import type {Store} from "vuex";
import {redirect} from "@/services/redirectService";
import type {Router} from "vue-router";
import type {Restaurant} from "@/models/restaurant.model";

export class RestaurantService extends HttpService {

    constructor() {
        super();
    }

    async get(payload: any, store: Store<any>, router: Router) {
        try{
            let result;
            switch (payload.request) {
                case "getAll":
                    result = await this.http.post<{ data: Restaurant[] }>('transaction/GRS', payload);
                    break
                case "getOne":
                    result = await this.http.post<{ data: Restaurant[] }>('transaction/UU', payload);
                    break
                case "getHis":
                    result = await this.http.post<{ data: Restaurant[] }>('transaction/GMR', payload);
                    break
                default:
                    result = {data:{data:[]}};
            }
            return {data: result.data.data, code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            await redirect(e.response.status, store, router);
            return {data: e.response.data.message, code: e.response.status, success: false};
        }
    }
    async getCategories(payload: any, store: Store<any>, router: Router) {
        try{
            let result = await this.http.post<{ data: any[] }>('transaction/GRC', payload);
            return {data: result.data.data, code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            await redirect(e.response.status, store, router);
            return {data: e.response.data.message, code: e.response.status, success: false};
        }
    }

    async acceptPendingRestaurant(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: User }>('transaction/CUR', payload);
            // store new data into store object
            return {data: "Le statut du restaurant a été modifié !", code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            console.log(e.response);
            await redirect(e.response.status, store, router);
            return {data: e.response.data.data.pop().message, code: e.response.status, success: false};
        }
    }
    async createRestaurant(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: Restaurant }>('transaction/CR', payload);
            // store new data into store object
            return {data: "Le restaurant a été créé, il sera soumis à une vérification par nos équipes.", code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            console.log(e.response);
            await redirect(e.response.status, store, router);
            return {data: e.response.data.data.pop().message, code: e.response.status, success: false};
        }
    }
    async editRestaurant(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: Restaurant }>('transaction/UR', payload);
            // store new data into store object
            return {data: "Le restaurant a été créé, il sera soumis à une vérification par nos équipes.", code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirect("500", store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            console.log(e.response);
            await redirect(e.response.status, store, router);
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
