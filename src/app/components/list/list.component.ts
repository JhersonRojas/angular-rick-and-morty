// Angular features
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Interfaces
import { Character, ResponseTypes } from '../../../libs/interfaces/global.types';

// Services
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  host: { 'class': 'app-list' }
})

export class ListComponent implements OnInit {

  private queryParam?: string
  public response: ResponseTypes = { load: false }

  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private service: RequestService
  ) { }

  ngOnInit(): void {
    this.registerParams()
    this.getQueryParams()
    this.getCharacters()
  }

  private registerParams(): void {
    this.router.events.subscribe((event) => {
      this.getCharacters()
    })
  }

  private getQueryParams(): void {
    this.active.queryParams.subscribe(params => {
      this.queryParam = params["search"]
    })
  }

  private getCharacters(): void {
    this.service.getResults(this.queryParam).subscribe({
      next: (value) => this.response.characters = value.results,
      error: (err) => this.response.error = "Error al solicitar los personajes",
      complete: () => this.response.load = true
    })
  }

  public getCharacter(character: Character): void {
    console.log(character)
  }

}
