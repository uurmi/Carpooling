import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {appRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {ReactiveFormsModule} from '@angular/forms';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {LoginComponent} from './login';
import {AdminComponent} from './admin/admin.component';
import {Resolver} from './_helpers/resolver';
import {PostResolver} from './_helpers/postResolver';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostComponent,
    FourOhFourComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    Resolver,
    PostResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
