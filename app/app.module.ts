import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// Services imports
import { ItemService } from "./item/item.service";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpModule } from "nativescript-angular/http";

// Components imports.
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { CustomerListComponent } from './components/customers/customer-list.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        CustomerListComponent,
        CustomerDetailComponent,
        LoginComponent,
        HomeComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
