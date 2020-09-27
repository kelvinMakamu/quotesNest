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

  addNewQuote(quote){
    quote.id           = uuid();
    quote.quote        = quote.quote;
    quote.author       = quote.author;
    quote.upvotes      = 0;
    quote.downvotes    = 0;
    quote.submitted_by = quote.submitted_by;
    quote.created_at = new Date(quote.created_at);
    this.quotes.push(quote);
    this.quotes.reverse();
  }

  upvoteQuote(){
    alert('UPvoted');
  }

  downvoteQuote(){
    alert('Downvoted');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
