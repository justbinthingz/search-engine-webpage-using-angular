import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  search(form:NgForm):void {
    console.log("here...")
    const {search_term} = form.value;
    console.log(search_term);

    this.router.navigateByUrl('/results', {state:{term:search_term}}).then();
  }

}
