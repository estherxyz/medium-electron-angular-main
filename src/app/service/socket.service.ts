import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    // this.socket$ = webSocket<any>('ws://127.0.0.1/ws');
    this.socket$ = webSocket('ws://127.0.0.1:8080/ws?userId=u123');

  }

  sendMessage(message: any): void {
    this.socket$.next(message);
  }

  getMessages(): Observable<any> {
    // return this.socket$.asObservable();
    return this.socket$.asObservable().pipe(
      map((message: any) => {
        return message;
        // try {
        //   return JSON.parse(message);
        // } catch {
        //   console.warn('Non-JSON message received:', message);
        //   return { rawMessage: message }; // 直接返回原始消息或忽略
        // }

      })
    );
  }

  closeConnection(): void {
    this.socket$.complete();
  }

}
