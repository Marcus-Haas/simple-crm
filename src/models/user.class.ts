export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    postal: number;
    city: string;
    email: string;
    id: string;
    phone: number;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : 0;
        this.street = obj ? obj.street : '';
        this.postal = obj ? obj.postal : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
        this.id = obj ? obj.id : '';
        this.phone = obj ? obj.phone : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            postal: this.postal,
            city: this.city,
            email: this.email,
            id: this.id,
            phone: this.phone
        }
    }
}