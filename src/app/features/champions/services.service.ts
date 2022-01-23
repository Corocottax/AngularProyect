import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'https://apilol-seven.vercel.app/'
const championsURL = baseURL + 'api/campeones'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  public getChampions(): Observable<any> {

    return this.httpClient.get(championsURL)
  
  }

  public getChampion(name: any) {

    return this.httpClient.get(`${championsURL}/${name}`)

  }

}
