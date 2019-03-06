import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.css']
})
export class MovietableComponent implements OnInit {
  @Input() movies: any;
  displayedColumns: string[] = ["title", "director", "imdb"];
  constructor() { }
  onClick(): void{
     alert("clicked movie");
  }
  ngOnInit() {
  }

}
