import type {Store} from "vuex";
import type {Router} from "vue-router";

export function redirect(code: string, store: Store<any>, router: Router) {
    switch (code) {
        case "401":
        case "500":
            store.dispatch("logoutUser", {});
            router.push("/login");
            break;

    }
}