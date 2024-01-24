// Ng features
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { ResponseTypes } from '../../../libs/interfaces/global.types';

// Services
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-character',
    standalone: true,
    imports: [],
    templateUrl: './character.component.html',
    styleUrl: './character.component.scss'
})

export class CharacterComponent implements OnInit {

    public queryParam?: string
    public response: ResponseTypes = { load: false }

    constructor(
        private route: ActivatedRoute,
        private service: RequestService
    ) { }

    ngOnInit(): void {
        this.getQueryParams()
        this.getCharacter()
    }

    /**
     * Metodo privado para obtener la busqueda de un personaje
     */
    private getQueryParams(): void {
        this.route.queryParams.subscribe(params => {
            this.queryParam = params["id"]
        })
    }

    /**
     * Metodo para obtener a un personaje especifico en cuanto su ID
     */
    private getCharacter(): void {
        if (this.queryParam) {
            this.service.getOneResult(this.queryParam).subscribe({
                next: (value) => this.response.character = value,
                error: (err) => this.response.error = "Error al solicitar al personaje",
                complete: () => this.response.load = true
            })
        }
    }
}
