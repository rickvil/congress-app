export class Speaker {
    public name: string;
    public schedule: string;
    public topic: string;
    public image: string;

    constructor(data: any) {
        if (data) {
            this.name = data.name;
            this.schedule = data.schedule;
            this.topic = data.topic;
            this.image = data.image;
        }
    }
}