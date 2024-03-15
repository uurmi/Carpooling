import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login';
import {AuthGuard} from './_helpers';
import {PostComponent} from './post/post.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AdminComponent} from './admin/admin.component';
import {Resolver} from './_helpers/resolver';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, resolve: {resolver: Resolver}},
  {path: '', component: DashboardComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

export const appRoutingModule = RouterModule.forRoot(routes);
