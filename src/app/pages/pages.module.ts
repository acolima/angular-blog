import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./main-page/main-page.component";
import { MainCardComponent } from "../components/main-card/main-card.component";
import { CardComponent } from "../components/card/card.component";

@NgModule({
  declarations: [CardComponent, MainCardComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class PagesModule {}
