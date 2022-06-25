export class Role {
    id: string;
    name: string;
    desc: string;

    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.desc = json.desc;
    }
}