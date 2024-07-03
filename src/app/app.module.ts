import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './compenents/user/user.component';
import { PostComponent } from './compenents/post/post.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { RouterModule, provideRouter } from '@angular/router';



/*
@NgModule({
  declarations: [AppComponent,UserComponent,PostComponent,NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


*/

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),  // Rota yapılandırmalarını buraya ekleyebilirsiniz.
  ],
});
