import {Routes} from "@angular/router";
import {Page01Component} from "./page01/page01.component";
import {Page02Component} from "./page02/page02.component";

export const appRoutes: Routes = [
    {
        path: "",
        component: Page01Component
    },
    {
        path: "page02",
        component: Page02Component
    }
];