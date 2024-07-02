import { Component, Input } from '@angular/core';
import { DevComponent } from "../../page/dev/dev.component";

@Component({
    selector: 'app-test',
    standalone: true,
    templateUrl: './test.component.html',
    styleUrl: './test.component.css',
    imports: [DevComponent]
})
export class TestComponent {

  @Input() name :string=''
  
  @Input() name2:string='Hayratli';

}
