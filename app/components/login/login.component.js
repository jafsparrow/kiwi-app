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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6Qyx1QkFBdUI7QUFDdkIsZ0NBQStCO0FBRS9CLDBDQUF5QztBQVl6QztJQU1JLHdCQUFvQixJQUFVLEVBQ1YsTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpREFBd0IsR0FBeEIsVUFBeUIsVUFBVTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsMEJBQTBCO0lBQzlCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtJQUVBLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxZQUFZLEdBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDekQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUU1RywrQkFBK0I7UUFDL0IsSUFBSSxxQkFBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUk1QyxDQUFDO0lBdkMwQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt3REFBQztJQUQzQyxjQUFjO1FBVjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUU7Z0JBQ1Asb0JBQW9CO2dCQUNwQix1QkFBdUI7YUFDMUI7U0FDSixDQUFDO3lDQVE0QixXQUFJO1lBQ0YsZUFBTTtPQVB6QixjQUFjLENBeUMxQjtJQUFELHFCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbi8vIE5hdGl2ZXNjcmlwdCBpbXBvcnRzXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJy4vbG9naW4tY29tbW9uLmNzcycsXHJcbiAgICAgICAgJy4vbG9naW4uY29tcG9uZW50LmNzcydcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKFwiZm9ybUNvbnRyb2xzXCIpIGZvcm1Db250cm9sczogRWxlbWVudFJlZjtcclxuICAgIHVzZXJfbmFtZSA9IFwidGVzdGluZ1wiO1xyXG4gICAgX3Bhc3N3b3JkID0gXCJcIjtcclxuICAgXHJcbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb2N1c3MgcHJlc3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEJhY2tncm91bmRBbmltYXRpb24oYmFja2dyb3VuZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdiYWNrIGFuaW1hdGlvbicpO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvd01haW5Db250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9ICF0aGlzLmlzQXV0aGVudGljYXRpbmc7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01haW5Db250ZW50KCkge1xyXG4gICAgICAgIGxldCBmb3JtQ29udHJvbHMgPSA8Vmlldz50aGlzLmZvcm1Db250cm9scy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBhbmltYXRpb25zID0gW107XHJcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBmb3JtQ29udHJvbHMsIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sIG9wYWNpdHk6IDEsIGRlbGF5OiA2NTAsIGR1cmF0aW9uOiAxNTAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gS2ljayBvZmYgdGhlIGFuaW1hdGlvbiBxdWV1ZVxyXG4gICAgICAgIG5ldyBBbmltYXRpb24oYW5pbWF0aW9ucywgZmFsc2UpLnBsYXkoKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==