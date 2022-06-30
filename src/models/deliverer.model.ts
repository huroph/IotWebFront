export class Deliverer {
    _id?: string;
    userId: string;
    status: string;
    constructor(json?: any){
        this._id = json._id || "";
        this.userId = json.userId||"";
        this.status = json.status||"";
    }

    headers(){
        return [
            {text: "id", value: "_id"},
            {text: "Utilisateur", value: "userId"},
            {text: "Statut", value: "status", sortable: true},
        ]
    }
}