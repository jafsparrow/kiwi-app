"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// nativescript imports
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(page) {
        this.page = page;
        this.page.actionBarHidden = true;
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-app-homepage',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.common.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RDtBQUU1RCx1QkFBdUI7QUFDdkIsZ0NBQStCO0FBUy9CO0lBQ0ksdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBSFEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUM3QyxDQUFDO3lDQUc0QixXQUFJO09BRHJCLGFBQWEsQ0FJekI7SUFBRCxvQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBQQUNLQUdFX1JPT1RfVVJMIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBuYXRpdmVzY3JpcHQgaW1wb3J0c1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtYXBwLWhvbWVwYWdlJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jb21tb24uY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG59Il19