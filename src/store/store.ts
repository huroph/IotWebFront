import App from '../App.vue'
import {createStore} from 'vuex'
import {createApp} from "vue";
import type {Product} from "@/models/product.model";

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
        cart:{
            products: Array<Product>(),
        }

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
        addToCart(state, payload: Product){
            try {
                // check if the product is already in the cart
                if(state.cart.products.find(product => product.id === payload.id)){
                    // if it is, increment the quantity
                    // @ts-ignore
                    state.cart.products.find(product => product.id === payload.id).quantity++;
                }else{
                    state.cart.products.push(payload);
                }
            }catch (e) {
                console.log(e);
            }
        },
        removeProduct(state, payload){
            try {
                if(state.cart.products.find(product => product.id === payload.id)){
                    if(state.cart.products.find(product => product.id === payload.id)!.quantity > 1) {
                        // if it is, increment the quantity
                        // @ts-ignore
                        state.cart.products.find(product => product.id === payload.id)!.quantity--;
                    }else{
                        // @ts-ignore
                        state.cart.products.splice(state.cart.products.findIndex(product => product.id === payload.id), 1);
                    }
                }
                console.log(state.cart.products);
            }catch (e) {
                console.log(e);
            }
        },
        emptyCart(state, payload){
            state.cart.products = [];
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
