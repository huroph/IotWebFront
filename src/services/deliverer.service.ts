import {HttpService} from "@/services/http.service";
import type {Store} from "vuex";
import type {Router} from "vue-router";
import type {Restaurant} from "@/models/restaurant.model";
import {redirectError} from "@/services/redirectService";
import type {Product} from "@/models/product.model";
import {Order} from "@/models/order.model";
import {Deliverer} from "@/models/deliverer.model";
import {User} from "@/models/user.model";

export class DelivererService extends HttpService{
    constructor() {
        super();
    }

    async get(payload: any, store: Store<any>, router: Router) {
        try{
            let result;
            switch (payload.request) {
                case "getAll":
                    result = await this.http.post<{ data: Deliverer[] }>('transaction/GDS', payload);
                    break
                case "getOne":
                    result = await this.http.post<{ data: Deliverer[] }>('transaction/GDS', payload);
                    break
                default:
                    result = {data:{data:[]}};
            }
            return {data: result.data.data, code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirectError(500, store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            await redirectError(e.response.status, store, router);
            return {data: e.response.data.data.pop().message, code: e.response.status, success: false};
        }
    }
    async acceptPendingDeliverer(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: User }>('transaction/CUR', payload);
            // store new data into store object
            return {data: "Le statut du livreur a été modifié !", code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirectError(500, store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            console.log(e.response);
            await redirectError(e.response.status, store, router);
            return {data: e.response.data.data.pop().message, code: e.response.status, success: false};
        }
    }
    async createDeliverer(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<any>('transaction/CD', payload);
            // store new data into store object
            return {data: "Demande prise en compte, elle sera étudiée par nos services.", code: 200, success: true};
        }catch (e: any) {
            console.log(e);
            if (!e.response) {
                console.log(e);
                await redirectError(500, store, router);
                return {data: 'Internal server error', code: 500, success: false};
            }
            console.log(e.response);
            await redirectError(e.response.status, store, router);
            return {data: e.response.data.data.pop().message, code: e.response.status, success: false};
        }
    }
}