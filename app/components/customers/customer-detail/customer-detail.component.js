"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// nativescript imports
var page_1 = require("ui/page");
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(page) {
        this.page = page;
        this.orders = [
            {
                id: 12334,
                date: '30-05-2017',
                amount: 4000,
                payment: 'payed'
            },
            {
                id: 3453434,
                date: '17-08-2017',
                amount: 60393,
                payment: 'payed'
            },
            {
                id: 454645,
                date: '30-05-2017',
                amount: 4000,
                payment: 'payed'
            },
            {
                id: 23232,
                date: '30-05-2017',
                amount: 4000,
                payment: 'payed'
            },
            {
                id: 54612,
                date: '30-05-2017',
                amount: 4000,
                payment: 'payed'
            },
            {
                id: 232978,
                date: '30-05-2017',
                amount: 4000,
                payment: 'payed'
            }
        ];
        this.page.actionBarHidden = true;
    }
    CustomerDetailComponent = __decorate([
        core_1.Component({
            selector: 'ns-customer-detail',
            moduleId: module.id,
            templateUrl: './customer-detail.component.html',
            styleUrls: [
                './customer-detail.component.css'
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsdUJBQXVCO0FBQ3ZCLGdDQUErQjtBQVcvQjtJQXVDSSxpQ0FBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUF0QzlCLFdBQU0sR0FBRztZQUNMO2dCQUNJLEVBQUUsRUFBRSxLQUFLO2dCQUNULElBQUksRUFBRSxZQUFZO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsT0FBTzthQUNuQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxPQUFPO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsT0FBTzthQUNuQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxNQUFNO2dCQUNWLElBQUksRUFBRSxZQUFZO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsT0FBTzthQUNuQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxLQUFLO2dCQUNULElBQUksRUFBRSxZQUFZO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsT0FBTzthQUNuQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxLQUFLO2dCQUNULElBQUksRUFBRSxZQUFZO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsT0FBTzthQUNuQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxNQUFNO2dCQUNWLElBQUksRUFBRSxZQUFZO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsT0FBTzthQUNuQjtTQUNKLENBQUE7UUFFRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQXpDUSx1QkFBdUI7UUFUbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFO2dCQUNQLGlDQUFpQzthQUNwQztTQUNKLENBQUM7eUNBeUM0QixXQUFJO09BdkNyQix1QkFBdUIsQ0EyQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIG5hdGl2ZXNjcmlwdCBpbXBvcnRzXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1jdXN0b21lci1kZXRhaWwnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJy4vY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5jc3MnXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnQge1xyXG4gICAgb3JkZXJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQgOjEyMzM0LFxyXG4gICAgICAgICAgICBkYXRlOiAnMzAtMDUtMjAxNycsXHJcbiAgICAgICAgICAgIGFtb3VudDogNDAwMCxcclxuICAgICAgICAgICAgcGF5bWVudDogJ3BheWVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZCA6MzQ1MzQzNCxcclxuICAgICAgICAgICAgZGF0ZTogJzE3LTA4LTIwMTcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6IDYwMzkzLFxyXG4gICAgICAgICAgICBwYXltZW50OiAncGF5ZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIDo0NTQ2NDUsXHJcbiAgICAgICAgICAgIGRhdGU6ICczMC0wNS0yMDE3JyxcclxuICAgICAgICAgICAgYW1vdW50OiA0MDAwLFxyXG4gICAgICAgICAgICBwYXltZW50OiAncGF5ZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIDoyMzIzMixcclxuICAgICAgICAgICAgZGF0ZTogJzMwLTA1LTIwMTcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6IDQwMDAsXHJcbiAgICAgICAgICAgIHBheW1lbnQ6ICdwYXllZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQgOjU0NjEyLFxyXG4gICAgICAgICAgICBkYXRlOiAnMzAtMDUtMjAxNycsXHJcbiAgICAgICAgICAgIGFtb3VudDogNDAwMCxcclxuICAgICAgICAgICAgcGF5bWVudDogJ3BheWVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZCA6MjMyOTc4LFxyXG4gICAgICAgICAgICBkYXRlOiAnMzAtMDUtMjAxNycsXHJcbiAgICAgICAgICAgIGFtb3VudDogNDAwMCxcclxuICAgICAgICAgICAgcGF5bWVudDogJ3BheWVkJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==