import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { SocketAppComponent } from './socket-app/socket-app.component';


export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', redirectTo: 'ws-demo', pathMatch: 'full' },  // default routing
  { path: 'chat', component: ChatAppComponent },
  { path: 'login', component: LoginAppComponent},
  { path: 'ws-demo', component: SocketAppComponent}
];
