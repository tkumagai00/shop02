import {Injectable} from "@angular/core";
import {Page01Component} from "./page01.component";
import {AppState} from "../store/state";
import {Actions} from "../store/actions";
import {NgRedux} from "@angular-redux/store";
import {Router} from "@angular/router";
import {UtilityService} from "../service/utility.service";

@Injectable()
export class Page01Service {

    componentRef: Page01Component;

    constructor(private actions: Actions,
                private ngRedux: NgRedux<AppState>,
                private router: Router,
                private utilityService: UtilityService) {
    }

    //状態の初期化
    init(ref: Page01Component) {
        this.componentRef = ref;
    }

    //商品名のクリック
    clickedItem(id: number) {
        console.log("@@@ 商品名のクリック id=" + id);
        this.actions.updateCart(id);
    }

    //カートのクリア
    clearCart() {
        console.log("@@@ clear cart");
        this.actions.clearCart();
    }

    //状態保存呼び出し
    saveState() {
        this.utilityService.saveState();
    }

}
