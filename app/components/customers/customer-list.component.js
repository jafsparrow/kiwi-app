"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// nativescript imports
var page_1 = require("ui/page");
var CustomerListComponent = (function () {
    function CustomerListComponent(page) {
        this.page = page;
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
        this.isSearching = false;
    }
    CustomerListComponent.prototype.fabTap = function () {
        console.log('fabe clicked');
        alert('Fab Awesome');
    };
    CustomerListComponent.prototype.searchItem = function () {
        console.log('search tapped');
        this.page.actionBarHidden = true;
        this.isSearching = true;
        // this.animateSearchContainer();
    };
    CustomerListComponent.prototype.searchClose = function (args) {
        console.log('search close event');
        this.isSearching = false;
        var searchbar = args.object;
        searchbar.dismissSoftInput();
        this.page.actionBarHidden = false;
    };
    CustomerListComponent.prototype.onSubmit = function (args) {
        console.log('submited');
    };
    CustomerListComponent.prototype.onChange = function (args) {
    };
    CustomerListComponent.prototype.animateSearchContainer = function () {
        console.log('inside animation');
        var searchcontainer = this.SearchContainer.nativeElement;
        searchcontainer.animate({
            opacity: 1,
            duration: 3000
        });
    };
    __decorate([
        core_1.ViewChild("SearchContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], CustomerListComponent.prototype, "SearchContainer", void 0);
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'ns-customer-list',
            moduleId: module.id,
            templateUrl: './customer-list.component.html',
            styleUrls: [
                './customer-list.component.css'
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b21lci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUEwRTtBQUUxRSx1QkFBdUI7QUFDdkIsZ0NBQStCO0FBYS9CO0lBMkRJLCtCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQTFEOUIsY0FBUyxHQUFDO1lBQ047Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLHNFQUFzRTtnQkFDN0UsT0FBTyxFQUFFLFlBQVk7YUFDeEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixLQUFLLEVBQUUsc0VBQXNFO2dCQUM3RSxPQUFPLEVBQUUsWUFBWTthQUN4QjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsc0VBQXNFO2dCQUM3RSxPQUFPLEVBQUUsWUFBWTthQUN4QjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE9BQU8sRUFBRSxZQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLHNFQUFzRTtnQkFDN0UsT0FBTyxFQUFFLFlBQVk7YUFDeEI7U0FDSixDQUFBO1FBQ0QsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFJcEIsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxTQUFTLEdBQXlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEQsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFJO0lBRWIsQ0FBQztJQUVELHNEQUFzQixHQUF0QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLGVBQWUsR0FBUyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUUvRCxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXpDNkI7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsaUJBQVU7a0VBQUM7SUExRGpELHFCQUFxQjtRQVRqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1AsK0JBQStCO2FBQ2xDO1NBQ0osQ0FBQzt5Q0E2RDRCLFdBQUk7T0EzRHJCLHFCQUFxQixDQXFHakM7SUFBRCw0QkFBQztDQUFBLEFBckdELElBcUdDO0FBckdZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpc2liaWxpdHksIHZpc2liaWxpdHlQcm9wZXJ0eSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZSc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbmF0aXZlc2NyaXB0IGltcG9ydHNcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICd1aS9zZWFyY2gtYmFyJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1jdXN0b21lci1saXN0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAnLi9jdXN0b21lci1saXN0LmNvbXBvbmVudC5jc3MnXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJMaXN0Q29tcG9uZW50IHtcclxuICAgIGN1c3RvbWVycz1bXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cGVyIE1hbicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9mcmVlaWNvbnNob3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9lZGQvcGVyc29uLWdpcmwtZmxhdC5wbmcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiAnMjA5NTkgdGVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTcGlkZXIgTWFuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ZyZWVpY29uc2hvcC5jb20vd3AtY29udGVudC91cGxvYWRzL2VkZC9wZXJzb24tZ2lybC1mbGF0LnBuZycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcyMDk1OSB0ZXN0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogJ1NoYWt0aSBNYW4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZnJlZWljb25zaG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvZWRkL3BlcnNvbi1naXJsLWZsYXQucG5nJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJzIwOTU5IHRlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGUgTWFuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ZyZWVpY29uc2hvcC5jb20vd3AtY29udGVudC91cGxvYWRzL2VkZC9wZXJzb24tZ2lybC1mbGF0LnBuZycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcyMDk1OSB0ZXN0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgbmFtZTogJ0luY3JlZGlibGUgSHVsaycsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9mcmVlaWNvbnNob3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9lZGQvcGVyc29uLWdpcmwtZmxhdC5wbmcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiAnMjA5NTkgdGVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJcm9uIE1hbicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9mcmVlaWNvbnNob3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9lZGQvcGVyc29uLWdpcmwtZmxhdC5wbmcnLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiAnMjA5NTkgdGVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYXB0YWluIEFtZXJpY2EnLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZnJlZWljb25zaG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvZWRkL3BlcnNvbi1naXJsLWZsYXQucG5nJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJzIwOTU5IHRlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICBuYW1lOiAnV29uZGVyIFdvbWFuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ZyZWVpY29uc2hvcC5jb20vd3AtY29udGVudC91cGxvYWRzL2VkZC9wZXJzb24tZ2lybC1mbGF0LnBuZycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcyMDk1OSB0ZXN0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogOCxcclxuICAgICAgICAgICAgbmFtZTogJ1Rob3InLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZnJlZWljb25zaG9wLmNvbS93cC1jb250ZW50L3VwbG9hZHMvZWRkL3BlcnNvbi1naXJsLWZsYXQucG5nJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJzIwOTU5IHRlc3QnXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgaXNTZWFyY2hpbmcgPSBmYWxzZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJTZWFyY2hDb250YWluZXJcIikgU2VhcmNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmFiVGFwKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWJlIGNsaWNrZWQnKTtcclxuICAgICAgICBhbGVydCgnRmFiIEF3ZXNvbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hJdGVtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggdGFwcGVkJyk7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaGluZyA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltYXRlU2VhcmNoQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQ2xvc2UoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggY2xvc2UgZXZlbnQnKTtcclxuICAgICAgICB0aGlzLmlzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNlYXJjaGJhcjogU2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBzZWFyY2hiYXIuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoYXJncykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlU2VhcmNoQ29udGFpbmVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBhbmltYXRpb24nKTtcclxuICAgICAgICBsZXQgc2VhcmNoY29udGFpbmVyID0gPFZpZXc+dGhpcy5TZWFyY2hDb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBzZWFyY2hjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19