import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { cardsData } from "src/app/utils/mockData";
import { CardData } from "src/app/utils/models";

@Component({
  selector: "app-post-page",
  templateUrl: "./post-page.component.html",
  styleUrls: ["./post-page.component.css"],
})
export class PostPageComponent {
  id: number = 0;
  post: CardData | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (value) => (this.id = Number(value.get("id")))
    );
    this.post = cardsData.find((card) => card.id === this.id);
  }
}
