"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CustomerListComponent = (function () {
    function CustomerListComponent() {
        this.customers = [
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
        ];
    }
    CustomerListComponent.prototype.fabTap = function () {
        console.log('fabe clicked');
        alert('Fab Awesome');
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'ns-customer-list',
            moduleId: module.id,
            templateUrl: './customer-list.component.html',
            styleUrls: [
                './customer-list.component.css'
            ]
        })
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b21lci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEwQztBQVkxQztJQVRBO1FBVUksY0FBUyxHQUFDO1lBQ047Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLHNFQUFzRTtnQkFDN0UsT0FBTyxFQUFFLFlBQVk7YUFDeEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixLQUFLLEVBQUUsc0VBQXNFO2dCQUM3RSxPQUFPLEVBQUUsWUFBWTthQUN4QjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsc0VBQXNFO2dCQUM3RSxPQUFPLEVBQUUsWUFBWTthQUN4QjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLHNFQUFzRTtnQkFDN0UsT0FBTyxFQUFFLFlBQVk7YUFDeEI7U0FDSixDQUFBO0lBV0wsQ0FBQztJQVBHLHNDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBL0RRLHFCQUFxQjtRQVRqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1AsK0JBQStCO2FBQ2xDO1NBQ0osQ0FBQztPQUVXLHFCQUFxQixDQW1FakM7SUFBRCw0QkFBQztDQUFBLEFBbkVELElBbUVDO0FBbkVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtY3VzdG9tZXItbGlzdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJy4vY3VzdG9tZXItbGlzdC5jb21wb25lbnQuY3NzJ1xyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyTGlzdENvbXBvbmVudCB7XHJcbiAgICBjdXN0b21lcnM9W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXBlciBNYW4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZnJlZWljb25zaG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvZWRkL3BlcnNvbi1naXJsLWZsYXQucG5nJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJzIwOTU5IHRlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3BpZGVyIE1hbicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9mcmVlaWNvbnNob3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9lZGQvcGVyc29uLWdpcmwtZmxhdC5wbmcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiAnMjA5NTkgdGVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFrdGkgTWFuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ZyZWVpY29uc2hvcC5jb20vd3AtY29udGVudC91cGxvYWRzL2VkZC9wZXJzb24tZ2lybC1mbGF0LnBuZycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcyMDk1OSB0ZXN0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogJ0hlIE1hbicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9mcmVlaWNvbnNob3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9lZGQvcGVyc29uLWdpcmwtZmxhdC5wbmcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiAnMjA5NTkgdGVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmNyZWRpYmxlIEh1bGsnLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZnJlZWljb25zaG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvZWRkL3BlcnNvbi1naXJsLWZsYXQucG5nJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJzIwOTU5IHRlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICBuYW1lOiAnSXJvbiBNYW4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZnJlZWljb25zaG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvZWRkL3BlcnNvbi1naXJsLWZsYXQucG5nJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJzIwOTU5IHRlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2FwdGFpbiBBbWVyaWNhJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ZyZWVpY29uc2hvcC5jb20vd3AtY29udGVudC91cGxvYWRzL2VkZC9wZXJzb24tZ2lybC1mbGF0LnBuZycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcyMDk1OSB0ZXN0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNyxcclxuICAgICAgICAgICAgbmFtZTogJ1dvbmRlciBXb21hbicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9mcmVlaWNvbnNob3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9lZGQvcGVyc29uLWdpcmwtZmxhdC5wbmcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiAnMjA5NTkgdGVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaG9yJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ZyZWVpY29uc2hvcC5jb20vd3AtY29udGVudC91cGxvYWRzL2VkZC9wZXJzb24tZ2lybC1mbGF0LnBuZycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcyMDk1OSB0ZXN0J1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcblxyXG5cclxuICAgIGZhYlRhcCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmFiZSBjbGlja2VkJyk7XHJcbiAgICAgICAgYWxlcnQoJ0ZhYiBBd2Vzb21lJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19