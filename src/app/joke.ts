import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block mr-4 ml-4">
    <h4 class="card-title">{{setup}}</h4>
    <p class="card-text">{{punchline}}</p>
  </div>    
  `
})
export class JokeComponent {
  setup: string;
  punchline: string;
  constructor(){
    this.setup=`What did the cheese say when it looked in the mirror?`
    this.punchline=`Halloumi (Hello Me)`
  }
}

@NgModule({
  imports: [BrowserModule],
  exports:[JokeComponent],
  declarations: [JokeComponent],
  bootstrap: [JokeComponent]
})
export class JokeModule {
}