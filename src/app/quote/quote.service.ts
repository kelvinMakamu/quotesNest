import { Injectable } from '@angular/core';
import { Quote } from '../quote';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class QuoteService{

    quotes: Quote[] = [  
        new Quote(uuid(),'Watch finding Nemo', 'Geofrey',0,0,'Jackson',new Date(2019,9,14)),
        new Quote(uuid(),'Graduating', 'Getrude',0,0,'Jared',new Date(2018,9,14)),
        new Quote(uuid(),'Manipulating', 'Lincoln',0,0,'Jackline',new Date(2020,9,14)),
        new Quote(uuid(),'Brand well', 'Linda',0,0,'Joyce',new Date(2007,9,14)),
    ];

    getQuotes(){
        return this.quotes;
    }

    addQuote(quote:any){
        quote.id           = uuid();
        quote.quote        = quote.quote;
        quote.author       = quote.author;
        quote.upvotes      = 0;
        quote.downvotes    = 0;
        quote.submitted_by = quote.submitted_by;
        quote.created_at   = new Date(quote.created_at);
        this.quotes.unshift(quote);
    }

    toggleQuoteDetails(quote:any,show:boolean){
        const index = this.quotes.indexOf(quote);
        if( index >= 0){
            this.quotes[index].showQuoteDetails = show;
        }
    }

    voteQuote(quote:any,type:number){
        const index = this.quotes.indexOf(quote);
        if( index >= 0){
            switch(type){
                case 0:
                this.quotes[index].upvotes = this.quotes[index].upvotes + 1; 
                break;

                case 1:
                this.quotes[index].downvotes = this.quotes[index].downvotes + 1; 
                break;
            }
        }
    }

    deleteQuote(quote:any){
        const index = this.quotes.indexOf(quote);
        if( index>= 0){
            let toDelete = confirm(`Are you sure you want to delete the quote: ${this.quotes[index].quote}?`)
            if(toDelete){
                this.quotes.splice(index,1);
            }
        }
    }
}