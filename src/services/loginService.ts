import {HttpService} from "@/services/http.service";
import {User} from "@/models/user.model";
import {store} from "@/store/store";

export class LoginService extends HttpService {

    constructor() {
        super();
    }

    async loginUser(email:string, password:string){
        try {
            const result = await this.http.post<{ user: User }>('auth/login', {email: email, password: password})
            // store into local storage
            localStorage.setItem('token', result.data.user.accessToken);
            // store into store object
            await store.dispatch('loginUser', result.data.user);
            console.log(store.state.user);
            return {data: result.data.user, code: 200};
        }catch (e) {
            if (!e.response) {
                console.log(e);
                return {data: 'Internal server error', code: 500};
            }

            return {data: e.response.data, code: e.response.status};
        }
    }
}
