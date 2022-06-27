import type {Store} from "vuex";
import type {Router} from "vue-router";

export async function redirect(code: string, store: Store<any>, router: Router) {
    switch (code) {
        case "401":
        case "500":
            await store.dispatch("logoutUser", {});
            await router.push("/login");
            break;

    }
}