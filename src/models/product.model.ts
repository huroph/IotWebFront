export class Product {
    id: Number;
    quantity: Number;
    unitPrice: Number;
    name: String;

    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.quantity = json.quantity||1;
        this.unitPrice = json.unitPrice||0;
    }
}