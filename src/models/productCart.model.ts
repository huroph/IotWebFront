export class ProductCart {
    id: Number;
    quantity: Number;
    unitPrice: Number;
    name: String;
    src: String;

    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.quantity = json.quantity||1;
        this.unitPrice = json.unitPrice||0;
        this.src = json.src||undefined;
    }
}