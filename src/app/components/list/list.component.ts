// Angular features
import { Component, OnInit } from '@angular/core';

// Interfaces
import { Result } from '../../../libs/interfaces/global.types';

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

  public characters: Result[] = []
  public loadCharecters: boolean = false

  constructor(private service: RequestService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  private getCharacters() {
    this.service.getInformation().subscribe({
      next: (value) => {
        if (value.results) {
          this.loadCharecters = true
          this.characters = value.results
        }
      },
      error: (err) => {

      }
    })
  }

  public getCharacter(character: Result) {
    console.log(character)
  }
}
