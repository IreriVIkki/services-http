import { Component, OnInit } from "@angular/core";
import { Goal } from "../goal";
import { GoalService } from "../goals/goal.service";
import { AlertsService } from "../alert-service/alerts.service";
import { QuoteRequestService } from "../quote-http/quote-request.service";
import { HttpClient } from "@angular/common/http";
import { Quote } from "../quote-class/quote";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  providers: [GoalService, QuoteRequestService],
  styleUrls: ["./goal.component.css"]
})
export class GoalComponent implements OnInit {
  quote: Quote;
  goals: Goal[];
  alertService: AlertsService;

  constructor(
    goalService: GoalService,
    alertService: AlertsService,
    private quoteService: QuoteRequestService
  ) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
    console.log(this.goals);
  }

  toogleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
      this.alertService.alertMe("Goal has been deleted");
    }
  }

  ngOnInit() {
    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;
  }
}
