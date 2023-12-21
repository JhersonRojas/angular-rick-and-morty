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
  styleUrl: './list.component.scss'
})

export class ListComponent implements OnInit {

  public characters: Result[] = []

  constructor(private reqservice: RequestService) { }

  ngOnInit(): void {
    const initResquest = async () => {
      const response = await this.reqservice.getInformation()
      if (response) this.characters = [...response.results, ...response.results]
    }
    initResquest()
  }

  getCharacter(character: Result) {
    console.log(character)
  }
}
