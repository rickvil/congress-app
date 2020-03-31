import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { CustomEnvironmentService } from '../platform/custom-environment.service';

@Injectable({
    providedIn: 'root',
})
export class CustomHttpService {
    constructor(private customEnvironmentService: CustomEnvironmentService, private httpClient: HttpClient) {
        // do nothing.
    }

    get(resource: string): Promise<any> {
        return this.simpleGet(resource)
            .then((response) => response)
            .catch((error) => this._serverError(error));
    }

    post(resource: string, request: any): Promise<any> {
        return this.simpleJsonPost(resource, request)
            .then((response) => response)
            .catch((error) => this._serverError(error));
    }

    simpleJsonPost(resource: string, request: any) {
        const requestAsJson = request;
        return this.customEnvironmentService
            .envConfiguration()
            .then((env) => this.httpClient.post(env.apiGatewayURL.concat(resource), requestAsJson).toPromise());
    }

    simpleGet(resource: string) {
        return this.customEnvironmentService
            .envConfiguration()
            .then((env) => this.httpClient.get(env.apiGatewayURL.concat(resource)).toPromise());
    }

    buildUrl(resource: string) {
        const env = this.customEnvironmentService.getEnv();
        return env.apiGatewayURL.concat(resource);
    }

    private _serverError(error: any) {
        if (error instanceof Response) {
            return throwError(error.json() || ' backend server error');
        }
        return throwError(error || ' backend server error');
    }
}
