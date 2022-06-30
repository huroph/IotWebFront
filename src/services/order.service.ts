import {HttpService} from "@/services/http.service";
import type {Store} from "vuex";
import type {Router} from "vue-router";
import type {Restaurant} from "@/models/restaurant.model";
import {redirectError} from "@/services/redirectService";
import type {Product} from "@/models/product.model";
import type {Order} from "@/models/order.model";

export class OrderService extends HttpService{
    constructor() {
        super();
    }

    async get(payload: any, store: Store<any>, router: Router) {
        try{
            let result;
            switch (payload.request) {
                case "getAll":
                    result = await this.http.post<{ data: Order[] }>('transaction/GIS', payload);
                    break
                case "getOne":
                    result = await this.http.post<{ data: Order[] }>('transaction/GI', payload);
                    break
                case "getAllHis":
                    result = await this.http.post<{ data: Order[] }>('transaction/GOS', payload);
                    break
                case "getAllRestaurantPending":
                    result = await this.http.post<{ data: Order[] }>('transaction/GPOS', payload);
                    break
                case "getAllRestaurant":
                    result = await this.http.post<{ data: Order[] }>('transaction/GOS', payload);
                    break
                case "getAllDelivererInProgress":
                    result = await this.http.post<{ data: Order[] }>('transaction/GIOS', payload);
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
    async incrementStatus(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<any>('transaction/AO', payload);
            // store new data into store object
            return {data: "Le commande a été validée", code: 200, success: true};
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
    async createProduct(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: Product }>('transaction/CI', payload);
            // store new data into store object
            return {data: "Le produit a été créé.", code: 200, success: true};
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
    async deliver(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: Restaurant }>('transaction/DO', payload);
            // store new data into store object
            return {data: "Le produit a mis a jour.", code: 200, success: true};
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