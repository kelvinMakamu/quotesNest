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
        const index = this.quotes.indexOf(quote);
        if(index >= 0){
            this.quotes[index].showQuoteDetails = show;
        }
    }

    voteQuote(quote:any,type:number){
        const index = this.quotes.indexOf(quote);
        if( index >= 0){
            switch(type){
                case 0:
                this.quotes[index].upvotes = this.quotes[index].upvotes + 1;
                this.rankQuotes(); 
                break;

                case 1:
                this.quotes[index].downvotes = this.quotes[index].downvotes + 1; 
                break;
            }
        }
    }

    rankQuotes(): void{
        let upvoted: number   = Math.max.apply(Math,this.quotes.map(function(chosen){return chosen.upvotes;}));
        let upvotedQuote: any = this.quotes.find(function(selected){ return selected.upvotes == upvoted; });
        let favoriteIndex: number = this.quotes.indexOf(upvotedQuote);
        this.quotes.map((quote)=>{
            if(favoriteIndex === this.quotes.indexOf(quote)){
                this.quotes[favoriteIndex].isFavorite = true;
            }else{
                quote.isFavorite = false;
            }
        });
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