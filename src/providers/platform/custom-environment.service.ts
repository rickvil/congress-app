import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CustomEnvironmentService {
    private envConfig: any = {};

    constructor() {
        this.envConfig = environment;
    }

    public async envConfiguration(): Promise<any> {
        return new Promise((resolve, reject) =>
            this.envConfig ? resolve(this.envConfig) : reject(new Error('Error with envConfiguration!')),
        );
    }

    public getEnv() {
        return this.envConfig;
    }
}
