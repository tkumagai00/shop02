import {AppState} from "./state";
import {NgRedux, dispatch} from "@angular-redux/store";
import {Injectable} from "@angular/core";
import * as merge from "deepmerge";

/**
 * Reduxのアクション定義
 */
@Injectable()
export class Actions {

    //action識別定数
    static UPDATE_STATE = "UPDATE_STATE";
    static INIT_STATE = "INIT_STATE";
    static CLEAR_CART = "CLEAR_CART";
    static UPDATE_CART = "UPDATE_CART";
    static UPDATE_MESSAGE = "UPDATE_MESSAGE";

    constructor(private ngRedux: NgRedux<AppState>) {
    }

    //状態の初期化
    @dispatch()
    init = () => {
        return {type: Actions.INIT_STATE};
    }


//状態の任意のプロパティ変更
    @dispatch()
    update = (newValue: AppState) => {
        return {type: Actions.UPDATE_STATE, payload: newValue};
    }

//　カートのクリア（全ての注文をキャンセル）
    @dispatch()
    clearCart = () => {
        let products = this.getState().products;
        let updateProducts =
            products.map(
                (prod) => {
                    prod.checked = false;
                    return prod;
                });
        let updateState = {
            cart: null,
            products: updateProducts
        };
        return {type: Actions.CLEAR_CART, payload: updateState};
    }

//カートの更新（商品選択の変更）
    @dispatch()
    updateCart = (productId: number) => {
        let cart = [];
        let products = this.getState().products;
        let updateProducts = products.map(
            (product) => {
                if (product.id === productId) {
                    product.checked = !product.checked;
                }
                if (product.checked) {
                    cart.push(product.name);
                }
                return product;
            });
        let updateState = {
            cart,
            products: updateProducts
        };
        return {type: Actions.UPDATE_CART, payload: updateState};
    }

//商品メッセージの変更
    @dispatch()
    updateMessage = (productId: number, message: string) => {
        let cart = this.getState().cart;
        let products = this.getState().products;
        let updateProducts =
            products.map(
                (product) => {
                    if (product.id === productId) {
                        product.message = message;
                    }
                    return product;
                });
        let updateState = {
            cart,
            products: updateProducts
        };
        return {type: Actions.UPDATE_MESSAGE, payload: updateState};
    }

// 現在の状態オブジェクトのコピーを取得
    getState(): AppState {
        let state = this.ngRedux.getState();
        return merge({}, state, {clone: true});
    }

}
