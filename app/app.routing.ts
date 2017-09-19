
// Angular Imports
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

// Nativescript Imports
import { NativeScriptRouterModule } from "nativescript-angular/router";

// Component Imports
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { CustomerListComponent } from './components/customers/customer-list.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "customers", component: CustomerListComponent },
    { path: "customer/:id", component: CustomerDetailComponent },
    { path: "login", component: LoginComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }