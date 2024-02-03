import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'user', component: UserComponent },
];
