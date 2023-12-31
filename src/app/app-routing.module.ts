import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostPageComponent } from "./pages/post-page/post-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "post/:id", component: PostPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
