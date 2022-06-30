import App from '../App.vue'
import {createStore} from 'vuex'
import {createApp} from "vue";
import type {Product} from "@/models/product.model";
import type{ProductCart} from "@/models/productCart.model";

export class cartContent {
    products: ProductCart[];
    restaurantId: Number;
    restaurantName: string;

    constructor(json: any) {
        this.products = json.products;
        this.restaurantId = json.restaurantId;
        this.restaurantName = json.restaurantName;
    }
}
export const store = createStore({
    state: {

        token:{
            token: "",
            isLogged: false,
        },
        user:{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            role: "",
        },
        cart: Array<cartContent>()

    },
    mutations: {
        storeUser(state, payload){
            state.user.firstName = payload.firstName;
            state.user.lastName = payload.lastName;
            state.user.email = payload.email;
            state.user.phone = payload.phone;
            state.user.address = payload.address;
            state.user.role = payload.role.name;
        },

        loginUser(state, payload){
            state.token.token = payload.email;
            state.token.isLogged = true;
        },
        emptyUser(state, payload){
            state.user.firstName = "";
            state.user.lastName = "";
            state.user.email = "";
            state.user.phone = "";
            state.user.address = "";
            state.user.role = "";
        },
        emptyToken(state, payload){
            state.token.token = "";
            state.token.isLogged = false;
        },
        initialiseStore(state) {
            // Check if the ID exists
            if(localStorage.getItem('store')) {
                // Replace the state object with the stored item
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')||""))
                );
            }
        },
        addToCart(state, payload: cartContent){
            console.log(payload.restaurantId);
            console.log(payload.restaurantName);
            try {
                const cart = state.cart.find(cart => cart.restaurantId === payload.restaurantId);
                // check if the product is already in the cart
                if(cart){
                    console.log("cart found");
                    if(cart.products.find(product => product.id === payload.products[0].id)){
                        console.log("product found");
                        // if it is, increment the quantity
                        // @ts-ignore
                        cart.products.find(product => product.id === payload.products[0].id).quantity++;
                    }else{
                        console.log("product not found");
                        cart.products.push(payload.products[0]);
                    }
                }else{
                    console.log("cart not found");
                    state.cart.push(new cartContent({restaurantId: payload.restaurantId, restaurantName:payload.restaurantName, products: payload.products}));
                }
            }catch (e) {
                console.log(e);
            }
        },
        removeProduct(state, payload){
            try {
                const cart = state.cart.find(cart => cart.restaurantId === payload.restaurantId);
                if(cart){
                    if(cart.products.find(product => product.id === payload.id)!.quantity > 1) {
                        // if it is, increment the quantity
                        // @ts-ignore
                        cart.products.find(product => product.id === payload.id)!.quantity--;
                    }else{
                        // @ts-ignore
                        cart.products.splice(cart.products.findIndex(product => product.id === payload.id), 1);
                    }
                }
            }catch (e) {
                console.log(e);
            }
        },
        emptyCart(state, payload){
            state.cart = [];
        }


    },
    actions: {
        storeUser(context, payload){
            context.commit("storeUser",payload)
        },

        loginUser(context, payload){
            context.commit("loginUser",payload)
            context.commit("storeUser", payload);
        },

        logoutUser(context, payload){
            context.commit("emptyUser",payload)
            context.commit("emptyToken", payload);
            context.commit("emptyCart", payload);
        },
    },
})
// Subscribe to store updates
store.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    localStorage.setItem('store', JSON.stringify(state));
});
