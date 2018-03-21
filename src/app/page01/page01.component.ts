import {Component, OnDestroy, OnInit} from "@angular/core";
import {Page01Service} from "./page01.service";
import {Observable} from "rxjs/Observable";
import {NgRedux, select} from "@angular-redux/store";
import {AppState} from "../store/state";
import {Actions} from "../store/actions";
import {Router} from "@angular/router";
import {Product} from "../interface/product.interface";

// 最上位コンポーネント
@Component({
    selector: "app-sample",
    template: `
      <p>
        <!--商品選択エリア-->
        <app-sample-container
          [products]="products$ | async">
        </app-sample-container>
      </p>
      <p>
        <!--カートエリア-->
        <app-sample-cart [cart]="cart$ | async">
        </app-sample-cart>
      </p>
    `,
    providers: [Page01Service]　// 商品選択画面サービス
})
export class Page01Component implements OnInit, OnDestroy {

    @select() products$: Observable<Product[]>; //商品リスト
    @select() cart$: Observable<string[]>; //カート

    constructor(private service: Page01Service,
                private ngRedux: NgRedux<AppState>,
                private actions: Actions,
                private router: Router) {

    }

    ngOnInit() {
        // サービスにthisの参照を渡す
        this.service.init(this);
        //現在のURLを状態に登録
        this.actions.update({url: this.router.url});
    }

    ngOnDestroy(): void {
        // サービスのthisの参照を解放
        this.service.init(null);
    }

}
