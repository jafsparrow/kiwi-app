
import { Component } from '@angular/core';


@Component({
    selector: 'ns-customer-list',
    moduleId: module.id,
    templateUrl: './customer-list.component.html',
    styleUrls: [
        './customer-list.component.css'
    ]
})

export class CustomerListComponent {
    customers=[
        {
            id: 1,
            name: 'Super Man',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 2,
            name: 'Spider Man',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 3,
            name: 'Shakti Man',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 3,
            name: 'He Man',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 4,
            name: 'Incredible Hulk',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 5,
            name: 'Iron Man',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 6,
            name: 'Captain America',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 7,
            name: 'Wonder Woman',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        },
        {
            id: 8,
            name: 'Thor',
            image: 'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png',
            address: '20959 test'
        }
    ]



    fabTap() {
        console.log('fabe clicked');
        alert('Fab Awesome');
    }



}



