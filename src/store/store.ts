import App from '../App.vue'
import {createStore} from 'vuex'
import {createApp} from "vue";

export const store = createStore({
    state: {

        token:{
            token: null,
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
    },
    actions: {
        storeUser(context, payload){
            context.commit("storeUser",payload)
        },

        loginUser(context, payload){
            context.commit("loginUser",payload)
            context.commit("storeUser", payload);
        },
    },
})
