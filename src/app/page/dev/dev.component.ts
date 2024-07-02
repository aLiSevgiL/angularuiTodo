import { Component, EventEmitter, Output } from '@angular/core';
import { TestComponent } from "../../compenents/test/test.component";


@Component({
    selector: 'app-dev',
    standalone: true,
    templateUrl: './dev.component.html',
    styleUrl: './dev.component.css',
    imports: [TestComponent]
})
export class DevComponent {

 userName:string = 'ALiiiiii';

 @Output() devdegiskeni = new EventEmitter<string>();

 



}
