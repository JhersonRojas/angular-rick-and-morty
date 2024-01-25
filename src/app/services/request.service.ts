// Angular features
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces / Constantes
import { CONST_URL_API } from '../../libs/constants/global.values';
import { Character, Request_RickAndMorty } from '../../libs/interfaces/global.types';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  private baseurl: string = CONST_URL_API

  constructor(private http: HttpClient) { }

  /**
   * @description Petición get para obtener los personajes primarios del API rest
   */
  public getCharacters(query?: string): Observable<Request_RickAndMorty> {
    return this.http.get<Request_RickAndMorty>(this.baseurl + (query ? `/api/character/?name=${query}` : '/api/character'))
  }

  public getOneCharacter(param: string): Observable<Character> {
    return this.http.get<Character>(this.baseurl + `/api/character/${param}`)
  }

}
