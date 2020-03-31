export class Hotel {
    public name: string;
    public address: string;
    public image: string;

    constructor(data: any) {
        if (data) {
            this.name = data.name;
            this.address = data.address;
            this.image = data.image;
        }
    }
}