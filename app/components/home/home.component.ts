import { Component, PACKAGE_ROOT_URL } from '@angular/core';

// nativescript imports
import { Page } from 'ui/page';

@Component({
    selector: 'ns-app-homepage',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.common.css']
})

export class HomeComponent {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }
}