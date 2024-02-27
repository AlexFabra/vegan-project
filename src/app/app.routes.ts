import { Routes } from '@angular/router';
import { InitComponent } from './pages/init/init.component';
import { TextChooseComponent } from './pages/text-choose/text-choose.component';

export const routes: Routes = [
    {path: 'init', component:InitComponent},
    {path: 'choose', component:TextChooseComponent},
    { path: '**', redirectTo: '/choose' }
];
