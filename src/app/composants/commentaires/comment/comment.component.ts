import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaires';

@Component({
  selector: 'had-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() C: Commentaire = new Commentaire() ;
  constructor() { }

  ngOnInit(): void {
  }

}
