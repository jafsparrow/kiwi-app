"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Nativescript imports
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
        this.user_name = "testing";
        this._password = "";
        this.isAuthenticating = false;
        this.page.actionBarHidden = true;
    }
    LoginComponent.prototype.focusPassword = function () {
        console.log('focuss press');
    };
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        console.log('back animation');
        // this.showMainContent();
    };
    LoginComponent.prototype.submit = function () {
        this.isAuthenticating = !this.isAuthenticating;
        setTimeout(function () {
            console.log('timeout inside');
        }, 2000);
        this.router.navigate(['/home']);
    };
    LoginComponent.prototype.forgotPassword = function () {
    };
    LoginComponent.prototype.showMainContent = function () {
        var formControls = this.formControls.nativeElement;
        var animations = [];
        animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
        // Kick off the animation queue
        new animation_1.Animation(animations, false).play();
    };
    __decorate([
        core_1.ViewChild("formControls"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "formControls", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            moduleId: module.id,
            templateUrl: './login.component.html',
            styleUrls: [
                './login-common.css',
                './login.component.css'
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6Qyx1QkFBdUI7QUFDdkIsZ0NBQStCO0FBRS9CLDBDQUF5QztBQVl6QztJQU1JLHdCQUFvQixJQUFVLEVBQ1YsTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpREFBd0IsR0FBeEIsVUFBeUIsVUFBVTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsMEJBQTBCO0lBQzlCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLFVBQVUsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFcEMsQ0FBQztJQUVELHVDQUFjLEdBQWQ7SUFFQSxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLElBQUksWUFBWSxHQUFTLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFNUcsK0JBQStCO1FBQy9CLElBQUkscUJBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFJNUMsQ0FBQztJQTVDMEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7d0RBQUM7SUFEM0MsY0FBYztRQVYxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFO2dCQUNQLG9CQUFvQjtnQkFDcEIsdUJBQXVCO2FBQzFCO1NBQ0osQ0FBQzt5Q0FRNEIsV0FBSTtZQUNGLGVBQU07T0FQekIsY0FBYyxDQThDMUI7SUFBRCxxQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vLyBOYXRpdmVzY3JpcHQgaW1wb3J0c1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1sb2dpbicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogW1xyXG4gICAgICAgICcuL2xvZ2luLWNvbW1vbi5jc3MnLFxyXG4gICAgICAgICcuL2xvZ2luLmNvbXBvbmVudC5jc3MnXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgQFZpZXdDaGlsZChcImZvcm1Db250cm9sc1wiKSBmb3JtQ29udHJvbHM6IEVsZW1lbnRSZWY7XHJcbiAgICB1c2VyX25hbWUgPSBcInRlc3RpbmdcIjtcclxuICAgIF9wYXNzd29yZCA9IFwiXCI7XHJcbiAgIFxyXG4gICAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9jdXNzIHByZXNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYmFjayBhbmltYXRpb24nKTtcclxuICAgICAgICAvLyB0aGlzLnNob3dNYWluQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSAhdGhpcy5pc0F1dGhlbnRpY2F0aW5nO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lb3V0IGluc2lkZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93TWFpbkNvbnRlbnQoKSB7XHJcbiAgICAgICAgbGV0IGZvcm1Db250cm9scyA9IDxWaWV3PnRoaXMuZm9ybUNvbnRyb2xzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbnMgPSBbXTtcclxuICAgICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IGZvcm1Db250cm9scywgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMSwgZGVsYXk6IDY1MCwgZHVyYXRpb246IDE1MCB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBLaWNrIG9mZiB0aGUgYW5pbWF0aW9uIHF1ZXVlXHJcbiAgICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19