import {Component} from '@angular/core';

@Component({
  template: `
    <div>
      {{message}}
      {#switch value()}
        {:case 0} case 0
        {:case 1} case 1
        {:case 2} case 2
      {/switch}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  value = () => 1;
}
