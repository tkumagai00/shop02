import {AfterViewInit, Component, DoCheck, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Page01Service} from "./page01.service";
import {AppState} from "../store/state";
import {Product} from "../interface/product.interface";


@Component({
    selector: "app-sample-item",
    template: `
      <div
        class="item"
        (click)="clicked()"
      >
          <span *ngIf="product.checked" class="order">注文</span>
        {{product.name}}　{{product.message}}
      </div>
    `,
    styles: [`
      /*商品名表示*/
      .item {
        padding: 10px 0px 10px 10px;
        font-size: 1.5em;
      }

      /*注文マーク*/
      .order {
        background-color: orange;
        color: red;
        font-weight: bold;
      }
    `]
})
// 商品選択コンポーネント
export class Page01ItemComponent implements OnChanges {

    @Input() product: Product; //商品リスト
    @Input() checked: boolean; // 商品ごとのメッセージ

    constructor(private service: Page01Service) {
    }

    //変更検知
    ngOnChanges(changes: SimpleChanges): void {
        console.log("商品選択コンポーネント onChange:", changes);
    }

    // 商品名のクリック
    clicked() {
        console.log("@@@商品のクリック  " + this.product.name);
        this.service.clickedItem(this.product.id);
    }





}
