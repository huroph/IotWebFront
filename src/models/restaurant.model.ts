import {RestaurantCategory} from "@/models/restaurantCategory.model";

export class Restaurant{
    _id?: string;
    name: string;
    desc: string;
    address: string;
    phone: string;
    siret: string;
    img: string;
    deliveryCharges: number;
    status: string;
    userId: string;
    restaurantCategoryId?: string;
    restaurantCategory: RestaurantCategory;

    constructor(json?: any){
        this._id = json._id || "";
        this.name = json.name||"";
        this.desc = json.desc||"";
        this.address = json.address||"";
        this.phone = json.phone||"";
        this.siret = json.siret||"";
        this.img = json.img||"";
        this.deliveryCharges = json.deliveryCharges||0;
        this.status = json.status||"";
        this.userId = json.userId||"";
        this.restaurantCategoryId = json.restaurantCategoryId||"";
        this.restaurantCategory = new RestaurantCategory(json.restaurantCategory||{});
    }
    headers(){
        return [
            {text: "id", value: "_id"},
            {text: "Nom", value: "name"},
            {text: "Description", value: "desc"},
            {text: "Adresse", value: "address"},
            {text: "Téléphone", value: "phone"},
            {text: "SIRET", value: "siret"},
            {text: "Image", value: "img"},
            {text: "Frais de livraison", value: "deliveryCharges"},
            {text: "Statut", value: "status", sortable: true},
            {text: "Utilisateur", value: "userId"},
            {text: "Catégorie", value: "restaurantCategory.name"},
        ]


    }
}