export class Client {
    _id: string;
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phone1: string;
    phone2: string;
    email: string;
    joinedDate: Date;
    leftDate: Date;
    notes: string;
    locations: Location[];
}