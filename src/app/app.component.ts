import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';
import { GenaiService } from './service/genai.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  constructor(private genaiService: GenaiService) {}

  // variable
  userMessage = ''; // user input
  chatHistory: { sender: string, message: string }[] = []; // chat history

  // chat api
  sendMessage(): void {
    const payload = { question: this.userMessage.trim() };

    if (this.userMessage.trim()) {
      // user input, push to array
      this.chatHistory.push({ sender: 'user', message: this.userMessage });

      // POST request
      this.genaiService.postData(payload).subscribe({
        next: (response) => {
          // api response, push to array
          const botMessage = (response as any).choices[0].message.content;
          this.chatHistory.push({ sender: 'bot', message: botMessage });
        },
        error: (error) => {
          // error control, push to array
          console.error('Error sending message:', error);
          this.chatHistory.push({ sender: 'bot', message: '[Error] Could not get a response.' });
        }
      });

      // clear user input
      this.userMessage = '';
    }
  }

}
