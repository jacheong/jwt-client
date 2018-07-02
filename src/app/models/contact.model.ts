export class Contact {
    name: string;
    address: string;
    phone: string;
    photoUrl: string;

    constructor(obj?: any) {
        this.name = obj && obj.name || "";
        this.address = obj && obj.address || "";
        this.phone = obj && obj.phone || "";
        this.photoUrl = obj && obj.photoUrl || "";
    }
}