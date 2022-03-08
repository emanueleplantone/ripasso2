import { Component,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit {
  @Output() fromFiglioEvnt = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  clicca() {
    this.fromFiglioEvnt.emit("Soldati Gay");
    console.log("Ciao");
  }

}
