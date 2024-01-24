// Ng features
import { Component } from '@angular/core';

// Components
import { ListComponent } from '../../components/list/list.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
