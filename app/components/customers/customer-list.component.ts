import { Visibility, visibilityProperty } from 'tns-core-modules/ui/layouts/layout-base';

import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';

// nativescript imports
import { Page } from 'ui/page';
import { SearchBar } from 'ui/search-bar';
import { View } from "ui/core/view";

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
    isSearching = false;
    @ViewChild("SearchContainer") SearchContainer: ElementRef;
    constructor(private page: Page){

    }

    fabTap() {
        console.log('fabe clicked');
        alert('Fab Awesome');
    }

    searchItem() {
        console.log('search tapped');
        this.page.actionBarHidden = true;
        this.isSearching = true;
        // this.animateSearchContainer();
    }

    searchClose(args) {
        console.log('search close event');
        this.isSearching = false;
        let searchbar: SearchBar = <SearchBar>args.object;
        searchbar.dismissSoftInput();
        this.page.actionBarHidden = false;
    }

    onSubmit(args) {
        console.log('submited');
    }

    onChange(args) {

    }

    animateSearchContainer(){
        console.log('inside animation');
        let searchcontainer = <View>this.SearchContainer.nativeElement;
        
        searchcontainer.animate({
            opacity: 1,
            duration: 3000
        })
    }

}



