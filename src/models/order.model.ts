export class Order {
    _id?: string;
    clientId: string;
    deliverer?: string;
    restaurantId?: string;
    itemsId: string[];
    items: string[];
    status: number
    constructor(json?: any){
        this._id = json._id || "";
        this.clientId = json.clientId||"";
        this.deliverer = json.deliverer||"";
        this.restaurantId = json.restaurant||"";
        this.itemsId = json.itemsId||[];
        this.items = json.items||[];
        this.status = json.status||0;

    }

    headers(){
        return [
            {text: "id", value: "_id"},
            {text: "Client", value: "clientId"},
            {text: "Livreur", value: "deliverer"},
            {text: "Restaurant", value: "restaurantId"},
            {text: "Items", value: "itemsId"},
            {text: "Status", value: "status", sortable: true},
        ]
    }
}