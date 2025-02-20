import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {

    constructor(private routerExtensions: RouterExtensions) {
        // routerExtensions.navigate(["/search"]);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
