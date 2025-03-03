import {Component} from '@angular/core';

@Component({
  template: `
    {{message}}
    {#defer prefetch when isVisible() || isReady; prefetch on idle, timer(1337);
      prefetch on immediate, hover; prefetch on interaction(button); prefetch on viewport(button)}
    {{message}}
    {:placeholder}<button #button>Click me</button>
  {/defer}
  `,
})
export class MyApp {
  message = 'hello';
  isReady = true;

  isVisible() {
    return false;
  }
}
