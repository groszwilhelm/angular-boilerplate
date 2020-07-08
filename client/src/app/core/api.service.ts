import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiMethodPayload, CreateRequestPayload, RequestMethods } from './models/api-service.models';

@Injectable({providedIn: 'root'})
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  public get({ endpoint, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({ method: RequestMethods.GET, endpoint, headers });
  }

  public patch(): void {
    throw new Error('Patch not implemented');
  }

  public post({ endpoint, body, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({ method: RequestMethods.POST, endpoint, body, headers });
  }

  public put({ endpoint, body, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({ method: RequestMethods.PUT, endpoint, body, headers });
  }

  public delete({ endpoint, body, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({ method: RequestMethods.DELETE, endpoint, body, headers });
  }

  private createRequest({ method, endpoint, body, headers }: CreateRequestPayload): Observable<any> {
    if (method === RequestMethods.GET) {
      return this.http[method](`${this.apiUrl}/${endpoint}`, { headers });
    }

    return this.http[method](`${this.apiUrl}/${endpoint}`, body, { headers });
  }
}
