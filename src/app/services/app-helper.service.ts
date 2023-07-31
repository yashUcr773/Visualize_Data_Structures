import { Injectable } from "@angular/core";

@Injectable()
export class AppHelperService {
    constructor() {

    }

    launchLink(url: string, newTab = true) {
        let elem = document.getElementById('external_link') as HTMLAnchorElement;
        if (elem) {
            if (newTab) {
                elem.target = "_blank";
            }
            elem.href = url;
            elem.click();
        }
    }
}