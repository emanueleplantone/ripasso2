import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ripasso2';

  testo:string = "";

  ngOnInit(): void {
    
  }

  fromFiglioEvntHandlr(evntData:string){
    this.testo = evntData;
  }
}
