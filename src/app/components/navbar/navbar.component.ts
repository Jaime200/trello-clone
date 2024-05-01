import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ ButtonComponent, OverlayModule, FontAwesomeModule ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
  public faBell = faBell
  public faInfoCircle = faInfoCircle
}
