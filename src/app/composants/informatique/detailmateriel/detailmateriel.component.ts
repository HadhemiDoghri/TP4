import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'had-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {

showing:boolean = true; 
constructor(private materielService:MaterielService) { }
onshow()
{
  this.showing = !this.showing; 
}
materiels:Materiel[];
ngOnInit(): void {
  this.materiels = this.materielService.getMaterielById('2') ;
}

}
