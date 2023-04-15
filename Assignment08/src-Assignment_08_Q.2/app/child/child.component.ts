import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public MyEvent = new EventEmitter();
  @Input() public GetMsgFromParent : any;
  
  sendMessage(){
    this.MyEvent.emit("Hello From Child");
  }
}
