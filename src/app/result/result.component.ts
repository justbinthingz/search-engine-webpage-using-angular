import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GoogleResponse } from '../GoogleResponse.module';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  results: GoogleResponse;
  subs: Subscription[] = [];
  term;
  constructor(private searchService: SearchService,private router:Router) {
  }

  ngOnInit():void {
    const {term} = history.state;
    this.term = term;

    if(term){
      this.subs.push(
        this.searchService.getSearchData(term).subscribe(
          (data: GoogleResponse):void=>{
            this.results = data;
          })
        )

    }
  }

  search(form:NgForm):void {
    const {search_term} = form.value;
    console.log(search_term);
    this.term = search_term;
    this.subs.push(
      this.searchService.getSearchData(search_term).subscribe(
        (data: GoogleResponse):void=>{
          this.results = data;
        })
      )
  }

  //unsubscribe from active subscription
  ngOnDestroy(){
    this.subs.map(s => s.unsubscribe())
  }

}
