// Angular features
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Interfaces
import { FormTypes } from '../../../libs/interfaces/forms.types';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss',
    host: { 'class': 'app-search' }
})

export class SearchComponent implements OnInit {

    public queryForm: FormGroup = new FormGroup({})

    constructor(
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.queryForm = this.fb.group({ query: [''] })
    }

    /**
     * Metodo para añadir a la ruta una busqueda por parametro
     */
    public searchQuery(): void {
        const { query }: FormTypes = this.queryForm.value
        if (query === null || query === '') {
            this.router.navigate(['/'])
        } else {
            this.router.navigate(['/'], { queryParams: { search: query } })
        }
    }

    /**
     * Metodo para reiniciar el valor del formulario para la busqueda
     */
    public resetQuery(): void {
        this.queryForm.reset()
    }

}
