import { Component, Input } from "@angular/core";
import { CardData } from "src/app/utils/models";

@Component({
  selector: "app-main-card",
  templateUrl: "./main-card.component.html",
  styleUrls: ["./main-card.component.css"],
})
export class MainCardComponent {
  @Input() card!: CardData;
}
