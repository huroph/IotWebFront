export class RestaurantCategory{
    _id?: string;
    name: string;

    constructor(json: any){
        this._id = json._id||undefined;
        this.name = json.name||undefined;
    }
}