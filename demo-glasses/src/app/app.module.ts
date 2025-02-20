import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, registerElement } from "@nativescript/angular";
import { PagerModule } from 'nativescript-pager/angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

registerElement("AR", () => require("nativescript-ar").AR);

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    PagerModule
  ],
  declarations: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
