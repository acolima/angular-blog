import { Component } from "@angular/core";
import { cardsData } from "src/app/utils/mockData";
import { CardData } from "src/app/utils/models";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent {
  mainCard!: CardData | undefined;
  smallCards: CardData[] = [];

  ngOnInit() {
    this.mainCard = cardsData.find((card) => card.type === "main");
    this.smallCards = cardsData.filter((card) => card.type !== "main");
  }
}
