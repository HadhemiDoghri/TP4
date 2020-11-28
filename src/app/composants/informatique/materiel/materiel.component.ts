import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'had-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
@Input('m') M:Materiel;
  constructor() { }

  ngOnInit(): void {
  }

}
