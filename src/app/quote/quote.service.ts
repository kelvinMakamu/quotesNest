import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Quote } from '../quote';

@Injectable({
    providedIn: 'root'
})
export class QuoteService{

    quotes: Quote[] = [  
        new Quote(uuid(),'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson Mandela',0,0,'Makamu Kelvin',new Date(2020,8,14),false),
        new Quote(uuid(),'The way to get started is to quit talking and begin doing.', 'Walt Disney',0,0,'Kelvin Makamu',new Date(2020,8,15),false),
        new Quote(uuid(),'If life were predictable it would cease to be life, and be without flavor.', 'Eleanor Roosevelt',0,0,'Makamu Kelvin',new Date(2020,8,16),false),
        new Quote(uuid(),'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.', 'James Cameron',0,0,'Kelvin Makamu',new Date(2020,8,18),false),
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
        quote.isFavorite   = false;
        this.quotes.unshift(quote);
    }

    toggleQuoteDetails(quote:any,show:boolean){
        this.getQuotes().indexOf(quote) >= 0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].showQuoteDetails = show : this.getQuotes()[this.getQuotes().indexOf(quote)].showQuoteDetails = false;
    }

    voteQuote(quote:any,type:number){
        if(this.getQuotes().indexOf(quote) >= 0){
            type === 0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].upvotes++ : this.getQuotes()[this.getQuotes().indexOf(quote)].downvotes++;
            this.rankQuotes(); 
        }
    }

    rankQuotes(): void{
        let upvoted: number   = Math.max.apply(Math,this.getQuotes().map(function(chosen){return chosen.upvotes;}));
        if( upvoted > 0){
            let upvotedQuote: any = this.getQuotes().find(function(selected){ return selected.upvotes == upvoted; });
            let favIndex: number  = this.getQuotes().indexOf(upvotedQuote);
            this.getQuotes().map((quote)=>{
                if(favIndex === this.getQuotes().indexOf(quote)){
                    this.quotes[favIndex].isFavorite = true;
                }else{
                    quote.isFavorite = false;
                }
            });
        }
    }

    deleteQuote(quote:any){
        if(this.getQuotes().indexOf(quote)>= 0){
            let toDelete = confirm(`Are you sure you want to delete the quote: ${this.quotes[this.quotes.indexOf(quote)].quote}?`)
            if(toDelete){
                this.getQuotes().splice(this.getQuotes().indexOf(quote),1);
            }
        }
        this.rankQuotes();
    }
}