import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const baseURL = 'https://apilol-seven.vercel.app/'
const championsURL = baseURL + 'api/campeones'
const callesURL = baseURL + "api/calles"

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  public getCalles(): Observable<any> {

    return this.httpClient.get(callesURL)

  }

  public getChampions(calle: any): Observable<any> {

    return this.httpClient.get(championsURL)
  
  }

}