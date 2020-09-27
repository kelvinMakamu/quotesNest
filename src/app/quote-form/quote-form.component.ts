import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  model = new Quote('1432VCS45', 'The quick brown fox','Beryl Nyange',0,0,'', new Date());

  createNewQuote(){
    alert("Hooray");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
