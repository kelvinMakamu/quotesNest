export class Quote {
    showQuoteDetails: boolean;
    constructor(public id: string, public quote: string, public author: string, public upvotes: number,
        public downvotes: number, public submitted_by: string, public created_at: Date){
            this.showQuoteDetails=false;
    }
}
