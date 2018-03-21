// ステート情報の構造(型)
import {Product} from "../interface/product.interface";

export interface AppState {
    url?: string; // 表示しているコンポーネントのルーターパス
    cart?: string[]; // 選択済み商品リスト
    products?: Product[]; // 商品情報
}

// 状態の初期値.
export const INIT_APP_STATE: AppState = <AppState> {
    url: "/",
    cart: [],
    products:  [
        {id: 100, name: "商品０１", checked: false, message: ""},
        {id: 101, name: "商品０２", checked: false, message: ""},
        {id: 102, name: "商品０３", checked: false, message: ""}
        ]
};





