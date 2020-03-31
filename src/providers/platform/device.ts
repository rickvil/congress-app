import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class Device {
    constructor(private platform: Platform) {}

    isApp(): boolean {
        return this.platform.platforms().includes('cordova');
    }

    logNotCordova(nameService: string): void {
        console.group(`No physical device [${nameService}]`);
        console.groupEnd();
    }

    logError(error?: Error): void {
        const errorOutput = error || new Error('error');
        console.error(errorOutput);
    }
}
