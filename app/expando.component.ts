import {Component, animate, state, style, transition, trigger} from '@angular/core';
@Component({
  selector: 'my-expando',
  styles: [`
    .toggle-container {
      background-color:white;
      border:10px solid black;
      width:200px;
      text-align:center;
      line-height:100px;
      font-size:50px;
      box-sizing:border-box;
      overflow:hidden;
    }
  `],
  animations: [trigger('openClose',
    [
      state('collapsed', style({height: '0px', color: 'maroon', borderColor: 'maroon'})),
      state('void', style({opacity: '0', height: '0px', color: 'maroon', borderColor: 'maroon', transform: 'translateX(-100%)'})),
      state('expanded', style({height: '*', borderColor: 'green', color: 'green'})),
      transition('collapsed <=> expanded', 
        [animate(100, style({height: '250px'})), animate(200)]),
      transition('void => collapsed',
        [animate(1000, style({transform: 'translateX(0) scale(1)', opacity: '1'})), animate(200)]),

    ])
  ],
  template: `
    <button (click)="expand()">Open</button>
    <button (click)="collapse()">Closed</button>
    <hr />
    <div class="toggle-container" @openClose="stateExpression">
      Look at this box
    </div>
  `
})
export class MyExpandoCmp {
  stateExpression: string;
  constructor() { this.collapse(); }
  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }
}
