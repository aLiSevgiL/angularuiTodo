import { Routes } from '@angular/router';
import { DevComponent } from './page/dev/dev.component';
import { IndexComponent } from './page/index/index.component';


export const routes: Routes = [
    {path:'dev',component:DevComponent},
    {path:'',component:IndexComponent}
];
