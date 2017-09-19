import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Nativescript imports
import { Page } from 'ui/page';
import { View } from "ui/core/view";
import { Animation } from "ui/animation";

@Component({
    selector: 'ns-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: [
        './login-common.css',
        './login.component.css'
    ]
})

export class LoginComponent {
    @ViewChild("formControls") formControls: ElementRef;
    user_name = "testing";
    _password = "";
   
    isAuthenticating = false;
    constructor(private page: Page){
        this.page.actionBarHidden = true;
    }

    focusPassword() {
        console.log('focuss press');
    }

    startBackgroundAnimation(background) {
        console.log('back animation');
        // this.showMainContent();
    }

    submit() {
        this.isAuthenticating = !this.isAuthenticating;
        
    }

    forgotPassword() {

    }

    showMainContent() {
        let formControls = <View>this.formControls.nativeElement;
        let animations = [];
        animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
        
        // Kick off the animation queue
        new Animation(animations, false).play();


        
    }
}



