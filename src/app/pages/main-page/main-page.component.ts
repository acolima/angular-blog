import { Component } from "@angular/core";
import { mainCardData, smallCardData } from "src/app/utils/mockData";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent {
  mainCard = mainCardData;
  smallCards = smallCardData;
}
