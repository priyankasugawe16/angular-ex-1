import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Joke } from "./joke-domain-model";

@Component({
  selector:`joke-list`,
  template:`
  ---------------------------
  <div  class="card" *ngFor="let j of jokesList">
  <h4>{{j.setup}}</h4>
  <p [hidden]="j.hide">{{j.punchline}}</p>
  <button (click)="j.hide = !j.hide"> tell me</button>
  </div>
  
  `
})
export class JokeListComponent {
  jokesList: Joke[];
  constructor() {
    this.jokesList =[
            new Joke("What did the cheese say when it looked in the mirror?","Hello-Me (Halloumi)"),
       new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me","I thought ‘That’s not very mature’")
    ]
  }
}

@NgModule({
  imports:[BrowserModule],
  exports:[JokeListComponent],
  declarations:[JokeListComponent],
  bootstrap:[JokeListComponent]
})

export class JokeListModule {

}