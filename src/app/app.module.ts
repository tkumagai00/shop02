import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Page01Component} from "./page01/page01.component";
import {Page01ItemComponent} from "./page01/page01-item.component";
import {Page01ContainerComponent} from "./page01/page01-container.component";
import {Page01CartComponent} from "./page01/page01-cart.component";
import {Page02Component} from "./page02/page02.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./appRoutes";
import {NgRedux, NgReduxModule, DevToolsExtension} from "@angular-redux/store";
import {AppState, INIT_APP_STATE} from "./store/state";
import {rootReducer} from "./store/reducer";
import {Actions} from "./store/actions";
import {createLogger} from "redux-logger";
import {RootComponent} from "./root.component";
import {UtilityService} from "./service/utility.service";
import {UpdateService} from "./service/update.service";

@NgModule({
    declarations: [
        RootComponent,
        Page01Component,
        Page01ItemComponent,
        Page01ContainerComponent,
        Page01CartComponent,
        Page02Component,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        NgReduxModule
    ],
    providers: [
        Actions,
        UtilityService,
        UpdateService
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
    //  Reduxの設定
    constructor(ngRedux: NgRedux<AppState>,
                devTools: DevToolsExtension) {
        ngRedux.configureStore(rootReducer,
            <AppState>INIT_APP_STATE, [createLogger()],
            devTools.isEnabled() ? [devTools.enhancer()] : []
        );
    }
}
