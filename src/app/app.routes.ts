import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', redirectTo: 'chat', pathMatch: 'full' },  // default routing
  { path: 'chat', component: ChatAppComponent }
];
