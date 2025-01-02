import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChatAppComponent } from './chat-app/chat-app.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChatAppComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Main App with Routing';
}
