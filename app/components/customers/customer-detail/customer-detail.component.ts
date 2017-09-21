import { Component } from '@angular/core';

// nativescript imports
import { Page } from 'ui/page';

@Component({
    selector: 'ns-customer-detail',
    moduleId: module.id,
    templateUrl: './customer-detail.component.html',
    styleUrls: [
        './customer-detail.component.css'
    ]
})

export class CustomerDetailComponent {
    orders = [
        {
            id :12334,
            date: '30-05-2017',
            amount: 4000,
            payment: 'payed'
        },
        {
            id :3453434,
            date: '17-08-2017',
            amount: 60393,
            payment: 'payed'
        },
        {
            id :454645,
            date: '30-05-2017',
            amount: 4000,
            payment: 'payed'
        },
        {
            id :23232,
            date: '30-05-2017',
            amount: 4000,
            payment: 'payed'
        },
        {
            id :54612,
            date: '30-05-2017',
            amount: 4000,
            payment: 'payed'
        },
        {
            id :232978,
            date: '30-05-2017',
            amount: 4000,
            payment: 'payed'
        }
    ]
    constructor(private page: Page){
        this.page.actionBarHidden = true;
    }

}



