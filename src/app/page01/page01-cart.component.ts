import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Page01Service} from "./page01.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-sample-cart",
    template: `
      <div class="frame">
        <div class="title">カート</div>
        <p *ngFor="let item of cart">
          {{item}}
        </p>
        <p *ngIf="cart?.length">
          <button (click)="cancel()">全ての注文キャンセル</button>
          <button (click)="order()">注文に進む</button>
          <button (click)="saveState()">後で注文</button>
        </p>
      </div>`
})
// カート表示コンポーネント
export class Page01CartComponent implements OnChanges{

    @Input() cart: string[];

    constructor(private service: Page01Service,
                private router: Router) {
    }

    //変更検知
    ngOnChanges(changes: SimpleChanges): void {
        console.log("カート onChange:", changes);
    }

    cancel() {
        console.log("@@@ 全件キャンセル");
        this.service.clearCart();
    }

    order() {
        console.log("@@@ 注文へ進む");
        this.router.navigate(["/page02"]);
    }

    saveState() {
        console.log("@@@ 後で注文");
        this.service.saveState();
        if (confirm("タブを閉じます")) {
            window.open("about:blank", "_self").close();
        }
    }

}
