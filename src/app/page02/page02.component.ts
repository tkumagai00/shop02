import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";
import {Router} from "@angular/router";
import {Actions} from "../store/actions";
import {Page02Service} from "./page02.service";

@Component({
    selector: "app-page02",
    template: `
      <div class="frame">
        <div class="title">注文確認</div>
        <p *ngFor="let cart of cart$|async">
          {{cart}}
        </p>
        <p>
          <button (click)="back()">戻る</button>
          <button (click)="done()">注文確定</button>
          <button (click)="saveState()">後で注文</button>
        </p>
      </div>`,
    providers: [Page02Service] // Page02専用サービス
})
export class Page02Component implements OnInit {

    // 選択済み商品リスト
    @select() cart$: Observable<string[]>;


    constructor(private router: Router,
                private actions: Actions,
                private service: Page02Service) {
    }

    ngOnInit() {
        this.actions.update({url: this.router.url});
    }

    //戻る
    back() {
        console.log("@@@ 商品選択へ戻る");
        this.router.navigate(["/"]);
    }

    //注文完了
    done() {
        this.actions.init();
        alert("注文完了しました");
        this.router.navigate(["/"]);
    }

    //後で注文
    saveState() {
        console.log("@@@ 後で注文");
        this.service.saveState();
        if (confirm("タブを閉じます")) {
            window.open("about:blank", "_self").close();
        }
    }

}
