import {Injectable} from "@angular/core";
import {AppState, INIT_APP_STATE} from "../store/state";
import {Actions} from "../store/actions";
import {NgRedux} from "@angular-redux/store";
import {UtilityService} from "./utility.service";

@Injectable()
export class UpdateService {

    msgCounter = 0;
    msg = ["★★残りわずか", "人気上昇中↑", "↓↓値下げ", "大人気!!", "☆新入荷"];

    constructor(private actions: Actions,
                private ngRedux: NgRedux<AppState>,
                private utilityService: UtilityService) {
    }

    start() {
        setTimeout(this.updateMessage.bind(this), 1000);
    }

    updateMessage() {
        this.msgCounter++;
        let message = this.msg[this.msgCounter % this.msg.length];
        let products = INIT_APP_STATE.products;
        let productId = products[this.msgCounter % products.length].id;
        this.actions.updateMessage(productId, message);
        this.start();
    }
}
