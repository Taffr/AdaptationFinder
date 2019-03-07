import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {RemoteDataService} from '../remote-data.service';
import {DatabaseService} from '../database.service';
@Component({
  selector: 'app-coupler',
  templateUrl: './coupler.component.html',
  styleUrls: ['./coupler.component.css']
})
export class CouplerComponent implements OnInit {

  constructor(private bottomSheet:MatBottomSheet) { }
  openBottomSheet(): void {
    this.bottomSheet.open(CouplerInputComponent);
  }
  ngOnInit() {
  }

}
@Component({
  selector: 'app-coupler-input',
  templateUrl: './couplerInput.component.html',
  styleUrls: ['./couplerInput.component.css']
})
export class CouplerInputComponent{
books:any[]=[];
movies:any[]=[];
movieSelection;
bookSelection;
  constructor(private bottomSheetRef: MatBottomSheetRef<CouplerInputComponent>, private rds:RemoteDataService, private db:DatabaseService){}
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  openLink(event:MouseEvent): void{
    this.bottomSheetRef.dismiss(),
    event.preventDefault();
	  }
   bookSubmit(event:any){
console.log("test");
	  this.rds.fetchBooks(event.target.value).then(results => {console.log(results); this.books = results});
	  }
	  movieSubmit(event:any){
	  this.rds.fetchMovies(event.target.value).then(results => this.movies = results);
	  }
	  databaseSubmit(event:any){
	  if(!(this.movieSelection && this.bookSelection)){ alert("please make BOTH selections");
	  }
	  else{
	  this.db.addConnection(this.movieSelection,this.bookSelection);
	  }
	  }
	  changeMovie(event:any){
          this.movieSelection = event.target.value;
	  }
	  changeBook(event:any){
	  this.bookSelection = event.target.value;
	  }
}
