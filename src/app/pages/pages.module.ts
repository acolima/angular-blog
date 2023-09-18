import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./main-page/main-page.component";
import { MainCardComponent } from "../components/main-card/main-card.component";
import { CardComponent } from "../components/card/card.component";
import { PostPageComponent } from "./post-page/post-page.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    CardComponent,
    MainCardComponent,
    MainPageComponent,
    PostPageComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [MainPageComponent, PostPageComponent],
})
export class PagesModule {}
