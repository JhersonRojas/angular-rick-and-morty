// Angular features
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { Request_RickAndMorty } from '../../libs/interfaces/global.types';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  private baseurl: string = 'https://rickandmortyapi.com'

  constructor(private http: HttpClient) { }

  /**
   * @description Petición get para obtener los personajes primarios del API rest
   */
  public getInformation(): Observable<Request_RickAndMorty> {
    return this.http.get<Request_RickAndMorty>(this.baseurl + '/api/character')
  }

}
