import { Component, OnInit } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote[] = [  
    new Quote(uuid(),'Watch finding Nemo', 'Geofrey',0,0,'Jackson',new Date(2019,9,14)),
    new Quote(uuid(),'Graduating', 'Getrude',0,0,'Jared',new Date(2018,9,14)),
    new Quote(uuid(),'Manipulating', 'Lincoln',0,0,'Jackline',new Date(2020,9,14)),
    new Quote(uuid(),'Brand well', 'Linda',0,0,'Joyce',new Date(2007,9,14)),
  ];

  addNewQuote(quoted){
    quoted.id           = uuid();
    quoted.quote        = quoted.quote;
    quoted.author       = quoted.author;
    quoted.upvotes      = 0;
    quoted.downvotes    = 0;
    quoted.submitted_by = quoted.submitted_by;
    quoted.created_at   = new Date(quoted.created_at);
    this.quotes.unshift(quoted);
  }

  upvoteQuote(index: number){
    this.quotes[index].upvotes = this.quotes[index].upvotes + 1; 
  }

  downvoteQuote(index: number){
    this.quotes[index].downvotes = this.quotes[index].downvotes + 1; 
  }

  displayQuoteDetails(index: number){
    this.quotes[index].showQuoteDetails = true;
  }

  hideQuoteDetails(index: number){
    this.quotes[index].showQuoteDetails = false;
  }

  deleteQuote(index: number){
    let toDelete = confirm(`Are you sure you want to delete the quote: ${this.quotes[index].quote}?`)
    if(toDelete){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
