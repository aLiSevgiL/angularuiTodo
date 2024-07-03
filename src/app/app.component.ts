import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostComponent } from "./compenents/post/post.component";
import { UserComponent } from "./compenents/user/user.component";
import { NavbarComponent } from "./compenents/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, PostComponent, UserComponent, NavbarComponent,HttpClientModule]
})
export class AppComponent {
/* */ 
  title = 'Ali Sevgil';
  user ="İncirtepe"


}
