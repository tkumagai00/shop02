import {Component, OnInit} from "@angular/core";
import {UpdateService} from "./service/update.service";
import {UtilityService} from "./service/utility.service";

@Component({
    selector: "app-root",
    template: "<router-outlet></router-outlet> "
})
export class RootComponent implements OnInit {

    ngOnInit(): void {
        //this.updateService.start();
        this.utilityService.restoreState();
    }

    constructor(
        private updateService: UpdateService,
        private utilityService: UtilityService
    ) { }

}
