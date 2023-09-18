import { Component, Input } from "@angular/core";
import { CardData } from "src/app/utils/models";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() card!: CardData;
}
