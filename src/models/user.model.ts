import {Role} from './role.model';

export class User{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    roleId: string;
    role: Role;
    accessToken: string;

    constructor(json: any) {
        this.id = json.id;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.email = json.email;
        this.address = json.address;
        this.phone = json.phone;
        this.roleId = json.roleId;
        this.role = new Role(json.role);
        this.accessToken = json.accessToken;

    }
}