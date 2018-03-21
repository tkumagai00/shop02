import {Injectable} from "@angular/core";
import {AppState, INIT_APP_STATE} from "../store/state";
import {Actions} from "../store/actions";
import {NgRedux} from "@angular-redux/store";
import {Router} from "@angular/router";

@Injectable()
export class UtilityService {

    constructor(private actions: Actions,
                private ngRedux: NgRedux<AppState>,
                private router: Router) {
    }

    //ステートの保存
    saveState() {
        console.log("@@@@ ステートの保存開始");
        let state = this.ngRedux.getState();
        localStorage.setItem("state", JSON.stringify(state));
    }

    // ステートの復元
    restoreState() {
        let jsonStr = localStorage.getItem("state");
        if (!jsonStr) {
            return;
        }
        console.log("@@@@ ステートの復元開始");
        let state = JSON.parse(jsonStr);
        localStorage.removeItem("state");
        this.actions.update(state);
        //復元ページがトップページ以外は該当URLへジャンプ
        if (state.url !== "/") {
            this.router.navigate([state.url]);
        }
    }
}
