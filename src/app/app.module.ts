import { BrowserModule } from "@angular/platform-browser";
import { AlertsService } from "../app/alert-service/alerts.service";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpModule } from "@ngx-progressbar/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GoalComponent } from "./goal/goal.component";
import { GoalDetailsComponent } from "./goal-details/goal-details.component";
import { StrikethroughDirective } from "./strikethrough.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
