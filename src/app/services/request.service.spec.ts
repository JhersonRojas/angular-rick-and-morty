import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Interfaces / Constantes
import { CONST_URL_API } from '../../libs/constants/global.values';
import { Character, Request_RickAndMorty } from '../../libs/interfaces/global.types';

// Servicio
import { RequestService } from './request.service';

// Test
describe('RequestService', () => {

  let baseUrl = CONST_URL_API
  let service: RequestService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RequestService]
    })

    service = TestBed.inject(RequestService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('#getResults should get the data from API', () => {
    const mockResponse: Request_RickAndMorty = {
      info: { count: 1, pages: 1, next: '', prev: null },
      results: [
        {
          id: 1,
          url: '',
          type: '',
          image: '',
          gender: 'Male',
          status: 'Alive',
          species: 'Human',
          name: 'Rick Sanchez',
          episode: [''],
          origin: { name: '', url: '' },
          location: { name: '', url: '' },
          created: new Date()
        }
        // "Más" personajes que debería tener la respuesta
      ]
    }

    service.getCharacters().subscribe((data: Request_RickAndMorty) => {
      expect(data).toEqual(mockResponse)
    })

    const req = httpMock.expectOne(baseUrl + '/api/character')

    expect(req.request.method).toBe('GET')

    req.flush(mockResponse)
  })

  it('#getOneResult shold get one character from API', () => {
    const mockResponse: Character = {
      id: 1,
      url: '',
      type: '',
      image: '',
      gender: 'Male',
      status: 'Alive',
      species: 'Human',
      name: 'Rick Sanchez',
      episode: [''],
      origin: { name: '', url: '' },
      location: { name: '', url: '' },
      created: new Date()
    }

    service.getOneCharacter('1').subscribe((data: Character) => {
      expect(data).toEqual(mockResponse)
    })

    const req = httpMock.expectOne(baseUrl + '/api/character/1')

    expect(req.request.method).toBe('GET')
    req.flush(mockResponse)
  })

})
