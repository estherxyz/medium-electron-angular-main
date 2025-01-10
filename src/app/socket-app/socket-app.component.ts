import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UserStatusService } from '../service/user-status.service';
import { SocketService } from '../service/socket.service';


@Component({
  selector: 'app-socket-app',
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
  templateUrl: './socket-app.component.html',
  styleUrl: './socket-app.component.css'
})


export class SocketAppComponent {
  title = 'Socket App with Routing';

  constructor(
    private userStatus: UserStatusService,
    private socketService: SocketService
  ) {}

  // variable
  webMessage: string = '';
  webMessages: string[] = [];


  ngOnInit(): void {
    this.socketService.getMessages().subscribe((msg) => {
      this.webMessages.push(msg);
    });
  }

  sendMessage(): void {
    this.socketService.sendMessage(this.webMessage);
    this.webMessage = '';
  }

  ngOnDestroy(): void {
    this.socketService.closeConnection();
  }

}
