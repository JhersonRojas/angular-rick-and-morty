// Angular features
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

// Interfaces
import { FormTypes } from '../../../libs/interfaces/forms.types';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent implements OnInit {

  public queryForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.queryForm = this.fb.group({ query: [''] })
  }

  searchQuery() {
    const { query }: FormTypes = this.queryForm.value
    console.log(query)
  }

  resetQuery() {
    this.queryForm.reset()
  }

}
