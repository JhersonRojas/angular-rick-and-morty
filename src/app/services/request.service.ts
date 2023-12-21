// Angular features
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Interfaces
import { Request_RickAndMorty } from '../../libs/interfaces/global.types';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  async getInformation() {
    return await new Promise<Request_RickAndMorty>((resolve, reject) => {
      this.http.get('https://rickandmortyapi.com/api/character').subscribe({
        next: (data: any) => resolve(data),
        error: (e) => reject(e)
      })
    })
  }

}
