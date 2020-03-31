export class Organizer {
    public name: string;
    public description: string;
    public image: string;

    constructor(data: any) {
        if (data) {
            this.name = data.name;
            this.description = data.description;
            this.image = data.image;
        }
    }
}