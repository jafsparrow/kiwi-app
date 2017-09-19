"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Nativescript imports
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var LoginComponent = (function () {
    function LoginComponent(page) {
        this.page = page;
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
        __metadata("design:paramtypes", [page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHVCQUF1QjtBQUN2QixnQ0FBK0I7QUFFL0IsMENBQXlDO0FBWXpDO0lBTUksd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSjlCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpREFBd0IsR0FBeEIsVUFBeUIsVUFBVTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsMEJBQTBCO0lBQzlCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBRW5ELENBQUM7SUFFRCx1Q0FBYyxHQUFkO0lBRUEsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxJQUFJLFlBQVksR0FBUyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUN6RCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTVHLCtCQUErQjtRQUMvQixJQUFJLHFCQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBSTVDLENBQUM7SUFyQzBCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVO3dEQUFDO0lBRDNDLGNBQWM7UUFWMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDUCxvQkFBb0I7Z0JBQ3BCLHVCQUF1QjthQUMxQjtTQUNKLENBQUM7eUNBUTRCLFdBQUk7T0FOckIsY0FBYyxDQXVDMUI7SUFBRCxxQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gTmF0aXZlc2NyaXB0IGltcG9ydHNcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtbG9naW4nLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAnLi9sb2dpbi1jb21tb24uY3NzJyxcclxuICAgICAgICAnLi9sb2dpbi5jb21wb25lbnQuY3NzJ1xyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIEBWaWV3Q2hpbGQoXCJmb3JtQ29udHJvbHNcIikgZm9ybUNvbnRyb2xzOiBFbGVtZW50UmVmO1xyXG4gICAgdXNlcl9uYW1lID0gXCJ0ZXN0aW5nXCI7XHJcbiAgICBfcGFzc3dvcmQgPSBcIlwiO1xyXG4gICBcclxuICAgIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9jdXNzIHByZXNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYmFjayBhbmltYXRpb24nKTtcclxuICAgICAgICAvLyB0aGlzLnNob3dNYWluQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSAhdGhpcy5pc0F1dGhlbnRpY2F0aW5nO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93TWFpbkNvbnRlbnQoKSB7XHJcbiAgICAgICAgbGV0IGZvcm1Db250cm9scyA9IDxWaWV3PnRoaXMuZm9ybUNvbnRyb2xzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbnMgPSBbXTtcclxuICAgICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IGZvcm1Db250cm9scywgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMSwgZGVsYXk6IDY1MCwgZHVyYXRpb246IDE1MCB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBLaWNrIG9mZiB0aGUgYW5pbWF0aW9uIHF1ZXVlXHJcbiAgICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19