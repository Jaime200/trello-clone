import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBox,
  faWaveSquare,
  faClock,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
  faAngleUp,
  faAngleDown

} from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarComponent, FontAwesomeModule , CdkAccordionModule, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public faTrello = faTrello
  public faBox = faBox
  public faWaveSquare = faWaveSquare
  public faClock = faClock
  public faHeart =faHeart
  public faBorderAll =faBorderAll
  public faUsers =faUsers
  public faGear =faGear
  public faAngleUp= faAngleUp
  public faAngleDown= faAngleDown

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1'
        },
        {
          label: 'Sub Item 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1'
        },
        {
          label: 'Sub Item 3.2'
        },
        {
          label: 'Sub Item 3.3'
        }
      ]
    }
  ]
}
