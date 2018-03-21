import {Injectable} from "@angular/core";
import {UtilityService} from "../service/utility.service";

@Injectable()
export class Page02Service {


    constructor(
                private utilityService: UtilityService) {
    }

    //状態保存
    saveState() {
        this.utilityService.saveState();
    }

}
