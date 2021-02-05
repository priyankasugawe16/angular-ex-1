export class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor(su: string, pl: string) {
    this.punchline = pl;
    this.setup = su;
    this.hide = true;
  }
}
