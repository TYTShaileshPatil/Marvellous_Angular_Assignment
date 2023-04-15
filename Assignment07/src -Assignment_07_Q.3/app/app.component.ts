import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public VarValue = "Marvellous Infosystem";

  fun():void{
     this.VarValue = "Educating For Better tomorrow";
  }
  
}
