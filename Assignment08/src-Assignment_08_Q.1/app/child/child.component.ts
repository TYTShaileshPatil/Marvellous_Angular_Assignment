import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @Output() public MyEvent = new EventEmitter();
  OnClickButton(){ 
   this.MyEvent.emit((<HTMLInputElement>document.getElementById("inputTxt")).value);
  }
}
