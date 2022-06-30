
export class Product{
    _id?: string;
    name: string;
    desc: string;
    img: string;
    price: number;
    status: string;
    userId: string;
    restaurantId: string;

    constructor(json?: any){
        this._id = json._id || "";
        this.name = json.name||"";
        this.desc = json.desc||"";
        this.img = json.img||"";
        this.price = json.price||0;
        this.status = json.status||"";
        this.userId = json.userId||"";
        this.restaurantId = json.restaurant||"";
    }
    headers(){
        return [
            {text: "id", value: "_id"},
            {text: "Nom", value: "name"},
            {text: "Description", value: "desc"},
            {text: "Image", value: "img"},
            {text: "Prix", value: "price"},
        ]


    }
}