export class ExtractMethod1 {
    private name: string;
    private amounts: Array<number>;

    constructor(name: string, amounts: Array<number>) {
        this.name = name;
        this.amounts = amounts;
    }

    public printOwing() {
        this.printBanner();
        this.printDetails(this.getOutstanding());
    }

    printBanner() {        
        console.log(`*************************`);
        console.log(`***** Customer Owes *****`);
        console.log(`*************************`);
    }

    getOutstanding() {        
        let result = 0.0;
        for (let amount of this.amounts) {
            result += amount;
        }
        return result;
    }

    printDetails(outstanding: number) {        
        console.log("name : " + this.name);
        console.log("amount : " + outstanding);
    }

}