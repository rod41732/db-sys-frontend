import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resolve } from 'url';

const baseURL = 'http://localhost:3000';

interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(
    url: string,
    params?: any,
    credentials: boolean = true
  ): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    if (params) {
      options.params = params;
    }
    return this.http.get<T>(resolve(baseURL, url), options);
  }

  post<T>(url: string, data: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    return this.http.post<T>(resolve(baseURL, url), data, options);
  }

  // files is {fileKey: File Object}
  postForm<T>(url: string, data: any, files: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    for (let key in files) {
      formData.append(key, data[key], data[key].name);
    }
    return this.http.post<T>(resolve(baseURL, url), formData, options);
  }

  put<T>(url: string, data: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    return this.http.put<T>(resolve(baseURL, url), data, options);
  }

patch<T>(url: string, data: any, credentials: boolean = true): Observable<T> {
  const options: HttpOptions = {};
  options.withCredentials = credentials;
  return this.http.patch<T>(resolve(baseURL, url), data, options);
}

  resolve(url: string) {
    return resolve(baseURL, url);
  }

  delete<T>(
    url: string,
    params?: any,
    credentials: boolean = true
  ): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    if (params) {
      options.params = params;
    }
    return this.http.delete<T>(resolve(baseURL, url), options);
  }
}
