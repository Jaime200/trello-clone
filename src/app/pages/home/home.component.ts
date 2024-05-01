import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBox,
  faWaveSquare,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarComponent, FontAwesomeModule ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public faTrello = faTrello
  public faBox = faBox
  public faWaveSquare = faWaveSquare
  public faClock = faClock
}
