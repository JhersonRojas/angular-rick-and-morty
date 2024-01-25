// Angular features
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Interfaces
import { ResponseTypes } from '../../../libs/interfaces/global.types';

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
        private route: ActivatedRoute,
        private service: RequestService
    ) { }

    ngOnInit(): void {
        this.registerParams()
        this.getCharacters()
    }

    /**
     * Metodo privado para detectar los cambios de la url de la página
     */
    private registerParams(): void {
        this.router.events.subscribe(() => {
            this.getQueryParams()
            this.getCharacters()
        })
    }

    /**
     * Metodo privado para obtener la busqueda de un personaje
     */
    private getQueryParams(): void {
        this.route.queryParams.subscribe(params => {
            this.queryParam = params["search"]
        })
    }

    /**
     * Metodo para obtener los personajes desde un API rest
     */
    private getCharacters(): void {
        this.service.getCharacters(this.queryParam).subscribe({
            next: (value) => this.response.characters = value.results,
            error: (err) => this.response.error = "Error al solicitar los personajes",
            complete: () => this.response.load = true
        })
    }

}
