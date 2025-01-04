import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ApiService } from '../service/api.service';
import { GenaiService } from '../service/genai.service';
import { UserStatusService } from '../service/user-status.service';


@Component({
  selector: 'app-chat-app',
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
  templateUrl: './chat-app.component.html',
  styleUrl: './chat-app.component.css'
})


export class ChatAppComponent {
  title = 'Chat App with Routing';

  constructor(
    private genaiService: GenaiService, 
    private userStatus: UserStatusService
  ) {}

  // variable
  public userMessage = ''; // user input
  public chatHistory: { sender: string, message: string }[] = []; // chat history

  // chat api
  sendMessage(): void {
    var payload = { question: this.userMessage.trim() };

    if (this.userMessage.trim()) {
      // user input, push to array
      this.chatHistory.push({ sender: 'user', message: this.userMessage });

      // POST request
      this.genaiService.postData(payload).subscribe({
        next: (response) => {
          var botMessage = "";
          
          if ( 'error' in response ){
            botMessage = '[Error] ' + (response as any).error.message;
          } else {
            botMessage = (response as any).choices[0].message.content;
          }
          // api response, push to array
          this.chatHistory.push({ sender: 'bot', message: botMessage });
        },

        error: (error) => {
          console.error('Error sending message:', error);
          // error control, push to array
          this.chatHistory.push({ sender: 'bot', message: '[Error] Could not get a response.' });
        }
      });

      // clear user input
      this.userMessage = '';
    }
  }


  // return sender type.
  getSender(chat: any): string {
    if(chat.sender==='user') {
      return this.userStatus.getUserNumber() + ': ';
    } 

    return 'Bot: '
  }

}
