import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Product} from "../interface/product.interface";

@Component({
    selector: "app-sample-container",
    template: `
      <div class="frame">
        <div class="title">商品選択</div>
        <div *ngFor="let product of products">
          <!--子コンポーネントにプロパティ経由で値渡し-->
          <app-sample-item
            [product]="product"
            [checked]="product.checked">
          </app-sample-item>
        </div>
      </div>
    `
})
// 商品選択コンポーネントを収容するコンテナコンポーネント
export class Page01ContainerComponent implements OnChanges {

    // 親コンポーネントからプロパティ経由で値の受け取り
    @Input() products: Product[];

    //変更検知
    ngOnChanges(changes: SimpleChanges): void {
        console.log("商品選択コンテナ onChange:", changes);
    }

}
