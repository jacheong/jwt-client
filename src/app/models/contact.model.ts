export class Contact {
    _id: string;
    name: string;
    address: string;
    phone: string;
    photoUrl: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || "";
        this.name = obj && obj.name || "";
        this.address = obj && obj.address || "";
        this.phone = obj && obj.phone || "";
        this.photoUrl = obj && obj.photoUrl || "";
    }
}