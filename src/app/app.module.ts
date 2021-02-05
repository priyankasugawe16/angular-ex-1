import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { JokeModule } from "./joke";
import { JokeListModule } from "./joke-list";

@NgModule({
  imports: [BrowserModule, FormsModule, JokeModule, JokeListModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
