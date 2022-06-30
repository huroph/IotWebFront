import type {Store} from "vuex";
import type {Router} from "vue-router";

export async function redirectError(code: number, store: Store<any>, router: Router) {
    console.log(code);
    switch (code) {
        case 401:
        case 500:
            await store.dispatch("logoutUser", {});
            await router.push("/login");
            break;

    }
}

export async function redirectIfNotAllowed(authorizedRoles: string[], store: Store<any>, router: Router) {
    if (!authorizedRoles.includes(store.state.user.role)) {
        await router.push('/');
        return false;
    }
    return true;
}