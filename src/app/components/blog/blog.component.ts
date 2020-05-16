import { Component} from '@angular/core';
import{ CanComponentDeactivate } from '../../guards/can-component-deactivate';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements CanComponentDeactivate {

  confirm(){
    return confirm('are you sure you want to navigate away from Blog?');
  }

}
