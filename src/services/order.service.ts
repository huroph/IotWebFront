import {HttpService} from "@/services/http.service";
import type {Store} from "vuex";
import type {Router} from "vue-router";
import type {Restaurant} from "@/models/restaurant.model";
import {redirectError} from "@/services/redirectService";
import type {Product} from "@/models/product.model";

export class OrderService extends HttpService{
    constructor() {
        super();
    }

    async get(payload: any, store: Store<any>, router: Router) {
        try{
            let result;
            switch (payload.request) {
                case "getAll":
                    result = await this.http.post<{ data: Product[] }>('transaction/GIS', payload);
                    break
                case "getOne":
                    result = await this.http.post<{ data: Product[] }>('transaction/GI', payload);
                    break
                case "getAllHis":
                    result = await this.http.post<{ data: Product[] }>('transaction/GMIS', payload);
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
    async validateOrder(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<any>('transaction/CO', payload);
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
    async editProduct(payload: any, store: Store<any>, router: Router) {
        try{
            const result = await this.http.post<{ data: Restaurant }>('transaction/UI', payload);
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