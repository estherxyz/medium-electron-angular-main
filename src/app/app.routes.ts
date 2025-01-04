import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { LoginAppComponent } from './login-app/login-app.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // default routing
  { path: 'chat', component: ChatAppComponent },
  { path: 'login', component: LoginAppComponent}
];
